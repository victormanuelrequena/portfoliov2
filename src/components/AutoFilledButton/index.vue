<script setup>
const props = defineProps({
  text: String,
  callback: Function,
});
</script>

<template>
  <button @click="callback">
    {{ props.text }}
    <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow">
      <path stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path>
    </svg>
  </button>
</template>

<style scoped>
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
  button {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1024px) {
  button {
    width: 360px;
    font-size: 1rem;
    font-weight: bold;
    height: 60px;
    margin-top: 60px;
  }
}
</style>
