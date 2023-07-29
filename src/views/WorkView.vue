<template>
  <section>
    <Header :static="true" :purpleLogo="true" />
    <main>
      <div class="box">
        <h2><span>/</span>work<span>.</span></h2>
        <p>Selected work I've taken on in the past.</p>
      </div>
      <!-- List of works -->
      <div class="list-works">
        <!-- Work card -->
        <WorkCard :siteUrl="FASTWPAY.siteUrl" :name="FASTWPAY.name" :image="FASTWPAY.image" :domain="FASTWPAY.domain" />
        <WorkCard
          :siteUrl="GRIVER.siteUrl"
          :name="GRIVER.name"
          :image="GRIVER.image"
          :domain="GRIVER.domain"
          :isPublic="false"
        />
        <WorkCard
          :siteUrl="PORTFOLIO.siteUrl"
          :name="PORTFOLIO.name"
          :image="PORTFOLIO.image"
          :domain="PORTFOLIO.domain"
        />
        <WorkCard
          :siteUrl="NEXTSTATION.siteUrl"
          :name="NEXTSTATION.name"
          :image="NEXTSTATION.image"
          :domain="NEXTSTATION.domain"
        />
        <WorkCard
          :siteUrl="GENIUS.siteUrl"
          :name="GENIUS.name"
          :image="GENIUS.image"
          :domain="GENIUS.domain"
          :isPublic="false"
        />
        <WorkCard :siteUrl="YUFI.siteUrl" :name="YUFI.name" :image="YUFI.image" :domain="YUFI.domain" />
      </div>
    </main>
  </section>
  <Footer />
</template>

<script>
import Header from '../components/Header/index.vue';
import Footer from '../components/Footer/index.vue';
import WorkCard from '../components/work/WorkCard.vue';
import Constants from '../components/work/constants';

export default {
  components: {
    Header,
    WorkCard,
    Footer,
  },
  data() {
    return {
      FASTWPAY: Constants.FASTWPAY,
      GRIVER: Constants.GRIVER,
      PORTFOLIO: Constants.PORTFOLIO,
      NEXTSTATION: Constants.NEXTSTATION,
      GENIUS: Constants.GENIUS,
      YUFI: Constants.YUFI,
    };
  },
};
</script>

<style scoped>
section {
  background-color: var(--whiteSmoke);
  padding-bottom: 80px;
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
  max-width: 1200px;
  margin: 40px auto;
  display: grid;
  row-gap: 40px;
  grid-template-columns: repeat(3, minmax(368px, 1fr));
}
@media (min-width: 1024px) {
  section {
    padding-bottom: 160px;
  }
}
</style>
