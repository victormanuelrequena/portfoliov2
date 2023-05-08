<template>
  <!-- Project -->
  <div>
    <div class="exp-section-box">
      <div>
        <h2>{{ company }}</h2>
        <h3>{{ role }}</h3>
      </div>
      <p class="exp-date">{{ date }}</p>
    </div>
    <!-- Goals success -->
    <ul class="goals-achieved">
      <li v-for="goal in goalsList" :key="goal">{{ goal }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Project',
  props: {
    company: String,
    role: String,
    date: String,
    goalsList: Array,
  },
};
</script>
<style scoped>
.exp-section-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.exp-section-box div {
  display: flex;
}
.exp-section-box div h2 {
  color: var(--purple);
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
}
.exp-section-box div h2::after {
  content: '';
  display: inline-block;
  min-width: 22px;
  height: 2px;
  background-color: var(--textBlack);
  opacity: 0.75;
  margin: 0 10px;
}
.exp-section-box div h3 {
  font-size: 18px;
  color: var(--textBlack);
  opacity: 0.9;
  font-weight: 500;
}
.exp-date {
  font-size: 14.4px;
  color: var(--textBlack);
  opacity: 0.75;
  transform: translateY(2px);
}
.goals-achieved {
  margin-top: 20px;
}
.goals-achieved {
  display: flex;
  flex-direction: column;
  row-gap: 14px;
}
.goals-achieved > li {
  color: #474747bf;
  list-style: none;
  max-width: 55ch;
  line-height: 150%;
}
.goals-achieved > li::before {
  width: 0.4em;
  content: '';
  height: 0.41em;
  margin-right: 0.3em;
  vertical-align: 10%;
  display: inline-block;
  filter: contrast(1.2);
  background: currentColor;
  position: absolute;
  left: -18px;
  top: 8px;
}
</style>
