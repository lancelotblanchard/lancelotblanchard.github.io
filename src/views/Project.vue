<template>
  <div class="project">
    <ProjectDetails v-if="project" :project="project" />
    <h1 v-if="!project">Could not find this project.</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ProjectDetails from '@/components/ProjectDetails.vue';
import projectList from '@/content/project.list';

@Component({
  components: {
    ProjectDetails,
  },
})
export default class Project extends Vue {
  private project = this.getProject();

  @Watch('$route.params.id')
  onPropertyChanged() {
    this.project = this.getProject();
  }

  private getProject() {
    return projectList.find((project) => project.id === this.$route.params.id);
  }
}
</script>
