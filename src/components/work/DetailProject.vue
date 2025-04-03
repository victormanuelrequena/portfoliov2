<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import { worksDataList } from '../../components/work/constants';
import { CIcon } from '@coreui/icons-vue';
import { cilCaretLeft, cilCaretRight } from '@coreui/icons';
import { useRouter } from 'vue-router';

const imageSelected = ref(0);
const currentProject = ref({
  projectImages: [],
  overview: '',
  technologies: [],
  challenges: '',
  demoLink: '',
  repoLink: '',
  type: '',
});
const isLightboxOpen = ref(false);
const autoplayInterval = ref(null);
const router = useRouter();

// Swipe detection
const touchStartX = ref(0);
const touchEndX = ref(0);
const minSwipeDistance = 50;

const onTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX;
};

const onTouchMove = (e) => {
  touchEndX.value = e.changedTouches[0].screenX;
};

const onTouchEnd = () => {
  const swipeDistance = touchStartX.value - touchEndX.value;
  if (Math.abs(swipeDistance) > minSwipeDistance) {
    if (swipeDistance > 0) {
      nextImage(currentProject.value.projectImages.length);
    } else {
      backImage();
    }
  }
};

const selectImage = (index) => {
  imageSelected.value = index;
};

const nextImage = (imageQuantity) => {
  if (imageSelected.value + 1 < imageQuantity) {
    imageSelected.value += 1;
  } else {
    imageSelected.value = 0;
  }
};

const backImage = () => {
  if (imageSelected.value > 0) {
    imageSelected.value -= 1;
  } else {
    imageSelected.value = currentProject.value.projectImages.length - 1;
  }
};

const handleKeyPress = (event) => {
  if (event.key === 'ArrowRight') {
    nextImage(currentProject.value.projectImages.length);
  } else if (event.key === 'ArrowLeft') {
    backImage();
  }
};

const handleLightboxKeyPress = (event) => {
  if (!isLightboxOpen.value) return;
  if (event.key === 'ArrowRight') {
    nextImage(currentProject.value.projectImages.length);
  } else if (event.key === 'ArrowLeft') {
    backImage();
  } else if (event.key === 'Escape') {
    closeLightbox();
  }
};

function getDataProject() {
  let projectId = parseInt(router.currentRoute.value.path.slice(-1));
  if (parseInt(router.currentRoute.value.path.slice(-2))) {
    projectId = parseInt(router.currentRoute.value.path.slice(-2));
  }
  const currentProjectSelected = worksDataList.find((work) => {
    if (work.id === projectId) return work;
    if (work.projects) return work.projects.find((p) => p.id === projectId);
  });

  if (currentProjectSelected.projects?.length > 0 && currentProjectSelected.id !== projectId) {
    const projectChildrenSelected = currentProjectSelected.projects.find((project) => project.id === projectId);
    currentProject.value = projectChildrenSelected;
    return;
  }
  currentProject.value = currentProjectSelected;
}

const openLightbox = () => {
  isLightboxOpen.value = true;
  startAutoplay();
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  stopAutoplay();
};

const startAutoplay = () => {
  stopAutoplay();
  autoplayInterval.value = setInterval(() => {
    nextImage(currentProject.value.projectImages.length);
  }, 4000);
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

onMounted(() => {
  getDataProject();
  window.addEventListener('keydown', handleKeyPress);
  window.addEventListener('keydown', handleLightboxKeyPress);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress);
  window.removeEventListener('keydown', handleLightboxKeyPress);
  stopAutoplay();
});
</script>

