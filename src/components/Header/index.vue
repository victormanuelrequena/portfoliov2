<template>
  <header :class="headerClasses">
    <router-link to="/">
      <img class="vic-logo" :src="logo" alt="Victor" />
    </router-link>
    <button type="button" class="menu-btn" :class="[openMenu && 'isOpen']" @click="toggle()"></button>
  </header>
  <div class="menu-list" :class="openMenu && 'menu-list-active'">
    <ul>
      <li>
        <router-link to="/work" @click.native="toggle()">My Work</router-link>
      </li>
      <li>
        <router-link to="/shelf" @click.native="toggle()">My Shelf</router-link>
      </li>
      <li>
        <router-link to="/resume" target="_blank" @click.native="toggle()">My Resume</router-link>
      </li>
    </ul>
    <h5>SAY HELLO</h5>
    <ul class="down-list">
      <li>
        <a href="mailto:vincereimmanuel@gmail.com?subject=Hi, Victor">hello@gmail.com</a>
      </li>
      <li>
        <a href="https://t.me/requesux" target="_blank">t.me/requesux</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    purpleLogo: {
      type: Boolean,
      default: false,
    },
    static: {
      type: Boolean,
      default: false,
    },
    currentSection: {
      type: String,
      default: 'hero',
    },
  },
  // State
  data() {
    return {
      openMenu: false,
      isMobile: false,
      logo: '/assets/vicLogo.svg',
    };
  },
  computed: {
    inFooter() {
      return this.currentSection === 'footer';
    },
    headerClasses() {
      return [
        this.static && 'static',
        this.isMobile && 'mobile-header',
        this.isMobile && 'position-static',
        (this.currentSection === 'hero' || this.inFooter) && 'green-menu',
        this.inFooter && 'footer-active',
        this.currentSection === 'over_years' && 'over-years-menu',
      ];
    },
  },
  // Actions
  methods: {
    toggle() {
      this.openMenu = !this.openMenu;
    },
    checkResponsive() {
      this.isMobile = window.innerWidth < 1024;
    },
    updateLogo() {
      this.logo = this.purpleLogo ? '/assets/vicLogo_purple.svg' : '/assets/vicLogo.svg';
    },
  },
  watch: {
    purpleLogo: {
      immediate: true,
      handler() {
        this.updateLogo();
      },
    },
  },
  mounted() {
    this.checkResponsive();
    window.addEventListener('resize', this.checkResponsive);
    this.updateLogo();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkResponsive);
  },
};
</script>

<style scoped>
.green-menu .menu-btn::before,
.green-menu .menu-btn::after {
  background-color: var(--appleGreen) !important;
}

.over-years-menu .menu-btn::before,
.over-years-menu .menu-btn::after {
  background-color: var(--appleGreen) !important;
}

.position-static {
  position: absolute !important;
  top: 0;
}

.static {
  position: absolute;
}

header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 0 32px;
  height: 107px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  background-color: transparent;
}

.mobile-header {
  background-color: transparent;
  backdrop-filter: none;
  box-shadow: none;
}

.vic-logo {
  width: 90px;
  height: 34px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
  height: 30px;
  position: relative;
  z-index: 9999999;
}

.menu-btn::before,
.menu-btn::after {
  content: '';
  display: inline-block;
  width: 40px;
  height: 2px;
  background-color: var(--purple);
  transition: 0.3s all;
  z-index: 9999999;
}

.menu-btn::after {
  width: 28px;
  margin-top: 1em;
  z-index: 9999999;
}

.isOpen {
  transition: 0.5s all;
}

.isOpen::after,
.isOpen::before {
  transition: 0.5s all;
  width: 40px;
  z-index: 9999999;
}

.isOpen::before {
  transform: rotateZ(135deg) translateY(-10px) translateX(10px);
}

.isOpen::after {
  transform: rotateZ(45deg);
}

.menu-list {
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  visibility: hidden;
  transform: scale(0);
  transform-origin: 100% 0%;
  transition: all 0.3s;
  opacity: 0;
}

.menu-list-active {
  visibility: visible;
  background-color: var(--white);
  z-index: 11;
  transform: scale(1);
  transform-origin: 100% 0%;
  opacity: 1;
  transition: all 0.3s;
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 0;
}

.menu-list-active > ul {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  animation: slide-top 0.2s ease-in-out both;
  animation-delay: 0.2s;
  padding: 0;
}

.down-list {
  /* animation: slide-top 0.3s ease-in-out both; */
  animation-delay: 0.3s !important;
}

.menu-list-active > ul > li > a {
  color: var(--purple);
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
}

.menu-list-active > ul > li > a::after {
  content: '';
  width: 20%;
  min-width: 1em;
  height: 100%;
  opacity: 0;
  top: 0;
  right: 0;
  transform: translateX(0);
  transform-origin: left;
  transition: 0.3s;
  position: absolute;
  pointer-events: none;
  background-color: currentColor;
}

.menu-list-active > ul > li > a:hover::after {
  opacity: 0.2;
  transform: translateX(0.5em);
}

.menu-list > h5 {
  margin-top: 50px;
  font-size: 1.1em;
  letter-spacing: 3px;
  color: var(--textGray);
  padding-bottom: 30px;
}

@media (min-width: 1024px) {
  header {
    padding: clamp(2rem, calc(-0.29rem + 3.57vw), 4rem) clamp(3.88rem, calc(1.38rem + 3.91vw), 6.06rem) 0;
    position: fixed !important;
  }

  header[class*='green-menu'] .menu-btn::before,
  header[class*='green-menu'] .menu-btn::after {
    background-color: var(--purple) !important;
  }

  header[class*='green-menu'][class*='footer-active'] .menu-btn::before,
  header[class*='green-menu'][class*='footer-active'] .menu-btn::after {
    background-color: var(--appleGreen) !important;
  }

  .vic-logo {
    width: 130px;
    height: 67px;
  }
  .menu-list {
    width: 352px;
    height: 500px;
    padding-left: 40px;
    left: auto;
    top: 30px;
    right: 50px;
  }
  .menu-list-active {
    padding-top: 90px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    padding-left: 40px;
  }
  .menu-list-active > ul {
    row-gap: 20px;
    align-items: flex-start;
  }
}

@keyframes slide-top {
  0% {
    transform: translateY(45%);
    opacity: 0.4;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
