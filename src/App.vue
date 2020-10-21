<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer,
    Navigation,
  },
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}
</style>
