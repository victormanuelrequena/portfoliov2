<script setup>
const props = defineProps({
  type: String,
  placeholder: String,
  label: String,
});
</script>

<template>
  <div>
    <label>
      {{ props.label }}
    </label>
    <input :type="props.type" :placeholder="props.placeholder" />
  </div>
</template>

<style scoped>
div {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
label {
  color: var(--darkPurple);
  font-size: 0.8rem;
}
input {
  width: 100%;
  height: 60px;
  background-color: transparent;
  border-bottom: 1px solid var(--purple);
}
input::placeholder {
  color: var(--textGray);
}
@media (min-width: 601px) {
  label {
    font-size: 1rem;
  }
  input {
    width: 220px;
  }
}
@media (min-width: 1024px) {
  input {
    width: 300px;
  }
  input::placeholder {
    font-size: 1rem;
  }
}
</style>
