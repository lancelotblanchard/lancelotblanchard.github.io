<template>
  <div class="about">
    <section class="about-me section text-left">
      <div class="site-section pb-0">
        <div class="container">
          <div class="row align-items-stretch">
            <div class="col">
              <h1 class="h1" data-aos="fade-up"  data-aos-delay="100">About Me</h1>
              <div class="image-wrapper float-md-right pl-0 pl-md-5 text-center pb-3 pb-md-0"
                   data-aos="fade-up"  data-aos-delay="200">
                <img src="@/assets/images/lancelot-blanchard.jpg"
                     alt="Lancelot Blanchard" class="img-fluid thumbnail">
              </div>
              <div class="single-post-content-wrapper pr-5" data-aos="fade-up" data-aos-delay="200">
                <div class="mb-5">
                  <p>
                    I am a musician, engineer, and AI researcher, currently pursuing a
                    Master's in the Responsive Environments research group of the MIT Media
                    Lab. I hold a Master's of Research in Artificial Intelligence and Machine
                    Learning and a Master's of Engineering in Computing from Imperial College
                    London. In addition to my engineering studies, I graduated from the French
                    conservatory where I studied classical piano and music theory for twelve years.
                    I have composed and performed with musicians in a variety of genres and formats.
                  </p>
                  <p>
                    To know more, you can
                    <router-link class="about-link" to="/vision">
                    read about my vision here
                    </router-link>.
                  </p>
                </div>
                <p><a :href="`${publicPath}cv.pdf`" download class="readmore">Download CV</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  private publicPath = process.env.BASE_URL;

  mounted() {
    document.title = 'Lancelot Blanchard | About';
  }
}
</script>

<style scoped>
.about-link {
  color: #777;
}

.about-link:hover {
  color: #000;
  cursor: pointer;
}
</style>