<template>
  <main>
    <h1>{{ currentProject.name }}</h1>
    <div class="carousel-container">
      <CIcon class="arrow-icon" :icon="cilCaretLeft" size="sm" @click="backImage" />
      <div class="image-container" :class="{ 'mobile-frame': currentProject.type === 'mobile' }">
        <div v-if="currentProject.type === 'mobile'" class="mobile-screen-container">
          <img
            class="project-image"
            :class="{ 'mobile-image': currentProject.type === 'mobile', fade: true }"
            :src="currentProject.projectImages[imageSelected]"
            alt="Project Image"
            loading="lazy"
            @click="openLightbox"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
            :key="imageSelected"
          />
        </div>
        <img
          v-else
          class="project-image fade"
          :src="currentProject.projectImages[imageSelected]"
          alt="Project Image"
          loading="lazy"
          @click="openLightbox"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
          :key="imageSelected"
        />
        <div v-if="currentProject.type === 'mobile'" class="mobile-home-indicator"></div>
      </div>
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

    <!-- Project Details Section -->
    <section class="project-details">
      <div class="project-overview">
        <h2>Overview</h2>
        <p class="project-overview-text">
          {{
            currentProject.overview || 'A detailed overview of this project including its purpose and main features.'
          }}
        </p>
      </div>

      <div class="project-technologies">
        <h2>Technologies</h2>
        <ul class="tech-list">
          <li v-for="(tech, index) in currentProject.technologies" :key="index">{{ tech }}</li>
          <li v-if="!currentProject.technologies || currentProject.technologies.length === 0">Technology 1</li>
          <li v-if="!currentProject.technologies || currentProject.technologies.length === 0">Technology 2</li>
          <li v-if="!currentProject.technologies || currentProject.technologies.length === 0">Technology 3</li>
        </ul>
      </div>

      <div class="project-challenges">
        <h2>Challenges</h2>
        <p>
          {{
            currentProject.challenges ||
            'Key challenges faced during the development of this project and how they were overcome.'
          }}
        </p>
      </div>

      <div class="project-links" v-if="currentProject.demoLink || currentProject.repoLink">
        <h2>Links</h2>
        <div class="links-container">
          <a
            v-if="currentProject.demoLink"
            :href="currentProject.demoLink"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
            >Live Demo</a
          >
          <a
            v-if="currentProject.repoLink"
            :href="currentProject.repoLink"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
            >Repository</a
          >
        </div>
      </div>
    </section>
  </main>

  <!-- LIGHTBOX -->
  <div v-if="isLightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
    <div class="lightbox-container" :class="{ 'mobile-frame-lightbox': currentProject.type === 'mobile' }">
      <div v-if="currentProject.type === 'mobile'" class="mobile-screen-container-lightbox">
        <img
          :src="currentProject.projectImages[imageSelected]"
          class="lightbox-image"
          :class="{ 'mobile-image-lightbox': currentProject.type === 'mobile', fade: true }"
          alt="Full view"
          @click.stop
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
          :key="'lightbox-' + imageSelected"
        />
      </div>
      <img
        v-else
        :src="currentProject.projectImages[imageSelected]"
        class="lightbox-image fade"
        alt="Full view"
        @click.stop
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        :key="'lightbox-' + imageSelected"
      />
      <div v-if="currentProject.type === 'mobile'" class="mobile-home-indicator-lightbox"></div>
    </div>
    <div class="lightbox-controls">
      <button class="lightbox-close" @click="closeLightbox">×</button>
    </div>
  </div>
</template>

