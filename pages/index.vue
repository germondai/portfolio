<template>
  <section id="welcome">
    <div class="w-4/5 h-full mx-auto flex items-center justify-center">
      <div class="w-3/5 flex flex-col anim-left">
        <sub>{{ $t('welcome.sub') }}</sub>
        <h1>
          {{ $t('welcome.title') }}
          <span class="text-gradient">Germond</span>
        </h1>
        <p>{{ $t('welcome.content') }}</p>
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
          class="max-h-[90%] max-w-[40%] animate-[float_2s_infinite_ease-in-out] shadow-md z-10"
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
        <h2></h2>
        <p>{{ $t('about.content') }}</p>
      </div>
      <!-- <div class="col-2 skill-icons">
        <?php $s_count = 0; foreach($localeData['about']['skills'] as $row) {
        echo '
        <div class="col-4 anim-left" style="transition-delay: '.$s_count.' s">
          <img
            class="effect-holo"
            src="'.$row['src'].'"
            alt="'.$row['alt'].'"
            loading="lazy"
          />
          <h3>'.$row['name'].'</h3>
        </div>
        '; $s_count += 0.05; } ?>
      </div> -->
    </div>
    <svg
      class="float"
      data-value="7"
      viewBox="0 0 1440 560"
      preserveAspectRatio="none"
    >
      <path
        d="M 0,26 C 96,34.8 288,68.2 480,70 C 672,71.8 768,33.6 960,35 C 1152,36.4 1344,68.6 1440,77L1440 560L0 560z"
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
        d="M 0,100 C 96,115.8 288,171.2 480,179 C 672,186.8 768,142 960,139 C 1152,136 1344,159 1440,164L1440 560L0 560z"
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
        d="M 0,253 C 96,243.2 288,203.4 480,204 C 672,204.6 768,257.4 960,256 C 1152,254.6 1344,208.8 1440,197L1440 560L0 560z"
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
        d="M 0,359 C 96,350.2 288,317 480,315 C 672,313 768,347.2 960,349 C 1152,350.8 1344,329 1440,324L1440 560L0 560z"
        fill="rgba(31, 26, 45, 1)"
      ></path>
    </svg>
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
    <svg
      style="z-index: -3; top: 52.5%"
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
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#welcome svg,
#about svg,
#work svg,
#contact svg {
  @apply absolute -left-[5%] w-[110%] h-full min-w-[1400px] aspect-[1400/810] -z-40 pointer-events-none;
}

#welcome svg {
  @apply -top-[5%] rotate-180;
}

#about svg,
#work svg {
  @apply top-0;
}

#contact svg {
  @apply bottom-0;
}

@media (max-width: 768px) {
  #work svg {
    @apply -left-[65%];
  }
}

section {
  @apply relative py-24 min-h-screen;
}

#about,
#work {
  z-index: 1;
}

.text-gradient {
  background: linear-gradient(90deg, #915eff 0%, #ff006a 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>
