<script>
import Project from '../components/resume/Project.vue';
import Constants from '../components/resume/constants.js';
export default {
  components: {
    Project,
  },
  data() {
    return {
      GDS: Constants.GDS,
      WAU: Constants.WAU,
      YUFI: Constants.YUFI,
      FASTWPAY: Constants.FASTWPAY,
      SL: Constants.SL,
    };
  },
  methods: {
    downloadCV() {
      // Asegúrate de tener el archivo CV.pdf en la carpeta public
      const link = document.createElement('a');
      link.href = '/vic_resume.pdf';
      link.download = 'Victor_Requena_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>
<template>
  <head>
    <title>My Resume</title>
  </head>
  <div class="resume-container">
    <div class="box">
      <a href="https://www.linkedin.com/in/victor-requena-5b1901212/" target="_blank">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            fill="#0077b5"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          ></path>
        </svg>
      </a>
      <div class="download-button" @click="downloadCV">
        <svg viewBox="8 8.003 48 47.997" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#474747e6"
            d="M29.283 12.19a19.624 19.624 0 015.434 0 2 2 0 00.567-3.959 23.75 23.75 0 00-6.566 0 2 2 0 00.565 3.959z"
          ></path>
          <path
            fill="#474747e6"
            d="M42.91 10.619a2 2 0 00-1.82 3.561C47.819 17.621 52 24.449 52 32c0 11.028-8.972 20-20 20s-20-8.972-20-20c0-7.551 4.181-14.379 10.911-17.819a2 2 0 00-1.821-3.561C13.016 14.747 8 22.939 8 32c0 13.233 10.766 24 24 24 13.233 0 24-10.767 24-24 0-9.061-5.016-17.253-13.09-21.381z"
          ></path>
          <path
            fill="#474747e6"
            d="M22.586 36.586a2 2 0 000 2.828l8 8c.39.391.902.586 1.414.586s1.023-.195 1.414-.586l8-8a2 2 0 10-2.828-2.828L34 41.172V18a2 2 0 00-4 0v23.172l-4.586-4.586a2 2 0 00-2.828 0z"
          ></path>
        </svg>
        <p>Descargar</p>
      </div>
    </div>
    <div class="grid-main">
      <div class="side-left">
        <!-- Personal info (Web, location and mailto) -->
        <div class="basic-info">
          <p>🇻🇪 Venezuela</p>
          <a href="mailto:requenadev1@gmail.com?subject=Hi, Victor">requenadev1@gmail.com</a>
        </div>
        <!-- Core technologies -->
        <div class="core-tech">
          <h4>My Stack:</h4>
          <ul>
            <li>Typescript</li>
            <li>VueJS</li>
            <li>NuxtJS</li>
            <li>Material UI</li>
            <li>Styled-components</li>
            <li>Redux</li>
            <li>NestJS</li>
            <li>ExpressJS</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>

          <h4>Here's where I'm currently most productive:</h4>
          <ul>
            <li>NextJS</li>
            <li>Tailwind CSS</li>
            <li>React Native</li>
            <li>Flutter</li>
            <li>NodeJS</li>
            <li>AI (v0)</li>
          </ul>
        </div>
      </div>
      <div class="main-content">
        <h1>
          Victor
          <br />
          Requena
        </h1>
        <h2 class="profile-description">Full-Stack/Product Engineer</h2>
        <p class="about-me">
          Soy un desarrollador Full Stack, Iterativo, enfocado en el cliente y pragmatico. Apasiónado por crear
          experiencias de alta calidad. Y tengo un impulso constante para aprender y explorar nuevas ideas.
        </p>
        <h4 class="experience">Experiencia</h4>
        <p class="exp-description">
          En mis 4 años de experiencia, he desempeñado muchas funciones. Sin importar la escala, no me asusta el trabajo
          que no tiene precedentes ni modelo a seguir. De hecho es lo que mas me atrae.
          <br />
          <br />
          Siempre busco oportunidades para crecer yo mismo y para los demás. En todo lo que hago, me esfuerzo por crear
          un entorno en el que se escuche a las personas y todos aprovechen las fortalezas de los demás.

          <br />
          <br />

          Aqui dejo algunas de mis experiencias, cada una de ellas fue una experiencia invaluable por mas pequeña que
          fuese, que no entraria en una pagina:
        </p>
        <!-- Experience Section -->
        <section class="exp-section">
          <Project :company="SL.name" :date="SL.date" :role="SL.role" :goalsList="SL.goals" />
          <Project :company="YUFI.name" :date="YUFI.date" :role="YUFI.role" :goalsList="YUFI.goals" />
          <Project :company="FASTWPAY.name" :date="FASTWPAY.date" :role="FASTWPAY.role" :goalsList="FASTWPAY.goals" />
          <Project :company="WAU.name" :date="WAU.date" :role="WAU.role" :goalsList="WAU.goals" />
          <Project :company="GDS.name" :date="GDS.date" :role="GDS.role" :goalsList="GDS.goals" />
        </section>
      </div>
    </div>
    <img
      class="vic-logo"
      style="width: 150px; height: 75px; position: absolute; bottom: 50px; left: 50px"
      src="/assets/vicLogo_purple.svg"
      alt="Victor"
    />
  </div>
</template>

<style scoped>
.resume-container {
  /* border: 1px solid red; */
  width: 1180px;
  background-color: #f0efe7;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 60px;
  position: relative;
  padding-bottom: 60px;
}
.box {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 1;
}
.box a,
.box svg {
  cursor: pointer;
}
.box svg:nth-child(1) {
  margin-right: 10px;
}
.box svg {
  width: 12px;
}
.box p {
  font-size: 12px;
  color: #1d3108;
  margin-left: 6px;
}
.grid-main {
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100%;
  padding: 0 56px;
  padding-top: 80px;
}
.side-left,
.main-content {
  height: 100%;
}
.side-left {
  /* border: 1px solid green; */
}
.side-left .basic-info {
  display: block;
  width: 20ch;
}
.basic-info p,
.basic-info a {
  font-weight: 600;
  font-size: 14px;
  color: var(--purple);
  position: relative;
  width: auto;
  display: inline-block;
  z-index: 1;
  cursor: pointer;
}
.basic-info p:nth-child(2) {
  color: #1d3108;
  font-weight: 400;
  margin: 2px 0;
  margin-top: 6px;
  cursor: default;
}
.basic-info p:nth-child(2)::after {
  display: none;
}
.basic-info p::after,
.basic-info a::after {
  display: inline-block;
  content: '';
  background-color: var(--appleGreen);
  width: 109%;
  height: 0.4em;
  position: absolute;
  bottom: 0px;
  left: -4.5%;
  z-index: -1;
  transform: translateY(0) scaleY(1);
  transition: all 0.2s ease-in-out;
}
.basic-info p:hover::after,
.basic-info a:hover::after {
  transform: translateY(0.2em) scaleY(0.5);
}
.core-tech {
  margin-top: -24px;
}
.core-tech h4 {
  color: var(--purple);
  font-weight: bold;
  margin-top: 30px;
}
.core-tech ul {
  display: flex;
  flex-direction: column;
  margin-top: 6px;
}
.core-tech li {
  color: #1d3108;
  list-style: none;
  font-size: 14.4px;
  margin-top: 8px;
}
.core-tech li::before {
  width: 0.4em;
  content: '';
  height: 0.41em;
  margin-right: 0.3em;
  vertical-align: 10%;
  display: inline-block;
  filter: contrast(1.2);
  background: currentColor;
}
.main-content {
  /* border: 1px solid red; */
}
.main-content h1 {
  color: var(--purple);
  font-weight: bold;
  font-size: 72px;
  line-height: 100%;
}
.main-content h2.profile-description {
  font-size: 23px;
  color: #1d3108;
  font-weight: light;
  margin-top: 12px;
}
.main-content .about-me {
  max-width: 70%;
  margin: 3em 0 4em 0;
  font-size: 17.28px;
  font-weight: light;
  line-height: 175%;
  color: #1d3108;
  position: relative;
}
.main-content .about-me::after {
  content: '';
  position: absolute;
  bottom: -30px;
  height: 1px;
  left: 20px;
  width: 155%;
  background-color: #1d3108;
}
.experience {
  /* border: 1px solid red; */
  position: relative;
  z-index: 1;
  width: 100px;
  transform: translateZ(0);
  display: block;
  font-size: 21px;
  color: var(--purple);
  font-weight: bold;
}
.experience::after {
  display: inline-block;
  content: '';
  background-color: var(--appleGreen);
  width: 139%;
  height: 0.4em;
  position: absolute;
  bottom: 0px;
  left: -4%;
  right: 4%;
  z-index: -1;
  transform: translateY(0) scaleY(1);
  transition: all 0.2s ease-in-out;
}
.exp-description {
  margin: 17px 0 27px 0;
  color: var(--textBlack);
  opacity: 0.9;
  font-size: 17.28px;
  line-height: 175%;
  font-weight: light;
}
.exp-section {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
}
.exp-section > div {
  margin-top: 40px;
}
.exp-section > div:nth-child(1) {
  margin-top: 0px;
}
.vic-logo {
  position: absolute;
}
@media (min-width: 1024px) {
  .resume-container {
    padding-bottom: 140px;
    margin-bottom: 80px;
  }
  .vic-logo {
    width: 100px;
    height: 50px;
    left: 50px;
    bottom: 40px;
  }
}
.download-button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0px 5px;
  transition: opacity 0.2s ease;
  margin-top: -4px;
}

.download-button p {
  margin-left: 0px;
  font-size: 12px;
  color: #1d3108;
}

.download-button:hover {
  opacity: 0.7;
}
</style>
