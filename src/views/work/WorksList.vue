<script setup>
import { useRouter } from 'vue-router';
import Header from '../../components/Header/index.vue';
import { onMounted, ref } from 'vue';
import { worksDataList } from '../../components/work/constants';
import DetailProject from '../../components/work/DetailProject.vue';

const router = useRouter();
const isASingleProject = ref(true);

function getDataProject() {
  const projectId = parseInt(router.currentRoute.value.path.slice(-1));
  const currentProject = worksDataList.find((work) => work.id === projectId);
  console.log('🚀 ~ file: WorksList.vue:14 ~ getDataProject ~ currentProject:', currentProject);

  isASingleProject.value = currentProject.isASingleProject;
}

onMounted(() => {
  console.log('ROUTER___', router);
  getDataProject();
});
</script>

<template>
  <section>
    <Header :static="true" :purpleLogo="true" />
    <main v-if="!isASingleProject">
      <div class="box">
        <h2><strong @click="router.push('/work')">work/</strong><span>fastwpay</span></h2>
        <p>List of projects I work on at fastwpay</p>
      </div>
      <div class="projects-list-box">
        <div class="projects-list">
          <div class="project-card">
            <div>
              <h4>Fastwpay</h4>
              <p>
                Fastwpay es una pagina web dedicada al manejo administrativo de un plugin de wordpress para pagos
                electronicos.
              </p>
            </div>
            <div>
              <p><strong>01/2023</strong> - <strong>03/2023</strong></p>
            </div>
          </div>
          <div class="project-card">
            <div>
              <h4>Fastwpay</h4>
              <p>
                Fastwpay es una pagina web dedicada al manejo administrativo de un plugin de wordpress para pagos
                electronicos.
              </p>
            </div>
            <div>
              <p><strong>01/2023</strong> - <strong>03/2023</strong></p>
            </div>
          </div>
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
.projects-list {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 60%;
  margin: auto;
  margin-top: 30px;
}
.project-card {
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 60px;
  border-radius: 10px;
  background-color: #503bd8ee;
}
.project-card div:nth-child(1) {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
}
.project-card div:nth-child(1) h4 {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--appleGreen);
  letter-spacing: 0.5px;
}
.project-card div:nth-child(1) p {
  color: var(--white);
  max-width: 72ch;
  line-height: 150%;
  margin-top: 10px;
}
.project-card div:nth-child(2) {
  display: flex;
}
.project-card div:nth-child(2) p {
  color: var(--white);
}
</style>
