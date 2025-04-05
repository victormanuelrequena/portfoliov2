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
        <WorkCard :siteUrl="SL.siteUrl" :name="SL.name" :image="SL.image" :domain="SL.domain" :id="SL.id" />
        <WorkCard
          :siteUrl="WCAR.siteUrl"
          :name="WCAR.name"
          :image="WCAR.image"
          :domain="WCAR.domain"
          :isPublic="false"
          :id="WCAR.id"
        />
        <WorkCard
          :siteUrl="FASTWPAY.siteUrl"
          :name="FASTWPAY.name"
          :image="FASTWPAY.image"
          :domain="FASTWPAY.domain"
          :isPublic="false"
          :id="FASTWPAY.id"
        />
        <WorkCard
          :siteUrl="PORTFOLIO.siteUrl"
          :name="PORTFOLIO.name"
          :image="PORTFOLIO.image"
          :domain="PORTFOLIO.domain"
          :id="PORTFOLIO.id"
        />
        <WorkCard
          :siteUrl="VEIDT_HEALTH.siteUrl"
          :name="VEIDT_HEALTH.name"
          :image="VEIDT_HEALTH.image"
          :domain="VEIDT_HEALTH.domain"
          :id="VEIDT_HEALTH.id"
        />
        <WorkCard
          :siteUrl="GENIUS.siteUrl"
          :name="GENIUS.name"
          :image="GENIUS.image"
          :domain="GENIUS.domain"
          :isPublic="false"
          :id="GENIUS.id"
        />
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
      WCAR: Constants.WCAR,
      PORTFOLIO: Constants.PORTFOLIO,
      VEIDT_HEALTH: Constants.VEIDT_HEALTH,
      GENIUS: Constants.GENIUS,
      SL: Constants.SL,
    };
  },
};
</script>

<style scoped>
section {
  background-color: var(--bgColor);
  padding-bottom: 60px;
}
.box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
}
.box h2,
.box span {
  color: var(--textBlack);
  font-weight: 700;
  font-size: 26px;
}
.box h2 span {
  opacity: 0.7;
}
.box p {
  font-weight: 400;
  margin: 18px 0 22px 0;
  color: var(--textBlack);
  font-size: 16px;
  text-align: center;
  padding: 0 20px;
}
.list-works {
  width: 90%;
  max-width: 1200px;
  margin: 30px auto;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;
  justify-items: center;
}

/* Tablet */
@media (min-width: 768px) {
  section {
    padding-bottom: 70px;
  }
  .box {
    padding-top: 180px;
  }
  .box h2,
  .box span {
    font-size: 28px;
  }
  .box p {
    font-size: 17px;
  }
  .list-works {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  section {
    padding-bottom: 160px;
  }
  .box {
    padding-top: 220px;
  }
  .box h2,
  .box span {
    font-size: 32px;
  }
  .box p {
    font-size: 18px;
    padding: 0;
  }
  .list-works {
    width: 90%;
    margin: 40px auto;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 32px;
  }
}
</style>
