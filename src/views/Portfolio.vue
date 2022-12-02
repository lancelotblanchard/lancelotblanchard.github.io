<template>
  <section class="portfolio section">
    <div class="container">
      <div class="row mb-5 align-items-center">
        <div class="col-6 mb-4 mb-lg-0 text-left" data-aos="fade-up">
          <h2>My projects</h2>
        </div>
        <div class="col-md-12 col-lg-6 text-left text-lg-right"
             data-aos="fade-up" data-aos-delay="100">
          <div id="filters" class="filters">
            <a href="#" @click="filter('*')"
               v-bind:class="{ active : filterOption === '*' }">All</a>
            <a href="#" @click="filter('AI')"
               v-bind:class="{ active : filterOption === 'AI' }">AI</a>
            <a href="#" @click="filter('SoftEng')"
               v-bind:class="{ active : filterOption === 'SoftEng' }">SoftEng</a>
            <a href="#" @click="filter('Data')"
               v-bind:class="{ active : filterOption === 'Data' }">Data</a>
            <a href="#" @click="filter('Music')"
               v-bind:class="{ active : filterOption === 'Music' }">Music</a>
          </div>
        </div>
      </div>
      <isotope ref="portfolioGrid" id="portfolio-grid" class="row no-gutter" data-aos="fade-up"
               data-aos-delay="200" :options="options" @filter="filterOption=arguments[0]"
               :list="list" v-images-loaded:on.progress="layout">
        <div v-for="(project, index) in list" class="col-sm-6 col-md-4 col-lg-4 mb-4" :key="index"
             @click="scrollAtTop">
          <router-link :to="`/projects/${project.id}`" class="item-wrap fancybox">
            <div class="work-info px-1">
              <h2>{{ project.name }}</h2>
              <span>{{ project.types.join(' | ') }}</span>
              <br />
              <small><em>{{ project.date }}</em></small>
            </div>
            <img class="img-fluid" :src="getImgUrl(project.imgUrl)">
          </router-link>
        </div>
      </isotope>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Project from '@/classes/project';
import projectList from '@/content/project.list';

/* eslint-disable @typescript-eslint/no-var-requires */
const isotope = require('vueisotope');
const imagesLoaded = require('vue-images-loaded');

@Component({
  components: {
    isotope,
  },
  directives: {
    imagesLoaded,
  },
})
export default class Portfolio extends Vue {
  private list = projectList;

  private filterOption = '*';

  private options = {
    isFitWidth: true,
    getFilterData: {
      '*': () => true,
      SoftEng: (project: Project) => project.types.includes('SoftEng'),
      Data: (project: Project) => project.types.includes('Data'),
      AI: (project: Project) => project.types.includes('AI'),
      Music: (project: Project) => project.types.includes('Music'),
    },
  };

  private filter(key: string) {
    (this.$refs.portfolioGrid as typeof isotope).filter(key);
  }

  private layout() {
    (this.$refs.portfolioGrid as typeof isotope).layout('masonry');
  }

  private getImgUrl(fileName: string) {
    const images = require.context('@/assets/images/', true);
    return images(`./${fileName}`);
  }

  private scrollAtTop() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.filters a {
  color: #000;
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}

.filters a:hover, .filters a:focus, .filters a:active {
  text-decoration: none;
}

.filters a:hover:before {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  height: 1px;
  background-color: #000;
}

.filters a.active {
  color: #000;
}

.filters a.active:before {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  height: 1px;
  background-color: #000;
}

.item {
  border: none;
  margin-bottom: 30px;
}

.item .item-wrap {
  display: block;
  position: relative;
  overflow: hidden;
}

.item .item-wrap:after {
  z-index: 2;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: .3s all ease-in-out;
}

.item .item-wrap img {
  transition: .3s transform ease;
  transform: scale(1);
}

.item .item-wrap > .work-info {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  z-index: 3;
  transform: translateY(-50%);
  color: #fff;
  opacity: 0;
  visibility: hidden;
  margin-top: 20px;
  transition: .3s all ease;
}

.item .item-wrap > .work-info h3 {
  font-size: 20px;
  margin-bottom: 0;
}

.item .item-wrap > .work-info span {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: .2rem;
}

.item .item-wrap:hover {
  text-decoration: none;
  cursor: pointer;
}

.item .item-wrap:hover img {
  transform: scale(1.05);
}

.item .item-wrap:hover:after {
  opacity: 1;
  visibility: visible;
}

.item .item-wrap:hover .work-info {
  margin-top: 0px;
  opacity: 1;
  visibility: visible;
}
</style>
