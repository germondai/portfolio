<template>
  <section id="contact" class="card-allow">
    <div class="cont-1">
      <div class="col-2 anim-bottom">
        <div class="card card-wrapper effect-holo">
          <form action="actions/contact/save.php" method="POST">
            <sub>Contact</sub>
            <h1>Get In Touch</h1>
            <div class="field">
              <input
                id="name"
                type="text"
                name="name"
                maxlength="64"
                required
              />
              <label for="name">Your Name</label>
            </div>
            <div class="field">
              <input
                id="email"
                type="email"
                name="email"
                maxlength="128"
                required
              />
              <label for="email">Your Email</label>
            </div>
            <div class="field">
              <textarea
                id="message"
                type="text"
                name="message"
                maxlength="256"
                required
              ></textarea>
              <label for="message">Your Message</label>
            </div>
            <button type="submit" name="saveContact" class="card-btn">
              Send
            </button>
          </form>
        </div>
      </div>
      <div class="col-2 anim-top">
        <img
          src="/public/img/3D-envelope.webp"
          alt="Envelope Mail"
          loading="lazy"
        />
        <img src="/public/img/3D-devices.webp" alt="Devices" loading="lazy" />
      </div>
    </div>
    <ParallaxBgContact />
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
