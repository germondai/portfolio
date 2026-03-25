# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.3.10-slim AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp
COPY package.json bun.lock /temp/
RUN cd /temp && bun --bun install --shamefully-hoist --frozen-lockfile

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/node_modules node_modules
COPY . .

ARG NUXT_PUBLIC_SCRIPTS_GOOGLE_ANALYTICS_ID
ENV NUXT_PUBLIC_SCRIPTS_GOOGLE_ANALYTICS_ID=${NUXT_PUBLIC_SCRIPTS_GOOGLE_ANALYTICS_ID}

# zenstack:generate, prisma:deploy, format, build and compress
ENV NODE_ENV=production
RUN bun --bun generate

# copy production dependencies and source code into final image
FROM nginx:stable-alpine AS release
COPY --from=prerelease /usr/src/app/.output/public /usr/share/nginx/html

# run the app
EXPOSE 80:80
CMD ["nginx", "-g", "daemon off;"]
