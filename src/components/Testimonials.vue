<template>
  <section class="testimonials section pt-0">
    <div class="container">
      <div class="owl-carousel testimonial-carousel">
        <div class="testimonial-wrap">
          <div class="testimonial">
            <img src="assets/img/person_1.jpg" alt="Image" class="img-fluid">
            <blockquote>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                necessitatibus incidunt ut officiis
                explicabo inventore.</p>
            </blockquote>
            <p>&mdash; Jean Hicks</p>
          </div>
        </div>
        <div class="testimonial-wrap">
          <div class="testimonial">
            <img src="assets/img/person_2.jpg" alt="Image" class="img-fluid">
            <blockquote>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                necessitatibus incidunt ut officiis
                explicabo inventore.</p>
            </blockquote>
            <p>&mdash; Chris Stanworth</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Testimonials extends Vue {
}
</script>

<style scoped>
.testimonial-carousel .owl-dots {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}

.testimonial-carousel .owl-dots .owl-dot {
  display: inline-block;
}

.testimonial-carousel .owl-dots .owl-dot > span {
  display: inline-block;
  width: 7px;
  height: 7px;
  background-color: #cbd3da;
  border-radius: 50%;
  margin: 5px;
}

.testimonial-carousel .owl-dots .owl-dot.active {
  outline: none;
}

.testimonial-carousel .owl-dots .owl-dot.active > span {
  background: #0d1e2d;
}

.testimonial-wrap {
  padding: 50px 50px 80px 50px;
  background: #eceff2;
}

.testimonial-wrap .testimonial {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.testimonial-wrap .testimonial img {
  border-radius: 50%;
  width: 120px;
  margin: 0 auto 30px auto;
}

.testimonial-wrap .testimonial blockquote p {
  font-size: 20px;
}
</style>
