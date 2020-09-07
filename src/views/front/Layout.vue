<template>

<div>
  <div class="content">
    <Navbar />
    <router-view></router-view>
  </div>
    <Footer />
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    Navbar,
    Footer,
  },
  created() {
    // const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products`;
    // this.$http.get(url)
    //   .then((response) => {
    //     this.products = response.data.data;
    //   });
  },
};
</script>

<style>

</style>
