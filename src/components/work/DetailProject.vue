<script setup>
import { onMounted, ref } from 'vue';
import { worksDataList } from '../../components/work/constants';
import { CIcon } from '@coreui/icons-vue';
import { cilCaretLeft, cilCaretRight } from '@coreui/icons';
import { useRouter } from 'vue-router';
const imageSelected = ref(0);
const currentProject = ref({
  projectImages: [],
});
const router = useRouter();

const selectImage = (index) => {
  imageSelected.value = index;
};
const nextImage = (imageQuantity) => {
  if (imageSelected.value + 1 < imageQuantity) {
    imageSelected.value += 1;
  }
};
const backImage = () => {
  if (imageSelected.value > 0) {
    imageSelected.value = imageSelected.value - 1;
  }
};

function getDataProject() {
  let projectId = parseInt(router.currentRoute.value.path.slice(-1));
  if (parseInt(router.currentRoute.value.path.slice(-2))) {
    projectId = parseInt(router.currentRoute.value.path.slice(-2));
  }
  console.log('🚀 ~ file: WorksList.vue:14 ~ getDataProject ~ projectId:', projectId);
  const currentProjectSelected = worksDataList.find((work) => {
    if (work.id === projectId) {
      return work;
    }
    if (work.projects) {
      const project = work.projects.find((work) => work.id === projectId);
      console.log('🚀 ~ file: WorksList.vue:25 ~ currentProjectSelected ~ project:', project);
      return project;
    }
  });
  console.log('🚀 ~ file: WorksList.vue:32 ~ currentProjectSelected ~ currentProjectSelected:', currentProjectSelected);
  if (currentProjectSelected.projects.length > 0 && currentProjectSelected.id !== projectId) {
    const projectChildrenSelected = currentProjectSelected.projects.find((project) => project.id === projectId);
    console.log('🚀 ~ file: WorksList.vue:32 ~ getDataProject ~ projectChildrenSelected:', projectChildrenSelected);
    currentProject.value = projectChildrenSelected;
    return;
  }
  currentProject.value = currentProjectSelected;
}

onMounted(() => {
  getDataProject();
});
</script>
<template>
  <main>
    <h1>Genius Builder</h1>
    <div class="carousel-container">
      <CIcon class="arrow-icon" :icon="cilCaretLeft" size="sm" @click="backImage" />
      <img class="project-image" :src="currentProject.projectImages[imageSelected]" />
      <CIcon
        class="arrow-icon"
        :icon="cilCaretRight"
        size="sm"
        @click="nextImage(currentProject.projectImages.length)"
      />
    </div>
    <div class="check-list">
      <input
        v-for="(image, index) in currentProject.projectImages"
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
.carousel-container {
  /* border: 1px solid red; */
  display: flex;
  column-gap: 20px;
  align-items: center;
  width: 80%;
  max-width: 1200px;
}
.carousel-container::selection,
.project-image::selection {
  background-color: transparent;
}
.project-image {
  min-width: 100%;
  height: 600px;
  border-radius: 10px;
  margin: auto;
}
.arrow-icon {
  min-width: 60px;
  cursor: pointer;
}
.check-list {
  display: flex;
  column-gap: 6px;
  padding: 10px 0;
}
</style>
