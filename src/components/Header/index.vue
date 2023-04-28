<template>
  <header>
    <a href="/">
      <img class="vic-logo" src="../../assets/vicLogo_purple.svg" alt="" />
    </a>
    <button class="menu-btn"></button>
  </header>
</template>

<script></script>

<style scoped>
header {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 10;
  padding: 0 32px;
  height: 107px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vic-logo {
  width: 90px;
  height: 34px;
  cursor: pointer;
}

.menu-btn {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
}

.menu-btn::before,
.menu-btn::after {
  content: '';
  display: inline-block;
  width: 40px;
  height: 2px;
  background-color: var(--purple);
}
.menu-btn::after {
  width: 28px;
  margin-top: 1em;
}

@media (min-width: 1024px) {
  header {
    padding: clamp(2rem, calc(-0.29rem + 3.57vw), 4rem)
      clamp(3.88rem, calc(1.38rem + 3.91vw), 6.06rem) 0;
  }
  .vic-logo {
    width: 130px;
    height: 67px;
  }
}
</style>
