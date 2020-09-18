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
                <h2 class="mb-3"> <span class="display-4 ">只</span>要少許 </h2>
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
    <!-- use -->
    <section class="use container mb-md-7 mb-5 py-7">
      <div class="d-flex justify-content-center text-primary-dark font-weight-bold mb-4">
        <h2
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom">
        香草
        </h2>
        <h2
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom" data-aos-delay="300">
          &
        </h2>
        <h2
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom" data-aos-delay="100">
        香料
        </h2>
        <h2>可以用在...</h2>
      </div>
      <!-- <h2
      data-aos="fade-down" data-aos-delay="50"
      class="text-center text-primary-dark font-weight-bold mb-4">
      香料 & 香草 可以用在...</h2> -->
      <p
      data-aos="fade-up" data-aos-duration="800" data-aos-delay="80"
      class="text-center text-primary font-weight-bold">
        料理除了食材的原味外
        <br>
        讓食材加分就是香料&香草的運用
        <br>
        能夠去除肉類海鮮的腥味，也能調味增加食欲
        <br>
        還能整合味道，讓料理的香氣與味道更加融合
        <br>
        有的還可以為食材上色，還有料理完成時的點綴
        <br>
        在視覺上更加美味，色香味俱全
        </p>
      <div class="accordion">
        <ul class="list-unstyled">
          <li tabindex="1">
            <div>
              <a href="#">
                <h2>食材</h2>
                <p>處理肉類、海鮮食材時使用香草或是香料進行醃製可以去除腥味</p>
              </a>
            </div>
          </li>
          <li tabindex="2">
            <div>
              <a href="#">
                <h2>料理</h2>
                <p>選取適合的香料與肉類、海鮮及蔬菜一起烹調，經長時間燉煮後味道更富有層次。</p>
              </a>
            </div>
          </li>
          <li tabindex="3">
            <div>
              <a href="#">
                <h2>甜點</h2>
                <p>加入麵糰中製成麵食、餅乾，也可以特調香料紅酒、雞尾酒。</p>
              </a>
            </div>
          </li>
          <li tabindex="4">
            <div>
              <a href="#">
                <h2>點綴</h2>
                <p>起鍋前 加入香料做提味使用，或是上菜前加點香草擺盤裝飾用</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!--intro 介紹有什麼?-->
    <section class="intro container-fluid bg-primary-light position-relative mb-md-7 mb-5 py-7">
      <div class="row">
        <div
        class="col-md-6 bg-cover"
          style="position: absolute; top: 0; bottom: 0;
          background-image:url(https://images.unsplash.com/photo-1517135399940-2855f5be7c4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)">
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-md-6">
            <div class="px-5"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-duration="500"
            >
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
                <router-link class="btn btn-outline-primary-dark"
                  to="/product">
                  了解更多
                    <i class="fas fa-long-arrow-alt-right"></i>
                </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- tips用在 -->
    <section class="mb-md-7 mb-5 py-7">
      <h2
      data-aos="fade-left"
      class="text-primary-dark font-weight-bold text-center mb-3">美味秘訣</h2>
      <h4
      data-aos="fade-left"
      data-aos-delay="300"
      class="font-weight-bold text-center mb-5">就是灑上一點香料，趕快來去購買</h4>
      <div class="container">
        <div class="row">
          <div
          data-aos="fade-down-right"
          data-aos-duration="1200"
          class="col-lg-6 col-12">
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
          <div
          data-aos="fade-down-left"
          data-aos-duration="1200"
          class="col-lg-6 col-12">
            <div class="row">
              <div class="col-4">
                <div class="cube bg-cover mb-4 hover-bg"
                  style="background-image:url(https://images.unsplash.com/photo-1517856497829-3047e3fffae1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60);">
                </div>
              </div>
              <div class="col-4">
                <div
                class="cube bg-cover mb-4"
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
                <div
                class="cube bg-cover mb-4"
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
    // background-image: url(../assets/images/muradi-0b8NaL2CMaQ-unsplash-lg.jpg);
    background-image: url(../../assets/images/muradi-0b8NaL2CMaQ-unsplash-lg.jpg);
    position: absolute;
    top: 0;
    bottom: 0;
  }
</style>
