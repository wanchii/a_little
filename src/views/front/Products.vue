/* eslint-disable prefer-arrow-callback */
<template>
  <div>
    <loading :active.sync="isLoading" loader='dots'></loading>
    <!-- 放分類和廣告標語-->
    <section class="mb-5">
      <div class="jumbotron jumbotron-fluid mb-0" style="background-image:url(https://images.pexels.com/photos/3735147/pexels-photo-3735147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
          background-position: 0% 80%; background-size: cover;height: 300px;">
      </div>
      <div class="container">
        <ul class="cateList list-unstyled d-flex py-3 justify-content-center">
          <li>
            <a href="#" class="h4 px-md-5 px-3 hover-underline"
            @click.prevent="clickCategory('all')">全部</a>
            </li>
          <li>
            <a href="#" class="h4 px-md-5 px-3 hover-underline"
            @click.prevent="clickCategory('herb')">香草</a>
            </li>
          <li>
            <a href="#" class="h4 px-md-5 px-3 hover-underline"
            @click.prevent="clickCategory('spice')">香料</a>
            </li>
        </ul>
        <p class="font-weight-bold h4 mb-5 text-center">
          <span class="icon-megaphone"></span>
          秋天的滋味，給你85折美味
          <br>
          <small class="text-muted">輸入 savory98 立即饗受</small>
        </p>
      </div>
    </section>
    <!-- 主要產品列表 -->
    <section class="products py-5 mb-md-7 mb-5">
      <div class="container">
        <h2 class="text-primary-dark font-weight-bold ">{{ categoryName }}</h2>
          <div class="row">
            <div class="col-12">
              <div class="d-flex">
                <p class="pr-2">共 {{ tempProducts.length }} 項</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12 mb-4"
              v-for="item in tempProducts" :key="item.id">
              <div class="card border-0">
                <router-link :to='`/product/${item.id}`' class="text-decoration-none">
                <div class="card-img bg-cover d-flex flex-column
                    justify-content-end p-lg-3 p-md-5 p-6 rounded-0"
                    :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }">
                    <router-link :to='`/product/${item.id}`'  type="button"
                    class="btn btn-outline-primary-dark mb-3 p-md-2 p-3">
                    商品內容
                    </router-link>
                    <button type="button" class="btn btn-primary p-md-2 p-3"
                      :disabled="status.loadingItem === item.id"
                      @click.prevent="addToCart(item.id, item.title)">
                      <i v-if="status.loadingItem === item.id"
                      class="fas fa-circle-notch fa-spin"></i>
                      加到購物車
                    </button>
                  </div>
                  <div class="card-body text-center p-2">
                    <div class="position-relative">
                      <span class="badge badge-secondary"
                      style="position:absolute; top:0; right:0;">
                        {{ item.category }}
                      </span>
                      <h4 class="card-title mb-1 text-primary-dark font-weight-bold">
                        {{ item.title }}
                      </h4>
                    </div>
                    <p class="card-text text-primary">
                      NT$ {{ item.price  }} / {{ item.unit }}
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <!-- 分頁碼 -->
          <!-- <div class="d-flex justify-content-center mt-4">
            <pagination :pages="pagination" @update="getProducts"></pagination>
          </div> -->
      </div>
    </section>
    <Subscribe />
</div>
</template>

<script>
import Subscribe from '@/components/Subscribe.vue';
// import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      tempProducts: [],
      status: {
        loadingItem: '',
      },
      pagination: {},
      categoryName: '全部',
      isLoading: false,
    };
  },
  components: {
    Subscribe,
    // Pagination,
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.data;
          this.tempProducts = this.products;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    addToCart(id, name, quantity = 1) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.post(url, cart).then(() => {
        this.$toast.success(`${name}加入購物車`);
        this.$bus.$emit('update-total');
        this.status.loadingItem = '';
      }).catch(() => {
        this.$toast.error(`${name}加入購物車失敗`);
        this.status.loadingItem = '';
      });
    },
    clickCategory(type) {
      this.isLoading = true;
      this.tempProducts = [];
      switch (type) {
        case 'all':
          this.tempProducts = this.products;
          this.categoryName = '全部';
          this.isLoading = false;
          break;
        case 'herb':
          this.products.forEach((item) => {
            if (item.category === '香草') {
              this.tempProducts.push(item);
            }
          });
          this.categoryName = '香草';
          this.isLoading = false;
          break;
        case 'spice':
          this.products.forEach((item) => {
            if (item.category === '香料') {
              this.tempProducts.push(item);
            }
          });
          this.categoryName = '香料';
          this.isLoading = false;
          break;
        default:
          break;
      }
    },
  },
};
</script>
