<template>
  <div class="home">
    <!-- banner 區域 -->
    <section class="banner container position-relative mb-md-7 mb-5 py-7">
      <div class="row flex-row-reverse">
        <div class="col-lg-9 col-md-7 bg-cover banner-bg">
        </div>
        <div class="container">
          <div class="row justify-content-md-start py-7">
            <div class="col-lg-3 col-md-5">
              <div>
                <h2 class="mb-3"> <span class="display-4">只</span>要少許 </h2>
                <h4 class="mb-3">讓 ‧ 食材 ‧ 加點 ‧ 風味</h4>
                <router-link class="btn btn-lg hovr_sweep"
                to="/products">
                購買
                <i class="fas fa-shopping-cart"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-md-7 mb-5 py-7">
      <h2 class="text-primary-dark font-weight-bold text-center mb-7">來點香草&香料</h2>
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-10 col-12">
            <div class="row flex-column align-items-center">
              <div class="mb-5 py-3">
                <img src="../assets/images/svg/spice.svg" alt="" class="herb">
                <img src="../assets/images/svg/pepper.svg" alt="" class="ml-6 spice">
              </div>
              <div class="flip-card mb-3">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src="../assets/images/svg/soup-black.svg" alt="">
                  </div>
                  <div class="flip-card-back">
                    <img src="../assets/images/svg/soup-color.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--intro 介紹有什麼?-->
    <section class="intro container-fluid bg-primary-light position-relative mb-md-7 mb-5 py-7">
      <div class="row">
        <div class="col-md-6 bg-cover"
          style="position: absolute; top: 0; bottom: 0;
          background-image:url(https://images.unsplash.com/photo-1517135399940-2855f5be7c4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)">
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-md-6">
            <div class="px-5">
              <h2 class="mb-4">香草與香料</h2>
                <p>
                  英文裡區分香草（herb）和香辛料（spice）。一般香草植物會用到植物的綠葉或是花（可能是新鮮的或是曬乾的）
                  ，而香辛料會用到植物的其他部位，例如種子、漿果、樹皮、根及果實，而且多半會乾燥後使用。
                  Herb在在植物學中是指所有草本植物，不論是否可以用作香料。藥草在英語裡也稱為herb，但包含藥用植物的
                  葉、根、花、種子、樹皮、維管形成層、樹脂及果皮。
                </p>
                <h4>香草</h4>
                <p>一般香草植物會用到植物的綠葉或是花（可能是新鮮的或是曬乾的），常見的香草，百里香、迷迭香、薄荷、檸檬香茅等</p>
                <h4>香料</h4>
                <p>
                    香料，或名辛香料或香辛料，是一些乾的植物的種子、果實、根、樹皮做成的調味料的總稱，
                    例如胡椒、丁香、肉桂等。它們主要是被用於為食物增加香味，而不是提供營養。
                </p>
                <a href="#" class="btn btn-outline-primary-dark">
                    了解更多
                    <i class="fas fa-long-arrow-alt-right"></i>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- tips用在 -->
    <section class="mb-md-7 mb-5 py-7">
      <h2 class="text-primary-dark font-weight-bold text-center mb-7">美味秘訣</h2>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
              <div class="row ">
                <div class="col-5">
                  <div class="bg-cover mb-4" style="background-image:url(https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500);
                    width:auto;height: 318px;">
                  </div>
                </div>
                <div class="col-7">
                  <div class="bg-cover mb-4" style="background-image: url(https://images.unsplash.com/photo-1504387828636-abeb50778c0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60);
                    width: auto;height: 318px;">
                  </div>
                </div>
              </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="row">
              <div class="col-4">
                <div class="cube bg-cover mb-4 hover-bg"
                  style="background-image:url(https://images.unsplash.com/photo-1517856497829-3047e3fffae1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60);">
                </div>
              </div>
              <div class="col-4">
                <div class="cube bg-cover mb-4"
                  style="background-image:url(https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60);">
                </div>
              </div>
              <div class="col-4">
                <div class="cube bg-cover mb-4 hover-bg"
                  style="background-image:url(https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60); ">
                </div>
              </div>
              <div class="col-4">
                <div class="cube bg-cover mb-4"
                  style="background-image:url(https://images.unsplash.com/photo-1588347785102-2944ba63d0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60);">
                </div>
              </div>
              <div class="col-4">
                <div class="cube bg-cover mb-4"
                  style="background-image:url(https://images.unsplash.com/photo-1517317138817-d043c7dcc35f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60);">
                </div>
              </div>
              <div class="col-4">
                <div class="cube bg-cover mb-4"
                  style="background-image:url(https://images.unsplash.com/photo-1552845683-cfefc701e423?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60);">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Subscribe />
  </div>
</template>

<script>
import Subscribe from '@/components/Subscribe.vue';

export default {
  name: 'Home',
  components: {
    Subscribe,
  },
};
</script>
<style lang="scss" scoped>

  .banner-bg {
    background-image: url(../assets/images/muradi-0b8NaL2CMaQ-unsplash-lg.jpg);
    position: absolute;
    top: 0;
    bottom: 0;
  }
</style>
