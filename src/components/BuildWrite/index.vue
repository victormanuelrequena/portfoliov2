<script setup>
import { useRouter } from 'vue-router';
import AutoFilledButton from '../AutoFilledButton/index.vue';
const router = useRouter();
</script>

<template>
  <section>
    <div class="container">
      <div class="box">
        <h2>
          I build &amp; <br />
          design stuff
        </h2>
        <p>
          Open source <br />
          projects, web apps <br />
          and experimentals.
        </p>
        <AutoFilledButton :callback="() => router.push('/work')" text="SEE MY WORK" />
      </div>
      <div class="box">
        <h2>
          I write, <br />
          sometimes
        </h2>
        <p>
          About design<br />
          frontend dev <br />
          learning and life.
        </p>
        <AutoFilledButton text="READ MY ARTICLES" />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--bgColor);
  padding: 80px 24px;
}
.box {
  background-color: var(--white);
  padding: 60px 0 60px 50px;
}
.box:nth-child(2) {
  border-top: 1px solid #ccc;
}
h2 {
  color: var(--purple);
  font-size: 2.2rem;
  font-weight: 900;
}
p {
  margin-top: 20px;
  font-size: 1.2rem;
  color: var(--darkPurple);
}

@media (min-width: 601px) {
  .container {
    width: 100%;
    display: flex;
  }
  .box {
    width: 100%;
    border-right: 1px solid var(--purple);
  }
  .box:nth-child(2) {
    border: none;
  }
  section {
    height: 100vh;
    display: flex;
    align-items: center;
  }
}

@media (min-width: 1024px) {
  .container {
    min-width: 900px;
    max-width: 80%;
    margin: auto;
  }
  .box {
    padding-top: 120px;
    padding-bottom: 120px;
  }
}
</style>
