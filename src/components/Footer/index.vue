<script setup>
const props = defineProps({
  mode: '',
});
</script>

<template>
  <footer :class="mode === 'large' && 'large'">
    <div class="wrapper">
      <div class="footer-main">
        <div class="say-hello">
          <div>
            <h4>Say Hello</h4>
            <ul>
              <li>
                <a href="mailto:vincereimmanuel@gmail.com?subject=Hi, Victor">hello@gmail.com</a>
              </li>
              <li>
                <a href="https://t.me/requesux" target="_blank">t.me/requesux</a>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <a href="/work">My Work</a>
            </li>
            <li>
              <a href="/shelf">My Shelf</a>
            </li>
            <li>
              <a @click="toggle()" href="/resume" target="_blank">My Resume</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© Victor Requena 2023</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
footer {
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: var(--darkPurple);
  padding: 80px 44px;
}
.footer-main {
  /* border: 1px solid red; */
  padding-bottom: 100px;
  width: 100%;
}
.footer-bottom {
  width: 100%;
  border-top: 1px solid var(--whiteSmoke);
}
.footer-bottom p {
  color: var(--appleGreen);
  font-size: 16px;
  margin-top: 40px;
}
.say-hello {
  color: var(--textGray);
}
.say-hello h4 {
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
}
.say-hello ul {
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin-top: 30px;
  font-weight: light;
}
.say-hello ul li a {
  color: var(--appleGreen);
  font-size: 16px;
}
.say-hello ul:nth-child(3) {
  margin-top: 40px;
}
@media (min-width: 601px) {
  .say-hello {
    display: flex;
  }
  .say-hello > ul:nth-child(2) {
    margin-top: 44px;
    margin-left: 60px;
  }
}
@media (min-width: 1024px) {
  footer {
    height: 60vh;
    padding: 0 120px 0 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .large {
    height: 100vh;
  }
  .footer-main {
  }
  .wrapper {
    width: 92%;
  }
  .say-hello > ul:nth-child(2) {
    margin-left: 180px;
  }
}
</style>
