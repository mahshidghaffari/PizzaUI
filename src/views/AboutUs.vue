<template>
  <b-row>
    <b-col cols="8" class="bg-warning m-5 p-5">
      <h1>Team Members:</h1>
      <h6>-----------------------------------------------</h6>
      <h4>Parand Mohri<span class="text-primary"> 6234307</span></h4>
      <h4>Mahshid Ghaffari<span class="text-primary"> 6255207</span></h4>
      <h6>-----------------------------------------------</h6>
      <h4>Leon Debnath<span class="text-primary"> 6252320</span></h4>
      <h4>Konstantin Sandfort<span class="text-primary"> 6255681</span></h4>
    </b-col>
  </b-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: "AboutUs",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style >
.carousel-inner {
  height: 100% !important;
}

.h-90 {
  height: 90%;
}
</style>
