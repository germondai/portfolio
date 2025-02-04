# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.2.2-slim AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp
COPY package.json bun.lock /temp/
RUN cd /temp && bun install --frozen-lockfile

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/node_modules node_modules
COPY . .

# zenstack:generate, prisma:deploy, format, build and compress
ENV NODE_ENV=production
RUN bun run build
RUN bun compress

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=prerelease /usr/src/app/.output .

# run the app
USER bun
EXPOSE 3000:3000
ENTRYPOINT [ "bun", "server/index.mjs" ]
