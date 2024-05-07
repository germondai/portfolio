<template>
  <section id="work">
    <div class="cont-1">
      <div class="col-2 anim-bottom">
        <sub>{{ $t('work.sub') }}</sub>
        <h1>{{ $t('work.title') }}</h1>
        <p>{{ $t('work.content') }}</p>
      </div>
      <div id="cards" class="col-2 demo-tabs">
        <div
          v-for="(project, i) in $tm('work.projects')"
          :key="i"
          class="col-3 anim-left effect-holo card"
        >
          <div class="links">
            <a
              v-for="(link, j) in $tm(project.links)"
              :key="j"
              href="'.$value.'"
            >
              <img :src="`assets/img/'.$key.'-light.webp`" alt=""
            /></a>
          </div>
          <a
            :href="$rt(project.href)"
            target="'.($row['href'] === './' ? '_self' : '_blank').'"
            class="card-content"
          >
            <div>
              <img
                :src="$rt(project.src)"
                :alt="$rt(project.alt)"
                loading="lazy"
              />
              <h3>{{ $rt(project.title) }}</h3>
            </div>
            <p>{{ $rt(project.content) }}</p>
            <div
              v-for="(tagKey, tagValue, k) in $tm(project.tags)"
              :key="k"
              class="tags"
            >
              <sub class="tag-'.strtolower($key).'"></sub>
            </div>
          </a>
        </div>
      </div>
    </div>
    <ParallaxBgWork />
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
