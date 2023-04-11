<template>
  <div class="navigation">
    <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
      <div class="container py-2 py-md-4">
        <div class="row align-items-center">
          <div class="col-md-2">
            <ul class="custom-menu">
              <li @click="toggleBurger" data-toggle="collapse" data-target="#main-navbar">
                <router-link to="/" exact>Home</router-link>
              </li>
              <li @click="toggleBurger" data-toggle="collapse" data-target="#main-navbar">
                <router-link to="/about" exact>About Me</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 text-center">
            <h3>Links</h3>
            <p>
              Join me on socials:
            </p>
            <div class="socials">
              <a href="https://github.com/lancelotblanchard" target="_blank">
                <span class="fab fa-github mx-2"></span>
              </a>
              <a href="https://linkedin.com/in/lancelotblanchard/" target="_blank">
                <span class="fab fa-linkedin mx-2"></span>
              </a>
            </div>
          </div>
          <div class="col-md-6 d-none d-md-block">
            <h3>Contact Me</h3>
            <p>
              Feel free to send me an email:
              <br />
              <a href="mailto:lancelot.blanchard18@imperial.ac.uk">
                lancelot.blanchard18@imperial.ac.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light custom-navbar">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          Lancelot Blanchard
          <small class="text-left"><i>Musician - Engineer - AI Researcher</i></small>
        </router-link>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/" exact>
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/projects" exact>
              Portfolio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/about" exact>
              About Me
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/vision" exact>
              Vision
            </router-link>
          </li>
        </ul>
        <!-- <a ref="burger" href="#" class="burger" data-toggle="collapse"
           data-target="#main-navbar" @click="toggleBurger"
           v-bind:class="{ active: isBurgerActive }">
          <span></span>
        </a> -->
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
  private isBurgerActive = false;

  public toggleBurger() {
    window.scrollTo(0, 0);
    this.isBurgerActive = !this.isBurgerActive;
  }
}
</script>

<style scoped>
/* Custom Navmenu */
.custom-navmenu {
  background: #0d1e2d;
}

.custom-navmenu .custom-menu, .custom-navmenu .custom-menu li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.custom-navmenu .custom-menu li {
  margin-bottom: 0;
  font-size: 20px;
}

.custom-navmenu .custom-menu li router-link {
  color: #fff;
  padding: 10px 0 !important;
}

.custom-navmenu .custom-menu li router-link:hover {
  text-decoration: none;
}

.custom-navmenu .custom-menu li .router-link-active {
  text-decoration: underline;
}

.custom-navmenu h3 {
  font-size: 20px;
  color: #fff;
}

.custom-navmenu p {
  color: rgba(255, 255, 255, 0.6);
}

.custom-navmenu a {
  color: rgba(255, 255, 255, 0.7);
}

.custom-navmenu a:hover {
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

/* Burger */
.burger {
  width: 28px;
  height: 32px;
  cursor: pointer;
  position: relative;
}

.burger:before, .burger span, .burger:after {
  width: 100%;
  height: 2px;
  display: block;
  background: #000;
  border-radius: 2px;
  position: absolute;
  opacity: 1;
}

.burger:before, .burger:after {
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  -webkit-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  content: "";
}

.burger:before {
  top: 4px;
}

.burger span {
  top: 15px;
}

.burger:after {
  top: 26px;
}

/* Hover */
.burger:hover:before {
  top: 7px;
}

.burger:hover:after {
  top: 23px;
}

/* Click */
.burger.active span {
  opacity: 0;
}

.burger.active:before, .burger.active:after {
  top: 40%;
}

.burger.active:before {
  transform: rotate(45deg);
}

.burger.active:after {
  transform: rotate(-45deg);
}

.burger:focus {
  outline: none;
}

.socials {
  font-size: 1.5rem;
}
</style>
