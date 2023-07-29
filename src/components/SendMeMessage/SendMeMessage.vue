<script setup>
import Form from './Form.vue';
</script>

<template>
  <section>
    <h2>Send me a message!</h2>
    <p>
      Got a question or proposal, or just want
      <br />
      to say hello? Go ahead.
    </p>
    <Form />
  </section>
</template>

<style scoped>
section {
  background-color: var(--smoke);
  padding: 0 40px;
  padding-top: 100px;
  padding-bottom: 80px;
}
h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--purple);
}
p {
  text-align: start;
  margin-top: 10px;
  color: var(--darkPurple);
}
@media (min-width: 601px) {
  section {
    padding-left: 120px;
    padding-right: 120px;
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
  }
}
@media (min-width: 1024px) {
  section {
    padding: 200px;
  }
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
    margin-top: 16px;
    line-height: 165%;
  }
}
</style>
