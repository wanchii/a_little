<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>

    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`).then(() => {
      this.isLoading = false;
    });
  },
};
</script>

<style lang="scss">
@import './assets/scss/all.scss';
@import './assets/style.css';

</style>
