<template>
  <footer class="footer" role="contentinfo">
    <!-- <div class="container">
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
    </div> -->
    <div class="container py-2 py-md-4">
        <div class="row">
          <div class="col-md-6 text-left links">
            <h3>Links</h3>
            <p>Find me online:</p>
            <ul>
              <li>
                <a href="https://media.mit.edu/people/lancelot" target="_blank">
                  <span class="fao fa-media-lab mx-2"></span>
                  Media Lab
                </a>
              </li>
              <li>
                <a href="https://github.com/lancelotblanchard" target="_blank">
                  <span class="fab fa-github mx-2"></span>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/lancelotblanchard/" target="_blank">
                  <span class="fab fa-linkedin mx-2"></span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 d-none d-md-block text-left">
            <h3>Contact Me</h3>
            <p>
              Feel free to send me an email:
              <br />
              <a href="mailto:lancelot@media.mit.edu">
                lancelot@media.mit.edu
              </a>
            </p>
          </div>
        </div>
      </div>
  </footer>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { library, dom } from '@fortawesome/fontawesome-svg-core';

@Component
export default class Footer extends Vue {
  mounted() {
    const faMediaLab = {
      prefix: 'fao',
      iconName: 'media-lab',
      icon: [
        81.7,
        82,
        [],
        'e001',
        'M69.3,80.8V46.7H35.2V12.5H1V1.2h45.5v34.1h34.1v45.5L69.3,80.8L69.3,80.8z M1,35.3v45.5h45.5V69.5H12.4V35.3H1z',
      ],
    };

    library.add(faMediaLab);
    dom.watch();
  }
}
</script>

<style scoped>
/* .footer {
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
} */

/* Custom Navmenu */
.footer {
  background: #0d1e2d;
}

.links li {
  list-style: none;
  color: rgba(255, 255, 255, 0.6);
}

.footer .custom-menu, .footer .custom-menu li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.footer .custom-menu li {
  margin-bottom: 0;
  font-size: 20px;
}

.footer .custom-menu li router-link {
  color: #fff;
  padding: 10px 0 !important;
}

.footer .custom-menu li router-link:hover {
  text-decoration: none;
}

.footer .custom-menu li .router-link-active {
  text-decoration: underline;
}

.footer h3 {
  font-size: 20px;
  color: #fff;
}

.footer p {
  color: rgba(255, 255, 255, 0.6);
}

.footer a {
  color: rgba(255, 255, 255, 0.7);
}

.footer a:hover {
  color: #fff;
}

/* Custom Navbar */
.custom-navbar {
  padding-top: 50px;
  width: 100%;
}

@media (max-width: 780px) {
  .custom-navbar > .container {
    padding-right: 0;
    padding-left: 0;
  }
}

.custom-navbar .navbar-brand {
  font-size: 1.7rem;
}

.socials {
  font-size: 1.5rem;
}
</style>
