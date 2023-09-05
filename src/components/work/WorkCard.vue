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
    largeImage: false,
    id: Number,
  },
};
</script>
<template>
  <figure>
    <router-link :to="'/work/' + id">
      <img :src="image" alt="" :class="largeImage && 'img-large'" />
    </router-link>
    <div class="project-info">
      <h3>{{ name }}</h3>
      <router-link :to="'/work/' + id" target="_blank" :style="!isPublic ? 'opacity: 0;' : ''">{{
        isPublic ? domain : 'withOutDomain'
      }}</router-link>
    </div>
  </figure>
</template>
<style scoped>
figure {
  width: 340px;
  height: 284px;
  background-color: var(--smoke);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  transition: all 0.5s;
  margin-top: 40px;
}
figure:nth-child(1) {
  margin-top: 0;
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
  width: 160px;
}
.img-large {
  width: 260px;
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
@media (min-width: 1024px) {
  figure {
    width: 368px;
    height: 305px;
    margin-top: 0;
  }
}
</style>
