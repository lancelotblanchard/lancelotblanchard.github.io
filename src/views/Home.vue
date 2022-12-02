<template>
  <section class="home section">
    <div class="container text-left">
      <h1 data-aos="fade-up" data-aos-delay="100">Hello, I'm Lancelot.</h1>
      <!-- <h2>I am an AI Researcher and Musician</h2> -->

      <p data-aos="fade-up" data-aos-delay="200">
        I am an AI researcher, engineer and musician from the Department
        of Computing of Imperial College London, currently visiting the Fluid Interfaces
        group of the MIT Media Lab. My research interests center around the use of
        Human-Centered Artificial Intelligence (HCAI) for the enhancement of human
        reasoning and creativity.</p>
      <p data-aos="fade-up" data-aos-delay="200">
        I am particularly interested in ways to use Artificial Intelligence as a tool
        in the generation of wisdom and art, rather than relying on this technology
        as a unique source of creation. As such, I am interested in the development of
        interfaces and languages that can help fluidify and strengthen the link
        between Human users and AI systems.</p>
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
