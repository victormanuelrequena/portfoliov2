<script setup>
import inputOutlined from '../InputOutlined/index.vue';
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
    <button>
      SHOOT
      <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow">
        <path stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path>
      </svg>
    </button>
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
button {
  margin-top: 30px;
  width: 200px;
  height: 40px;
  border: 1px solid var(--purple);
  color: var(--purple);
  display: flex;
  justify-content: center;
  align-items: center;
  border-left-width: 2px;
}
button svg {
  width: 26px;
  margin-left: 10px;
  fill: var(--purple);
  stroke: var(--purple);
}
button:hover {
  background-color: var(--purple);
  color: var(--white);
}
button:hover svg {
  fill: #fff;
  stroke: #fff;
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