<style scoped>
main {
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

h2 {
  text-align: left;
}

.project-overview-text {
  text-align: left;
}

.project-challenges p {
  text-align: left;
}

.carousel-container {
  display: flex;
  column-gap: 20px;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 20px;
}

.image-container {
  width: 80%;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  user-select: none;
}

/* Mobile frame styles */
.mobile-frame {
  width: 300px;
  aspect-ratio: 9 / 19.5;
  background-color: #1a1a1a;
  border-radius: 40px;
  border: 8px solid #1a1a1a;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  padding: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-screen-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 32px;
}

.mobile-image {
  border-radius: 32px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.mobile-home-indicator {
  display: none;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 5px;
  background-color: white;
  border-radius: 3px;
  z-index: 10;
  opacity: 0.5;
}

.fade {
  animation: fadeEffect 0.4s ease-in-out;
}

@keyframes fadeEffect {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.4s ease, filter 0.3s ease;
  cursor: pointer;
  transform: scale(1.02);
}

.project-image:hover {
  transform: scale(1.04);
  filter: brightness(1.05);
}

.arrow-icon {
  width: 60px;
  height: 60px;
  cursor: pointer;
  color: var(--textBlack);
  transition: transform 0.2s ease;
  padding: 16px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-icon:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.95);
}

.check-list {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.check-list input[type='radio'] {
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #aaa;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.check-list input[type='radio']:checked {
  background-color: #333;
  border-color: #333;
}

/* LIGHTBOX STYLES */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.4s ease-in-out;
}

.lightbox-container {
  position: relative;
}

.lightbox-image {
  max-width: 90%;
  max-height: 80%;
  border-radius: 10px;
  transition: all 0.3s ease;
}

/* Mobile frame styles for lightbox */
.mobile-frame-lightbox {
  width: 340px;
  height: 735px;
  background-color: #1a1a1a;
  border-radius: 50px;
  border: 12px solid #1a1a1a;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-screen-container-lightbox {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 38px;
}

.mobile-image-lightbox {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  max-width: none;
  max-height: none;
  border-radius: 38px;
  display: block;
}

.mobile-home-indicator-lightbox {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 6px;
  background-color: white;
  border-radius: 3px;
  z-index: 10000;
  opacity: 0.5;
}

.lightbox-image::selection {
  background: none;
}

.lightbox-controls {
  position: absolute;
  top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  pointer-events: none;
}

.lightbox-arrow {
  font-size: 2.5rem;
  width: 50px;
  height: 50px;
  pointer-events: all;
  color: white;
  cursor: pointer;
}

.lightbox-arrow:hover {
  transform: scale(1.2);
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 2.5rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  pointer-events: all;
  transition: transform 0.2s ease;
}

.lightbox-close:hover {
  transform: scale(1.2);
}

/* Project Details Section Styles */
.project-details {
  width: 90%;
  max-width: 1000px;
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.project-details h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--textBlack);
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 8px;
}

.project-details h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--textBlack);
  opacity: 0.7;
}

.project-details p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--textBlack);
  opacity: 0.85;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
  padding: 0;
}

.tech-list li {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.links-container {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.project-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--textBlack);
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media screen and (max-width: 768px) {
  .carousel-container {
    width: 95%;
    column-gap: 10px;
    user-select: none;
  }

  .arrow-icon {
    width: 40px;
    height: 40px;
    padding: 10px;
  }

  .mobile-frame {
    width: 280px;
  }

  .mobile-home-indicator {
    width: 100px;
    height: 4px;
  }

  .lightbox-arrow {
    font-size: 2rem;
  }

  .lightbox-close {
    top: 10px;
    right: 20px;
    font-size: 2rem;
  }

  .project-details {
    width: 95%;
    gap: 30px;
    margin-top: 40px;
  }

  .tech-list {
    gap: 8px;
  }

  .tech-list li {
    padding: 5px 12px;
    font-size: 0.85rem;
  }

  .links-container {
    flex-direction: column;
    gap: 10px;
  }

  .project-link {
    width: 100%;
    text-align: center;
  }

  .mobile-frame-lightbox {
    width: 320px;
    height: 690px;
    border-width: 10px;
    border-radius: 40px;
  }

  .mobile-image-lightbox {
    border-radius: 30px;
  }

  .mobile-home-indicator-lightbox {
    width: 120px;
    height: 5px;
    bottom: 10px;
  }
}

@media screen and (max-width: 480px) {
  .carousel-container {
    width: 100%;
    column-gap: 5px;
  }

  .arrow-icon {
    width: 30px;
    height: 30px;
    padding: 8px;
  }

  .mobile-frame {
    width: 220px;
    border-width: 6px;
  }

  .mobile-home-indicator {
    width: 80px;
    height: 3px;
    bottom: 6px;
  }

  .project-details {
    width: 100%;
    padding: 0 15px;
    gap: 25px;
  }

  .project-details h2 {
    font-size: 1.3rem;
  }

  .project-details p {
    font-size: 0.95rem;
  }

  .mobile-frame-lightbox {
    width: 280px;
    height: 600px;
    border-width: 8px;
    border-radius: 35px;
  }

  .mobile-image-lightbox {
    border-radius: 27px;
  }

  .mobile-home-indicator-lightbox {
    width: 100px;
    height: 4px;
    bottom: 8px;
  }
}
</style>
