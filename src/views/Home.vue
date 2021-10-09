<template>
  <div class="h-90 slide_container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="h-100"
    >
       <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        img-src="http://www.restaurantnews.com/wp-content/uploads/2014/03/2014-Pizza-Industry-Landscape-The-Pizza-Industry-is-A-Casual-Dining-Staple.jpg"
      ></b-carousel-slide>

   

        <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://hips.hearstapps.com/del.h-cdn.co/assets/17/26/1600x800/landscape-1498518969-delish-pizza-with-the-most-pepperoni-3.jpg?resize=1200:*"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
    </b-carousel>
    <div class="f-btn btn_menu w-75 px-auto">
      <b-button class="mx-5 w-25 py-2 f-btn" animation="cylon" pill variant="warning" href="/menu"> Order
      </b-button>
      <b-button class="mx-5 w-25 py-2 f-btn" pill variant="danger" href="/myOrder">My Order</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style >
.carousel-inner {
  height: 100% !important;
}

.f-btn{
  font-size: 25px !important;
}

.h-90 {
  height: 90%;
}

.btn_menu {
  position: fixed;
  top: 50%;
  right: 10%;
}

.slide_container {
  position: relative;
  height: 90vh;
}

.sr-only {
  display: none !important;
}
</style>
