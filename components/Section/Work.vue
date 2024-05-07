<template>
  <section id="work">
    <div class="cont-1">
      <div class="col-2 anim-bottom">
        <sub>Work</sub>
        <h1>Projects</h1>
        <h2></h2>
        <p>
          Following projects showcase my skills and experiences in handling real
          projects. Each of the listed projects below includes a link to live
          demo example where you can take a detailed view. Additionally, each
          project is tagged with programming languages, frameworks or libraries
          that were primarily used in their development.
        </p>
      </div>
      <div id="cards" class="col-2 demo-tabs">
        <div class="col-3 anim-left effect-holo card">
          <div class="links"></div>
          <a href="./chronitask/" target="_blank" class="card-content">
            <div>
              <img
                src="/img/portfolio-chronitask.webp"
                alt="Chronitask Website Preview"
                loading="lazy"
              />
              <h3>Chronitask</h3>
            </div>
            <p>
              Fully integrated PHP & JavaScript Online to-do task-list website
              app with secure database connectivity protected against injection.
              User friendly and optimized interface.
            </p>
            <div class="tags">
              <sub class="tag-php">#PHP</sub><sub class="tag-mysql">#MySQL</sub
              ><sub class="tag-jquery">#jQuery</sub
              ><sub class="tag-ajax">#AJAX</sub
              ><sub class="tag-sass">#Sass</sub>
            </div>
          </a>
        </div>

        <div class="col-3 anim-left effect-holo card">
          <div class="links"></div>
          <a href="./eshop/" target="_blank" class="card-content">
            <div>
              <img
                src="/img/portfolio-eshop.webp"
                alt="Germond's E-Shop Website Preview"
                loading="lazy"
              />
              <h3>Germond's E-Shop</h3>
            </div>
            <p>
              E-Commerce PHP Online Shop with database connectivity and its own
              Content Management System for editing not only products, but also
              pages and variations.
            </p>
            <div class="tags">
              <sub class="tag-php">#PHP</sub><sub class="tag-mysql">#MySQL</sub
              ><sub class="tag-jquery">#jQuery</sub>
            </div>
          </a>
        </div>

        <div class="col-3 anim-left effect-holo card">
          <div class="links"></div>
          <a href="./" target="_self" class="card-content">
            <div>
              <img
                src="/img/portfolio-germondai.webp"
                alt="Germond's Portfolio Website Preview"
                loading="lazy"
              />
              <h3>Germond's Portfolio</h3>
            </div>
            <p>
              Professional user-friendly landing page. Elegant design of
              interface spiced up with clean Parallax effects and smooth
              animations. Fully working PHP contact system and language
              Localization.
            </p>
            <div class="tags">
              <sub class="tag-javascript">#JavaScript</sub
              ><sub class="tag-jquery">#jQuery</sub
              ><sub class="tag-css3">#CSS3</sub>
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
