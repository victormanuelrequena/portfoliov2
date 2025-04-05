<script setup>
import { useRouter } from 'vue-router';
import AutoFilledButton from '../AutoFilledButton/index.vue';
const router = useRouter();
</script>

<template>
  <section>
    <div class="container">
      <div class="box-left">
        <h2>Over the years</h2>
        <p>
          I've built products for companies and businesses around the globe ranging from marketing websites to complex
          solutions and enterprise apps with focus on fast, elegant and accessible user experiences.<br /><br />
          Currently, I work at Shopify as a Senior Frontend Engineer crafting thoughtful and inclusive experiences that
          adhere to web standards for over 3 million merchants across the world.<br /><br />
          Before now, I was Principal Frontend Engineer at hellotax, where I worked on a suite of tools and services
          tailored towards automated VAT compliance for multi-channel sellers in Europe.<br /><br />
          Prior to hellotax, I was Senior frontend engineering consultant with Pixel2HTML, building JavaScript
          applications and interfaces for orgs and individuals.<br /><br />
          I once also led the frontend team at Conectar, an e-learning startup through building multiple React
          applications into a single robust learning platform.
        </p>
      </div>
      <div class="box-right">
        <img src="/assets/over_years_images.svg" alt="Over the years" />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--purple);
  padding: 80px 50px 80px 50px;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.box-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.box-left h2 {
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--appleGreen);
}

.box-left p {
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--white);
  line-height: 1.5;
  letter-spacing: 0.02em;
  text-align: left;
  margin-bottom: 20px;
  max-width: 500px;
  margin-top: 8px;
}

.box-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-right img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (min-width: 768px) {
  section {
    height: 100vh;
    padding: 8em 10em 80px 10em;
  }
  .container {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8em;
  }
  .box-left h2 {
    font-size: 4rem;
  }
  .box-left p {
    font-size: 1rem;
    max-width: 440px;
    margin-top: 40px;
  }
  .box-right {
    max-width: 700px;
  }
}
</style>
