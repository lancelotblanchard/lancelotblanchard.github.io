<template>
  <div class="home">
    <Portfolio />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Portfolio from '@/components/Portfolio.vue';

@Component({
  components: {
    Portfolio,
  },
})
export default class Home extends Vue {
  mounted() {
    document.title = 'Lancelot Blanchard';
  }
}
</script>
