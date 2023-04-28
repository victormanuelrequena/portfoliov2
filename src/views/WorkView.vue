<template>
  <section>
    <Header />
    <main>
      <div class="box">
        <h2><span>/</span>work.</h2>
        <p>Selected work I've taken on in the past.</p>
      </div>
      <!-- List of works -->
      <div class="list-works">
        <!-- Work card -->
        <figure>
          <a href="https://fastwpay.com" target="_blank">
            <img src="../assets/companiesLogos/fastwpay.svg" alt="" />
          </a>
          <div class="project-info">
            <h3>Fastwpay</h3>
            <a href="https://fastwpay.com" target="_blank">fastwpay.com</a>
          </div>
        </figure>
      </div>
    </main>
  </section>
</template>

<script>
import Header from '../components/Header/index.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
section {
  background-color: var(--whiteSmoke);
  height: 100vh;
}
.box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 220px;
}
.box h2,
.box span {
  color: var(--textBlack);
  font-weight: 700;
  font-size: 32px;
}
.box h2 span {
  opacity: 0.7;
}
.box p {
  font-weight: 400;
  margin: 18px 0 22px 0;
  color: var(--textBlack);
  font-size: 18px;
}
.list-works {
  width: 86%;
  margin: 40px auto;
}
figure {
  width: 368px;
  height: 305px;
  background-color: var(--smoke);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  transition: all 0.5s;
}
figure:hover {
  transform: translateY(-4%);
  box-shadow: 15px 8px 6px -6px rgba(235, 234, 242, 0.58);
}
figure > a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
}
figure .box-logo img {
  width: 150px;
}
.project-info {
  background-color: var(--white);
  padding: 36px;
}
.project-info h3 {
  font-size: 22px;
  font-weight: bold;
  color: var(--textBlack);
}
.project-info a {
  color: var(--purple);
  font-size: 18px;
  text-decoration: none;
}
</style>
