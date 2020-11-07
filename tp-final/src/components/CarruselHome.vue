<template>
  <div>
    <hr width="100%" size="10" noshade="noshade" />
    <b-container>
      <b-row class="vw-10">
        <b-carousel
          id="carousel-1"
          fade="true"
          :interval="4000"
          controls
          indicators
          img-width="1024"
          img-height="480"
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          ><b-carousel-slide
           class="d-block img-fluid w-100"
            caption="Primera foto del carrusel"
            text="Esta probablemente podria ser una parte para mostrar y linkear fotos de lo que suban los usuarios"
            img-src="https://picsum.photos/1024/480/?image=120"
          ></b-carousel-slide>
          <b-carousel-slide
           class="d-block img-fluid w-100"
            caption="Segunda foto del carrusel"
            text="Esta probablemente podria ser una parte para mostrar y linkear fotos de lo que suban los usuarios"
            img-src="https://picsum.photos/1024/480/?image=222"
          ></b-carousel-slide>
        </b-carousel>
      </b-row>
    </b-container>
    <hr width="100%" size="10" noshade="noshade" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliding: null
    };
  }
};
</script>
