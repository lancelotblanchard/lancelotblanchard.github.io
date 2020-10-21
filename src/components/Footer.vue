<template>
  <footer class="footer text-left" role="contentinfo">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 my-auto">
          <div class="credits">
            Design by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div class="col-sm-6 social text-md-right">
          <a href="https://github.com/lancelotblanchard" target="_blank" class="mx-1">
            <span class="fab fa-github"></span>
          </a>
          <a href="https://linkedin.com/in/lancelotblanchard/" target="_blank" class="mx-1">
            <span class="fab fa-linkedin"></span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
}
</script>

<style scoped>
.footer {
  padding: 0 0 4rem 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

.footer a {
  color: #000;
}

.social a {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f8f9fa;
  position: relative;
  text-align: center;
  color: #0d1e2d;
}

.social a span {
  display: inline-block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.social a:hover {
  color: #000;
}
</style>
