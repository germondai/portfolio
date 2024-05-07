<template>
  <main>
    <section id="welcome">
      <div class="w-4/5 h-full mx-auto flex items-center justify-center">
        <div class="w-3/5 flex flex-col anim-left">
          <sub v-motion-roll-bottom>{{ $t('welcome.sub') }}</sub>
          <h1 v-motion-slide-visible-once-right>
            {{ $t('welcome.title') }}
            <span class="text-gradient">Germond</span>
          </h1>
          <p v-motion-slide-visible-once-left>{{ $t('welcome.content') }}</p>
          <LangSwitcher class="mt-12" />
        </div>
        <div
          class="relative w-2/5 h-[90%] py-12 flex items-center justify-center anim-bottom"
        >
          <img
            src="/img/3D-rocket.webp"
            alt="3D Rocket"
            loading="lazy"
            class="absolute max-h-[90%] max-w-[528px] flex py-4 blur-[8px] opacity-30 animate-[float_2s_infinite_ease-in-out]"
          />
          <img
            src="/img/germond-model.webp"
            alt="Germond Model"
            loading="lazy"
            class="max-h-[90%] max-w-[40%] animate-[float_2s_infinite_ease-in-out] drop-shadow-md z-10"
          />
        </div>
      </div>
      <svg
        class="float"
        data-value="-2"
        viewBox="0 0 1440 810"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m1488 810h-1488v-370.91q77 4.76 72 81.51 41-30.6 72 10.4 18-54 72-36 21-99 120-77 70-50 120 20 51-21 72 30 81-39 120 42 2-70 72-68 51-69 120-18 98-22 120 76 53-67 120-14 65-6 72 59 4-116 120-112 29-43 72-14 64-8 72 56 66-6 72 60z"
          fill="rgba(24, 23, 34, 1)"
        />
      </svg>
      <svg
        class="float"
        data-value="2"
        viewBox="0 0 1440 810"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1464 810L0 810 L0 574.62Q15.54 518.16 72 533.7Q100.87 490.57 144 519.43Q231.03 486.46 264 573.5Q286.6 524.1 336 546.69Q364.5 503.19 408 531.69Q457.27 508.96 480 558.23Q549.28 555.51 552 624.8Q575.5 576.29 624 599.79Q678.52 534.31 744 588.83Q760.47 533.3 816 549.76Q888.24 502 936 574.23Q963.98 482.21 1056 510.18Q1128.08 462.25 1176 534.33Q1252.96 539.29 1248 616.25Q1292.38 588.63 1320 633.01Q1321.89 562.9 1392 564.8Q1419.55 520.35 1464 547.89z"
          fill="rgba(31, 26, 45, 1)"
        ></path>
      </svg>
      <svg
        class="float"
        data-value="4"
        viewBox="0 0 1440 810"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1512 810L0 810 L0 656.78Q78.78 615.56 120 694.34Q171.94 626.28 240 678.22Q243.34 609.56 312 612.89Q346.15 575.04 384 609.19Q444.93 598.12 456 659.05Q535.9 618.95 576 698.85Q602 604.85 696 630.84Q772.12 586.96 816 663.08Q882.5 609.58 936 676.07Q1028.49 648.56 1056 741.05Q1079.87 692.91 1128 716.78Q1133.7 650.48 1200 656.18Q1222.06 606.24 1272 628.3Q1363.26 599.56 1392 690.82Q1476.24 655.07 1512 739.31z"
          fill="rgba(37, 30, 57, 1)"
        ></path>
      </svg>
      <svg
        class="float"
        data-value="8"
        viewBox="0 0 1440 810"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1512 810L0 810 L0 826.64Q-4.49 750.14 72 745.65Q97.86 699.51 144 725.37Q201.58 710.95 216 768.54Q248.69 681.23 336 713.93Q401.03 658.96 456 724Q514.88 710.88 528 769.77Q602.64 772.41 600 847.06Q594.32 721.38 720 715.7Q787.46 711.16 792 778.62Q846.65 761.27 864 815.92Q889.99 769.9 936 795.89Q1013.3 753.19 1056 830.49Q1062.69 765.18 1128 771.87Q1160.74 684.61 1248 717.35Q1294.78 692.13 1320 738.91Q1398.74 697.64 1440 776.38Q1510.63 775.01 1512 845.65z"
          fill="rgba(43, 34, 68, 1)"
        ></path>
      </svg>
    </section>
    <section id="about">
      <div
        class="w-4/5 mx-auto h-full flex flex-col items-center justify-center gap-12"
      >
        <div class="w-full flex flex-col anim-bottom">
          <sub>{{ $t('about.sub') }}</sub>
          <h1>{{ $t('about.title') }}</h1>
          <p>{{ $t('about.content') }}</p>
        </div>
        <div
          class="w-[90%] grid grid-cols-4 items-center justify-between gap-16"
        >
          <div
            v-for="(skill, index) in $tm('about.skills')"
            :key="index"
            class="flex flex-col items-center gap-2 anim-left"
            :style="`transition-delay: ${0.05 * index}s`"
          >
            <HoloTilt :scale="1.1" class="size-32">
              <img
                :src="$rt(skill.src)"
                :alt="$rt(skill.alt)"
                loading="lazy"
                class="max-w-full"
              />
            </HoloTilt>
            <b class="text-2xl">{{ $rt(skill.name) }}</b>
          </div>
        </div>
      </div>
      <FloatCont :preset="`bg`">
        <FloatItem :velocity="7" class="w-full h-full -z-30">
          <svg viewBox="0 0 1440 560" preserveAspectRatio="none">
            <path
              d="M 0,26 C 96,34.8 288,68.2 480,70 C 672,71.8 768,33.6 960,35 C 1152,36.4 1344,68.6 1440,77L1440 560L0 560z"
              fill="rgba(24, 23, 34, 1)"
            ></path>
          </svg>
        </FloatItem>
        <FloatItem :velocity="5" class="w-full h-full -z-30">
          <svg viewBox="0 0 1440 560" preserveAspectRatio="none">
            <path
              d="M 0,100 C 96,115.8 288,171.2 480,179 C 672,186.8 768,142 960,139 C 1152,136 1344,159 1440,164L1440 560L0 560z"
              fill="rgba(31, 26, 45, 1)"
            ></path>
          </svg>
        </FloatItem>
        <FloatItem :velocity="2" class="w-full h-full -z-30">
          <svg
            class="float"
            data-value="2"
            viewBox="0 0 1440 560"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,253 C 96,243.2 288,203.4 480,204 C 672,204.6 768,257.4 960,256 C 1152,254.6 1344,208.8 1440,197L1440 560L0 560z"
              fill="rgba(37, 30, 57, 1)"
            ></path>
          </svg>
        </FloatItem>
        <FloatItem :velocity="-0.5" class="w-full h-full -z-30">
          <svg
            class="float"
            data-value="-0.5"
            viewBox="0 0 1440 560"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,359 C 96,350.2 288,317 480,315 C 672,313 768,347.2 960,349 C 1152,350.8 1344,329 1440,324L1440 560L0 560z"
              fill="rgba(31, 26, 45, 1)"
            ></path>
          </svg>
        </FloatItem>
        <FloatItem :velocity="-4" class="w-full h-full -z-30">
          <svg
            class="float"
            data-value="-4"
            viewBox="0 0 1440 560"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,387 C 96,402.6 288,461.2 480,465 C 672,468.8 768,410.8 960,406 C 1152,401.2 1344,434 1440,441L1440 560L0 560z"
              fill="rgba(24, 23, 34, 1)"
            ></path>
          </svg>
        </FloatItem>
        <FloatItem :velocity="-8" class="w-full h-full -z-20 top-[52.5%]">
          <svg
            viewBox="0 0 1440 100"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 45L11.5 43.8C23 42.7 46 40.3 68.8 40.8C91.7 41.3 114.3 44.7 137.2 46.3C160 48 183 48 205.8 51.7C228.7 55.3 251.3 62.7 274.2 68.7C297 74.7 320 79.3 342.8 78.7C365.7 78 388.3 72 411.2 66.8C434 61.7 457 57.3 480 59.8C503 62.3 526 71.7 548.8 72.3C571.7 73 594.3 65 617.2 63.2C640 61.3 663 65.7 685.8 63.8C708.7 62 731.3 54 754.2 53C777 52 800 58 822.8 57.5C845.7 57 868.3 50 891.2 49.8C914 49.7 937 56.3 960 54.7C983 53 1006 43 1028.8 36.5C1051.7 30 1074.3 27 1097.2 34.8C1120 42.7 1143 61.3 1165.8 68.7C1188.7 76 1211.3 72 1234.2 69.3C1257 66.7 1280 65.3 1302.8 65.7C1325.7 66 1348.3 68 1371.2 63C1394 58 1417 46 1428.5 40L1440 34L1440 0L1428.5 0C1417 0 1394 0 1371.2 0C1348.3 0 1325.7 0 1302.8 0C1280 0 1257 0 1234.2 0C1211.3 0 1188.7 0 1165.8 0C1143 0 1120 0 1097.2 0C1074.3 0 1051.7 0 1028.8 0C1006 0 983 0 960 0C937 0 914 0 891.2 0C868.3 0 845.7 0 822.8 0C800 0 777 0 754.2 0C731.3 0 708.7 0 685.8 0C663 0 640 0 617.2 0C594.3 0 571.7 0 548.8 0C526 0 503 0 480 0C457 0 434 0 411.2 0C388.3 0 365.7 0 342.8 0C320 0 297 0 274.2 0C251.3 0 228.7 0 205.8 0C183 0 160 0 137.2 0C114.3 0 91.7 0 68.8 0C46 0 23 0 11.5 0L0 0Z"
              fill="#181722"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></path>
          </svg>
        </FloatItem>
      </FloatCont>
    </section>
    <section id="timeline" class="flex flex-col">
      <FlareCont>
        <ul class="pt-[150px]">
          <li
            v-for="(item, index) in $tm('timeline')"
            :key="index"
            class="relative w-[7px] mx-auto bg-[#251e39] -z-20 pt-[50px] first:pt-[200px] first:-mt-[200px] first:rounded-tr-2xl last:pb-[200px] last:-mb-[200px] last:rounded-bl-2xl"
          >
            <div
              v-motion-slide-visible-once-right
              class="relative bottom-0 w-[450px] p-2 rounded-xl bg-[#ffffff1a] drop-shadow-md"
            >
              <FlareItem class="rounded-lg">
                <div class="box-content">
                  <h3 class="title">
                    <span
                      v-if="$rt(item.year).includes('-')"
                      class="year"
                      :title="$rt(item.year)"
                    >
                      <span
                        class="anim-counter"
                        data-count="'.trim(explode('-', $row['year'])[0]).'"
                      ></span>
                      -
                      <span
                        class="anim-counter"
                        data-count="'.trim(explode('-', $row['year'])[1]).'"
                      ></span>
                    </span>
                    <span
                      v-else
                      class="year anim-counter"
                      data-count="'.$row['year'].'"
                      title="'.$row['year'].'"
                    ></span>
                    <span class="title-content">{{ $rt(item.title) }}</span>
                  </h3>
                  <p>{{ $rt(item.content) }}</p>
                  <button v-if="$rt(item.content_full)">
                    {{ $rt(item.button) ? $rt(item.button) : '📖 👀' }}
                  </button>
                </div>
              </FlareItem>
            </div>
          </li>
        </ul>
      </FlareCont>
    </section>

    <section id="work" class="card-allow">
      <div class="cont-1">
        <div class="col-2 anim-bottom">
          <sub>Work</sub>
          <h1>Projects</h1>
          <h2></h2>
          <p>
            Following projects showcase my skills and experiences in handling
            real projects. Each of the listed projects below includes a link to
            live demo example where you can take a detailed view. Additionally,
            each project is tagged with programming languages, frameworks or
            libraries that were primarily used in their development.
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
                app with secure database connectivity protected against
                injection. User friendly and optimized interface.
              </p>
              <div class="tags">
                <sub class="tag-php">#PHP</sub
                ><sub class="tag-mysql">#MySQL</sub
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
                E-Commerce PHP Online Shop with database connectivity and its
                own Content Management System for editing not only products, but
                also pages and variations.
              </p>
              <div class="tags">
                <sub class="tag-php">#PHP</sub
                ><sub class="tag-mysql">#MySQL</sub
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
      <svg
        class="float"
        data-value="8"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,75 C 96,68.6 288,40.8 480,43 C 672,45.2 768,93 960,86 C 1152,79 1344,23.6 1440,8L1440 560L0 560z"
          fill="rgba(24, 23, 34, 1)"
        ></path>
      </svg>
      <svg
        class="float"
        data-value="5"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,106 C 96,120.8 288,174.4 480,180 C 672,185.6 768,132.8 960,134 C 1152,135.2 1344,175.6 1440,186L1440 560L0 560z"
          fill="rgba(31, 26, 45, 1)"
        ></path>
      </svg>
      <svg
        class="float"
        data-value="2"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,269 C 96,258.4 288,217.4 480,216 C 672,214.6 768,267.6 960,262 C 1152,256.4 1344,202.8 1440,188L1440 560L0 560z"
          fill="rgba(37, 30, 57, 1)"
        ></path>
      </svg>
      <svg
        class="float"
        data-value="-0.5"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,294 C 96,303.6 288,337 480,342 C 672,347 768,321.4 960,319 C 1152,316.6 1344,327.8 1440,330L1440 560L0 560z"
          fill="rgba(31, 26, 45, 1)"
        ></path>
      </svg>
      <svg
        class="float"
        data-value="-3"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,434 C 96,425.2 288,387 480,390 C 672,393 768,446.8 960,449 C 1152,451.2 1344,410.6 1440,401L1440 560L0 560z"
          fill="rgba(24, 23, 34, 1)"
        ></path>
      </svg>
      <svg
        style="z-index: -3; top: 51%"
        class="float"
        data-value="-8"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          d="M0 45L11.5 43.8C23 42.7 46 40.3 68.8 40.8C91.7 41.3 114.3 44.7 137.2 46.3C160 48 183 48 205.8 51.7C228.7 55.3 251.3 62.7 274.2 68.7C297 74.7 320 79.3 342.8 78.7C365.7 78 388.3 72 411.2 66.8C434 61.7 457 57.3 480 59.8C503 62.3 526 71.7 548.8 72.3C571.7 73 594.3 65 617.2 63.2C640 61.3 663 65.7 685.8 63.8C708.7 62 731.3 54 754.2 53C777 52 800 58 822.8 57.5C845.7 57 868.3 50 891.2 49.8C914 49.7 937 56.3 960 54.7C983 53 1006 43 1028.8 36.5C1051.7 30 1074.3 27 1097.2 34.8C1120 42.7 1143 61.3 1165.8 68.7C1188.7 76 1211.3 72 1234.2 69.3C1257 66.7 1280 65.3 1302.8 65.7C1325.7 66 1348.3 68 1371.2 63C1394 58 1417 46 1428.5 40L1440 34L1440 0L1428.5 0C1417 0 1394 0 1371.2 0C1348.3 0 1325.7 0 1302.8 0C1280 0 1257 0 1234.2 0C1211.3 0 1188.7 0 1165.8 0C1143 0 1120 0 1097.2 0C1074.3 0 1051.7 0 1028.8 0C1006 0 983 0 960 0C937 0 914 0 891.2 0C868.3 0 845.7 0 822.8 0C800 0 777 0 754.2 0C731.3 0 708.7 0 685.8 0C663 0 640 0 617.2 0C594.3 0 571.7 0 548.8 0C526 0 503 0 480 0C457 0 434 0 411.2 0C388.3 0 365.7 0 342.8 0C320 0 297 0 274.2 0C251.3 0 228.7 0 205.8 0C183 0 160 0 137.2 0C114.3 0 91.7 0 68.8 0C46 0 23 0 11.5 0L0 0Z"
          fill="#181722"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
    </section>

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
          <img src="/img/3D-envelope.webp" alt="Envelope Mail" loading="lazy" />
          <img src="/img/3D-devices.webp" alt="Devices" loading="lazy" />
        </div>
      </div>
      <svg
        class="float"
        data-value="8"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,136 C 48,180 144,349.6 240,356 C 336,362.4 384,145.8 480,168 C 576,190.2 624,474.4 720,467 C 816,459.6 864,117.2 960,131 C 1056,144.8 1104,549.8 1200,536 C 1296,522.2 1392,156.8 1440,62L1440 560L0 560z"
          fill="rgba(24, 23, 34, 1)"
        ></path>
      </svg>
      <svg
        class="float"
        data-value="4"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,349 C 72,330.2 216,257.4 360,255 C 504,252.6 576,334.8 720,337 C 864,339.2 936,243.2 1080,266 C 1224,288.8 1368,414 1440,451L1440 560L0 560z"
          fill="rgba(31, 26, 45, 1)"
        ></path>
      </svg>
      <svg
        class="float"
        data-value="-2"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,62 C 72,135.8 216,389.8 360,431 C 504,472.2 576,286.8 720,268 C 864,249.2 936,362 1080,337 C 1224,312 1368,181.8 1440,143L1440 560L0 560z"
          fill="rgba(37, 30, 57, 1)"
        ></path>
      </svg>
      <svg
        class="float"
        data-value="-7"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
        style="z-index: -2"
      >
        <path
          d="M 0,249 C 96,301.8 288,515.4 480,513 C 672,510.6 768,250.2 960,237 C 1152,223.8 1344,405 1440,447L1440 560L0 560z"
          fill="rgba(43, 34, 68, 1)"
        ></path>
      </svg>
    </section>
  </main>
</template>

<script lang="ts" setup>
// https://stackoverflow.com/questions/74853344/nuxt-3-and-nuxtjs-i18n-isnt-posible-to-iterate-over-translations-using-v-for-a
</script>

<style lang="scss" scoped></style>
