<style scoped lang="sass">

</style>
<template>
  <section>
    <div class="container bg-light-pink container-padding-top container-padding-bottom">
      <div class="container-padding">
        <div class="flex flex-dir-col flex-content-center flex-align-items-center">
          <div>
            <h1 class="montserrat heading-margin light-pink heading-bg">- {{'skillsHeader' | translate | uppercase}} -</h1>
          </div>
          <div class="margin-top-20 flex flex-dir-row flex-flow-wrap-row">
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="95" skill="JavaScript" description="Closures, functional programming, Object.assign({}, obj)"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="95" skill="VueJS" description="Vuex, vue-router, mixins..."></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="89" skill="Git" description="Rebase, cherry-pick, merges..."></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="80" skill="Jenkins" description="Pipelines, Groovy Files"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="75" skill="HTML 5" description="Sites pessoais, corporativos, etc.."></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="75" skill="Photoshop" description="Prototipos, tratamento e manipulação de imagens"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="63" skill="CSS3" description="Clip-path, borders, customizações"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="55" skill="NodeJS" description='"É tudo JavaScript mesmo..."'></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="50" skill="Angular 4" description="TypeScript"></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#514444" :percentage="10" skill="React" description="Learning..."></circle-progress>
            <circle-progress class="flex-33" direction="mid" color="#ff9c00" :percentage="100" skill="Beber" description="Cerveja, Vodka, Vinho..."></circle-progress>
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
    }
  }
</script>