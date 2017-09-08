<style scoped lang="sass">

</style>
<template>
  <section>
    <div class="container bg-light-pink container-padding-top container-padding-bottom">
      <div class="container-padding">
        <div class="flex flex-dir-col flex-content-center flex-align-items-center">
          <div>
            <h1 class="montserrat heading-margin light-pink heading-bg">{{'skillsHeader' | translate | uppercase}}</h1>
          </div>
          <div class="margin-top-20 flex flex-dir-row flex-flow-wrap-row">
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="95" skill="JavaScript" :description="skillsJavascript"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="95" skill="VueJS" description="Vuex, vue-router, mixins..."></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="89" skill="Git" description="Rebase, cherry-pick, merges..."></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="80" skill="Jenkins" description="Pipelines, Groovy Files"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="75" skill="HTML 5" :description="skillsHtml"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="75" skill="Photoshop" :description="skillsPhotoshop"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="63" skill="CSS3" description="Clip-path, borders, media-queries"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="55" skill="NodeJS" :description="skillsNode"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="50" skill="Angular 4" description="TypeScript"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="10" skill="React" :description="skillsReact"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#ff9c00" :percentage="100" :skill="skillBeerTitle" :description="skillsBeer"></circle-progress>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import CircleProgress from '../components/CircleProgress.vue';

  export default {
    name: 'Skills',
    components: {
      CircleProgress
    },
    computed: {
      skillsJavascript() {
        return this.$t('skillJavascript');
      },
      skillsHtml() {
        return this.$t('skillsHtml');
      },
      skillsPhotoshop() {
        return this.$t('skillsPhotoshop');
      },
      skillsNode() {
        return this.$t('skillsNode');
      },
      skillsReact() {
        return this.$t('skillsReact');
      },
      skillsBeer() {
        return this.$t('skillsBeer');
      },
      skillBeerTitle() {
        return this.$t('skillsBeerTitle');
      }
    }
  }
</script>