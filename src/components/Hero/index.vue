<template>
  <section>
    <Header />
    <div class="box-left">
      <div class="box-presentation">
        <h1>
          Frontend <br />
          Developer<span class="point">.</span>
        </h1>
        <p>I like to craft solid and scalable frontend products with great user experiences.</p>
        <div class="sub-description-box">
          <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
          <p>Proven experience building successful products for clients across several countries.</p>
        </div>
      </div>
      <div class="box-image">
        <img class="profile" src="../../assets/profile-light.jpg" alt="" />
        <div class="box-line"></div>
        <img class="profile-shapes" src="../../assets/profileShapes.svg" alt="" />
      </div>
    </div>
    <div class="box-right">
      <div class="box-image-mobile">
        <img class="profile-mobile" src="../../assets/profile-light.jpg" alt="" />
        <div class="box-line-mobile"></div>
      </div>
    </div>
    <img class="hero-line" src="../../assets/heroLine.svg" alt="" />
  </section>
</template>

<script>
import Header from '../Header/index.vue';
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
section {
  position: relative;
  width: 100vw;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
}
.hero-line {
  position: absolute;
  left: -85px;
  transform: rotate(-14deg);
  display: none;
}
.box-left,
.box-right {
  width: 100%;
  height: 100%;
  background-color: var(--purple);
  padding-top: 80px;
}
.box-left {
  padding: 0 62px;
  display: flex;
  position: relative;
}
.box-right {
  background-color: var(--appleGreen);
}
.box-presentation {
  padding-top: 146px;
}
.point {
  font-size: 102px;
  line-height: 0;
}
.box-presentation h1 {
  font-weight: 900;
  font-size: 42px;
  color: var(--appleGreen);
  letter-spacing: -2px;
  font-stretch: 100%;
}
.box-presentation h1 span {
  color: white;
}
.box-presentation p {
  color: var(--white);
  max-width: 38ch;
  line-height: 150%;
  margin-top: 17px;
  font-size: 17px;
  font-weight: 500;
}
.sub-description-box {
  display: flex;
  justify-content: space-between;
  margin-top: 59px;
  margin-bottom: 34px;
}
.sub-description-box p {
  font-size: 10px;
  font-weight: 400;
  max-width: 20ch;
  color: var(--appleGreen);
}
.box-image {
  position: absolute;
  top: clamp(8.75rem, calc(5.18rem + 5.58vw), 11.88rem);
  right: clamp(-15rem, calc(-4.29rem + -8.93vw), -10rem);
  z-index: 10;
  display: none;
}
.box-image-mobile {
  display: flex;
  justify-content: center;
  z-index: 10;
}
.profile {
  width: clamp(16.25rem, calc(9.36rem + 11.16vw), 22.5rem);
  height: clamp(16.25rem, calc(9.36rem + 11.16vw), 22.5rem);
  object-fit: cover;
  z-index: 10;
}
.profile-mobile {
  width: 200px;
  height: 200px;
  object-fit: cover;
  z-index: 10;
}
.profile-shapes {
  width: 160%;
  height: 140%;
  position: absolute;
  top: -80px;
  left: -120px;
}
.box-line {
  position: absolute;
  top: 28px;
  right: 0;
  bottom: 0;
  left: 28px;
  width: 100%;
  height: 100%;
  border: 1px solid white;
}
.box-line-mobile {
  position: absolute;
  top: 22px;
  right: 0;
  bottom: 0;
  left: 130px;
  width: 200px;
  height: 200px;
  border: 1px solid white;
}

@media (min-width: 1024px) {
  section {
    grid-template-columns: 67% 33%;
    /* height: clamp(29.63rem, calc(9.91rem + 30.8vw), 46.88rem); */
    height: 95vh;
  }
  .box-image {
    display: block;
  }
  .box-image-mobile {
    display: none;
  }
  .box-right,
  .box-left {
    padding-top: clamp(8.75rem, calc(5.18rem + 5.58vw), 11.88rem);
    height: 100vh;
  }
  .box-presentation {
    padding-top: 40px;
  }
  .box-presentation h1 {
    font-size: 4em;
  }
  .box-presentation p {
    font-size: 20px;
  }
  .sub-description-box p {
    font-size: 13px;
    max-width: 26ch;
  }
  .box-left {
    padding-left: clamp(5.63rem, calc(-1.52rem + 11.16vw), 11.88rem);
  }
  .hero-line {
    display: flex;
    position: absolute;
  }
}
</style>
