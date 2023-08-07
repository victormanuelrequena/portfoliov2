<script setup>
import inputOutlined from '../InputOutlined/index.vue';
import AutoFilledButton from '../AutoFilledButton/index.vue';
</script>

<template>
  <form>
    <div class="top-inputs">
      <inputOutlined type="text" label="Your Name" placeholder="Enter your name" />
      <inputOutlined type="email" label="Email Address" placeholder="Enter your email address" />
    </div>
    <div>
      <label>
        Your Message
        <textarea
          placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
        ></textarea>
      </label>
    </div>
    <AutoFilledButton text="SHOOT" />
  </form>
</template>

<style scoped>
div {
  margin-top: 30px;
}
label {
  color: var(--darkPurple);
  font-size: 0.8rem;
}
textarea {
  width: 100%;
  height: 90px;
  background-color: transparent;
  border-bottom: 1px solid var(--purple);
  margin-top: 10px;
}
textarea::placeholder {
  color: var(--textGray);
}

@media (min-width: 601px) {
  .top-inputs {
    display: flex;
    justify-content: space-between;
  }
  label {
    font-size: 1rem;
  }
  button {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1024px) {
  form {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
  }
  button {
    width: 360px;
    font-size: 1rem;
    font-weight: bold;
    height: 60px;
    margin-top: 60px;
  }
  form > div:nth-child(2) {
    margin-top: 40px;
  }
  textarea::placeholder {
    font-size: 1rem;
  }
}
</style>
