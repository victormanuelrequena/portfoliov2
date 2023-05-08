<script>
export default {
  props: {
    siteUrl: String,
    image: String,
    name: String,
    isPublic: {
      type: Boolean,
      default: true,
    },
    domain: String,
  },
};
</script>
<template>
  <figure>
    <a :href="siteUrl" target="_blank">
      <img :src="image" alt="" />
    </a>
    <div class="project-info">
      <h3>{{ name }}</h3>
      <a :href="siteUrl" target="_blank" :style="!isPublic ? 'opacity: 0;' : ''">{{
        isPublic ? domain : 'withOutDomain'
      }}</a>
    </div>
  </figure>
</template>
<style scoped>
figure {
  width: 368px;
  height: 305px;
  background-color: var(--smoke);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  transition: all 0.5s;
}
figure:hover {
  transform: translateY(-4%);
  box-shadow: 15px 8px 6px -6px rgba(235, 234, 242, 0.58);
}
figure > a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
}
figure a img {
  width: 190px;
}
.project-info {
  background-color: var(--white);
  padding: 36px;
}
.project-info h3 {
  font-size: 22px;
  font-weight: bold;
  color: var(--textBlack);
}
.project-info a {
  color: var(--purple);
  font-size: 18px;
  text-decoration: none;
}
</style>
