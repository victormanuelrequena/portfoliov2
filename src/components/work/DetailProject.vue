<script setup>
import { ref } from 'vue';
import projectsData from '../../components/work/constants';
const imageSelected = ref(0);

const selectImage = (index) => {
  imageSelected.value = index;
};
</script>
<template>
  <main>
    <h1>Fastwpay</h1>
    <img :src="projectsData.FASTWPAY.projectImages[imageSelected]" />
    <div class="check-list">
      <input
        v-for="(image, index) in projectsData.FASTWPAY.projectImages"
        :key="image"
        :checked="imageSelected === index"
        type="radio"
        @click="selectImage(index)"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  /* border: 1px solid red; */
  padding-top: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--textBlack);
  padding-bottom: 40px;
}
img {
  width: 80%;
  max-width: 1200px;
  height: 600px;
  border-radius: 10px;
  margin: auto;
}
.check-list {
  display: flex;
  column-gap: 6px;
  padding: 10px 0;
}
</style>
