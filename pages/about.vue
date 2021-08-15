<template>
  <div class="about-page">
    <div class="container">
      <h1>About</h1>

      <div class="sharer">
        <elect-sharer :url="url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: ""
    };
  },
  mounted() {
    this.url = window.location.href;
  }
};
</script>

<style lang="scss" scoped>
.about-page {
  background: white;
  padding: 40px 0;
  .sharer {
    display: flex;
    justify-content: center;
  }
}
</style>
