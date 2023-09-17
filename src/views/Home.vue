<template>
  <section class="home section">
    <div class="container text-left">
      <h1 data-aos="fade-up" data-aos-delay="100">Hello, I'm Lancelot.</h1>

      <p data-aos="fade-up" data-aos-delay="200">
        I am a musician, engineer, and AI researcher currently based in Boston, MA.
        I am a Research Assistant in the Responsive Environments group of the MIT
        Media Lab, carrying out research in the applications of generative AI for
        musical expression and communication. I am working with multiple
        artists and musicians to design interfaces that embed AI and use analog
        and digital signals to create new musical experiences.</p>
      <p data-aos="fade-up" data-aos-delay="200">
        Innovation and technology have always been key for the expansion of human
        creativity and imagination. Today, I believe that modern technologies like AI
        need to be thoughtfully integrated into new tools and instruments to create
        novel forms of expressivity and entertainment and allow new possibilities.</p>
    </div>
    <div class="row mt-5 home-navigation" data-aos="fade-up" data-aos-delay="300">
      <div class="col-2 offset-3">
        <router-link class="nav-link" to="/projects" exact>View my projects</router-link>
      </div>
      <div class="col-2">
        <router-link class="nav-link" to="/vision" exact>Read my vision</router-link>
      </div>
      <div class="col-2">
        <router-link class="nav-link" to="/about" exact>More about me</router-link>
      </div>
    </div>
    <!-- <Portfolio /> -->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import Portfolio from '@/views/Portfolio.vue';

@Component({
  components: {
    // Portfolio,
  },
})
export default class Home extends Vue {
  mounted() {
    document.title = 'Lancelot Blanchard';
  }
}
</script>

<style scoped>
.home-navigation div {
  font-size: 1.4em;
  cursor: pointer;
}
</style>
