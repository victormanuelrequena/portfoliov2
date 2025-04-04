<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Hero from '../components/Hero/index.vue';
import Footer from '../components/Footer/index.vue';
import SendMeMessage from '../components/SendMeMessage/SendMeMessage.vue';
import BuildWrite from '../components/BuildWrite/index.vue';
import DesignEngineering from '../components/DesignEngineering/index.vue';

const currentSection = ref('hero');
const isMobile = ref(false);
const usePurpleLogo = ref(false);

const sections = [
  { id: 'hero', useGreenLogo: true },
  { id: 'design', useGreenLogo: false },
  { id: 'build', useGreenLogo: false },
  { id: 'contact', useGreenLogo: false },
  { id: 'footer', useGreenLogo: true },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateLogoColor(id);
  }
};

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024;
};

const updateLogoColor = (id) => {
  currentSection.value = id;
  const section = sections.find((s) => s.id === id);
  usePurpleLogo.value = section ? !section.useGreenLogo : false;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);

  // Set up intersection observers for each section
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Trigger when 50% of element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateLogoColor(entry.target.id);
      }
    });
  }, observerOptions);

  // Observe all sections
  sections.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) {
      observer.observe(element);
    }
  });

  // Set initial state
  updateLogoColor('hero');

  return () => {
    // Clean up observer
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.unobserve(element);
      }
    });
    window.removeEventListener('resize', checkMobile);
  };
});
</script>

<template>
  <main :class="{ 'snap-container': !isMobile }">
    <div id="hero" class="section">
      <Hero :purpleLogo="usePurpleLogo" :currentSection="currentSection" />
    </div>
    <div id="design" class="section">
      <DesignEngineering />
    </div>
    <div id="build" class="section">
      <BuildWrite />
    </div>
    <div id="contact" class="section">
      <SendMeMessage />
    </div>
    <div id="footer" class="section">
      <Footer mode="large" />
    </div>

    <div class="section-indicator" v-if="!isMobile">
      <div
        v-for="(section, index) in sections"
        :key="index"
        :class="['indicator', currentSection === section.id ? 'active' : '']"
        @click="scrollToSection(section.id)"
      ></div>
    </div>
  </main>
</template>

<style scoped>
main {
  overflow-x: hidden;
  position: relative;
  background-color: var(--smoke);
}

.snap-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-x: hidden;
  scroll-padding: 0;
}

.section {
  scroll-snap-align: start;
  position: relative;
  width: 100%;
}

#hero {
  min-height: 80vh;
}

#design,
#build,
#contact,
#footer {
  min-height: 100vh;
}

.section-indicator {
  position: fixed;
  top: 50%;
  right: 24px;
  left: auto;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 900;
}

.indicator {
  width: 12px;
  height: 12px;
  background-color: var(--purple);
  transform: rotate(45deg);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  width: 14px;
  height: 14px;
  background-color: var(--purple);
  transform: rotate(0deg);
}

.indicator:hover {
  transform: scale(1.2) rotate(45deg);
}

.indicator.active:hover {
  transform: scale(1.2) rotate(0deg);
}

@media (max-width: 1023px) {
  main {
    overflow-y: auto;
    height: auto;
    scroll-snap-type: none;
  }

  .section {
    min-height: auto;
    height: auto;
    scroll-snap-align: none;
    overflow: visible;
  }

  #hero,
  #design,
  #build,
  #contact,
  #footer {
    min-height: auto;
    height: auto;
  }

  #design,
  #build,
  #contact {
    padding: 60px 0;
  }

  #footer {
    max-height: 500px;
  }
}
</style>
