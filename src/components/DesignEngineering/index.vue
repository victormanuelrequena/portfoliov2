<script setup>
import { useRouter } from 'vue-router';
import AutoFilledButton from '../AutoFilledButton/index.vue';
const router = useRouter();
</script>

<template>
  <section>
    <div class="container">
      <div class="box">
        <div class="aligner-box-design">
          <h2>Design</h2>
          <p>
            I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I
            design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^).
            I'm committed to creating fluent user experiences while staying fashionable.
          </p>
        </div>
      </div>
      <div class="box">
        <div class="aligner-box-engineering">
          <h2>Engineering</h2>
          <p>
            In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function
            independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty
            are priorities on my radar.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--bgColor);
  padding: 80px 50px 0px 50px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.container h2 {
  font-size: 36px;
  font-weight: 900;
  color: var(--purple);
}

.container p {
  margin: 12px 0px;
  font-size: 12px;
  font-weight: 400;
  color: var(--darkPurple);
  line-height: 1.6;
  letter-spacing: 0.02em;
  text-align: left;
}

@media (min-width: 601px) {
  section {
    padding-left: 10em;
    padding-right: 10em;
    height: 100vh;
    display: flex;
    align-items: center;
  }
  .container {
    width: 100%;
  }
  .container .box {
    flex: 1;
    width: 100%;
    display: flex;
  }

  .container .box:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .aligner-box-design {
    display: flex;
    flex-direction: column;
    max-width: 35em;
  }

  .aligner-box-engineering {
    display: flex;
    flex-direction: column;
    max-width: 38em;
  }
  .container h2 {
    font-size: 4em;
    letter-spacing: -0.03em;
  }

  .container p {
    font-size: 1.07em;
    margin: 18px 0px 0px 0px;
    font-weight: 300;
  }
}

@media (min-width: 1024px) {
}
</style>
