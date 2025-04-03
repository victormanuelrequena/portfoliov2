<script setup>
import { useRouter } from 'vue-router';
import Header from '../../components/Header/index.vue';
import { onMounted, ref, watch } from 'vue';
import { worksDataList } from '../../components/work/constants';
import DetailProject from '../../components/work/DetailProject.vue';

const router = useRouter();
const isASingleProject = ref(true);
const currentProject = ref({});

function getDataProject() {
  let projectId = parseInt(router.currentRoute.value.path.slice(-1));
  if (parseInt(router.currentRoute.value.path.slice(-2))) {
    projectId = parseInt(router.currentRoute.value.path.slice(-2));
  }
  const currentProjectSelected = worksDataList.find((work) => {
    if (work.id === projectId) {
      return work;
    }
    if (work.projects) {
      const project = work.projects.find((work) => work.id === projectId);
      return project;
    }
  });
  console.log('🚀 ~ file: WorksList.vue:27 ~ getDataProject ~ currentProjectSelected:', currentProjectSelected);
  if (currentProjectSelected.projects?.length > 0 && currentProjectSelected.id !== projectId) {
    const projectChildrenSelected = currentProjectSelected.projects.find((project) => project.id === projectId);
    currentProject.value = projectChildrenSelected;
    isASingleProject.value = projectChildrenSelected.isASingleProject;
    return;
  }
  isASingleProject.value = currentProjectSelected.isASingleProject;
  currentProject.value = currentProjectSelected;
}

onMounted(() => {
  getDataProject();
});
watch(
  () => router.currentRoute.value,
  () => {
    getDataProject();
  }
);
</script>

<template>
  <section>
    <Header :static="true" :purpleLogo="true" />
    <main v-if="!isASingleProject">
      <div class="box">
        <h2>
          <strong @click="router.push('/work')">work/</strong><span>{{ currentProject.name }}</span>
        </h2>
        <p>List of projects I work on at {{ currentProject.name }}</p>
      </div>
      <div class="projects-list-box">
        <div class="projects-list">
          <router-link :to="'/work/' + project.id" v-for="project in currentProject.projects" class="project-card">
            <div>
              <h4 class="project-card-name">{{ project.name }}</h4>
              <p class="project-card-description">
                {{ project.description }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </main>
    <DetailProject v-if="isASingleProject" />
  </section>
</template>

<style scoped>
section {
  background-color: var(--bgColor);
  padding-bottom: 80px;
  min-height: 100vh;
}
.box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 220px;
}
.project-card-name {
  text-align: left;
}

.box > h2 {
  text-align: center;
}
.box h2 strong,
.box span {
  color: var(--textBlack);
  font-weight: 700;
  font-size: 32px;
  opacity: 0.7;
  transition: color ease 0.2s;
}
.box h2 span {
  opacity: 1;
}
.box h2 strong:hover {
  cursor: pointer;
  opacity: 0.9;
}
.box p {
  font-weight: 400;
  margin: 18px 0 22px 0;
  color: var(--textBlack);
  font-size: 18px;
}
.projects-list-box {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.projects-list {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 100%;
  margin: 30px auto 0;
}
.project-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  border-radius: 10px;
  background-color: #503bd8ee;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.project-card div:nth-child(1) {
  display: flex;
  flex-direction: column;
}
.project-card div:nth-child(1) h4 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--appleGreen);
  letter-spacing: 0.5px;
}
.project-card div:nth-child(1) p {
  color: var(--white);
  max-width: 72ch;
  line-height: 150%;
  margin-top: 10px;
  font-size: 1rem;
}
.project-card div:nth-child(2) {
  display: flex;
}
.project-card div:nth-child(2) p {
  color: var(--white);
}

/* Media Queries for Responsive Design */
@media (min-width: 768px) {
  .project-card {
    padding: 35px 45px;
  }
  .project-card div:nth-child(1) h4 {
    font-size: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .projects-list {
    width: 90%;
  }
  .project-card {
    padding: 40px 60px;
  }
  .project-card div:nth-child(1) h4 {
    font-size: 1.6rem;
  }
}

@media (max-width: 767px) {
  .box {
    padding-top: 150px;
  }
  .box h2 strong,
  .box span {
    font-size: 24px;
  }
  .box p {
    font-size: 16px;
    text-align: center;
    padding: 0 20px;
  }
}
</style>
