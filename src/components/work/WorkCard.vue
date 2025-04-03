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
    </div>
  </figure>
</template>
<style scoped>
figure {
  width: 100%;
  height: auto;
  min-height: 220px;
  background-color: var(--smoke);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  transition: all 0.5s;
  margin-top: 20px;
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
  min-height: 140px;
  cursor: pointer;
  padding: 20px 0;
}
figure a img {
  width: 120px;
  max-width: 100%;
}
.img-large {
  width: 180px;
}
.project-info {
  background-color: var(--white);
  padding: 20px;
  height: 120px;
  display: flex;
  align-items: center;
}
.project-info h3 {
  font-size: 18px;
  font-weight: bold;
  color: var(--textBlack);
}

/* Tablet */
@media (min-width: 768px) {
  figure {
    width: 100%;
    min-height: 250px;
  }
  figure > a {
    min-height: 160px;
  }
  figure a img {
    width: 140px;
  }
  .img-large {
    width: 220px;
  }
  .project-info {
    padding: 25px;
    height: 120px;
  }
  .project-info h3 {
    font-size: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  figure {
    width: 100%;
    height: 305px;
    margin-top: 0;
  }
  figure > a {
    min-height: auto;
  }
  figure a img {
    width: 160px;
  }
  .img-large {
    width: 260px;
  }
  .project-info {
    padding: 0 36px;
    height: 120px;
  }
  .project-info h3 {
    font-size: 22px;
  }
}
</style>
