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
          I've developed solutions for a range of clients, from web applications to tools for specific industries, with
          a focus on delivering efficient and user-friendly experiences.<br /><br />
          Currently, I am a Full-Stack/Product Engineer, passionate about creating high-quality experiences and driven
          to learn and explore new ideas.   <br /><br />
          Previously, I worked as a Software Engineer at Sliscorp, where I developed web and mobile applications for
          major clients in the financial sector, implemented key functionalities for digital banking, and contributed to
          all stages of the software development lifecycle.   <br /><br />
          I also worked as a Software Engineer at WCAR, developing a website for vehicle sales and two applications, one
          in Flutter and one in React Native. Additionally, I have experience as a Frontend Developer at FASTWPAY,
          contributing to both frontend and backend tasks.   <br /><br />
          Earlier in my career, I was a Frontend Developer at WAU, where I participated in the development of a platform
          for Mexican customs agents, importers, and exporters. I also worked as a Frontend Developer at Genius Digital
          Solutions, where I contributed to the development of a web application connected to a WordPress engine.
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
    max-width: 480px;
    margin-top: 8px;
  }
  .box-right {
    max-width: 700px;
  }
}
</style>
