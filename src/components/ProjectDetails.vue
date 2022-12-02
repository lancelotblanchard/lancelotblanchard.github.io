<template>
  <section class="project-details section text-left">
    <div class="container">
      <div class="row mb-4 align-items-center">
        <div class="col-md-12" data-aos="fade-up">
          <h2><a href="#" @click="$router.go(-1)">&#8249;</a> {{ project.name }}</h2>
          <p>{{ project.subtitle }}</p>
        </div>
      </div>
    </div>

    <div class="site-section pb-0">
      <div class="container">
        <div class="row align-items-stretch">
          <div class="col-12">
            <div class="image-wrapper float-left mb-3 pr-5 pb-5 pb-md-3" data-aos="fade-up">
              <img ref="thumbnail" :src="getImgUrl(project.imgUrl)" alt="Image"
                   class="img-fluid thumbnail">
            </div>
            <div ref="content" class="single-post-content-wrapper"
                 data-aos="fade-up" data-aos-delay="100">
              <h3 class="h3">{{ project.name }}</h3>
              <p class="mb-2">
                <span class="text-muted">{{  project.types.join(' | ') | capitalise }}</span>
                <br />
                <small class="text-muted"><em>{{ project.date }}</em></small>
              </p>

              <div class="mb-5" v-html="toHtml(project.content)"></div>
              <div v-if="!buttonBelow">
                <p v-if="project.href">
                  <a :href="project.href[1]" target="_blank" class="readmore">
                    {{ project.href[0] }}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 text-center" v-if="buttonBelow"
               data-aos="fade-up" data-aos-delay="100">
            <p v-if="project.href">
              <a :href="project.href[1]" target="_blank" class="readmore">
                {{ project.href[0] }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import marked from 'marked';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Project from '@/classes/project';

@Component
export default class ProjectDetails extends Vue {
  @Prop({ required: true }) readonly project!: Project;

  private buttonBelow = false;

  private getImgUrl(fileName: string) {
    const images = require.context('@/assets/images/', true);
    return images(`./${fileName}`);
  }

  private toHtml(markdown: string) {
    return marked(markdown);
  }

  private computeButtonPosition() {
    this.buttonBelow = ((this.$refs.content as Element).clientHeight)
      >= ((this.$refs.thumbnail as Element).clientHeight);
  }

  mounted() {
    document.title = `Lancelot Blanchard | ${this.project.name}`;
    this.computeButtonPosition();
    window.addEventListener('resize', this.computeButtonPosition);
  }
}
</script>
