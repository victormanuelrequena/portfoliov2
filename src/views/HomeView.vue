<script setup>
import Hero from '../components/Hero/index.vue';
import Footer from '../components/Footer/index.vue';
import SendMeMessage from '../components/SendMeMessage/SendMeMessage.vue';
import BuildWrite from '../components/BuildWrite/index.vue';
import DesignEngineering from '../components/DesignEngineering/index.vue';
</script>

<template>
  <main>
    <Hero />
    <DesignEngineering />
    <BuildWrite />
    <SendMeMessage />
    <Footer mode="large" />
  </main>
</template>

<style scoped>
main {
  border: '1px solid red';
  overflow-x: hidden;
}
</style>
