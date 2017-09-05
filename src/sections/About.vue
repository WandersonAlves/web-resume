<style scoped lang="sass">
.separator
  margin-left: 200px
  margin-right: 200px

h4
  font-size: 1.4em
  letter-spacing: 0.03em
  line-height: 1.2em

h4::first-letter 
  color: red
  font-size: 1.8em

@media(max-width: 959px)
  h4
    font-size: 1.3em

  .separator
    margin-bottom: 30px
    margin-left: 20px
    margin-right: 20px

</style>
<template>
  <section>
    <div class="container bg-white">
      <div class="container-padding">
        <div class="flex flex-dir-col flex-content-center flex-align-items-center">
          <div class="flex-dir-col separator">
            <img src="/src/assets/skills.png">
            <p class="black margin-top-20 text-center open-sans font-weight-500 font-size-12">{{'aboutJavascript' | translate}}</p>
          </div>
          <span class="flex-separator"></span>
          <div class="flex-dir-col separator">
            <h4 class="black boldier text-justify">
              {{ 'about1H4' | translate}}<br/></br/>
              {{ 'about2H4' | translate}}<br/>
              {{ 'about3H4' | translate}}<br/>
              {{ 'about4H4' | translate}}<br/>
              {{ 'about5H4' | translate}}<br/><br/>
              {{ 'about6H4' | translate}}<br/><br/>
              {{ 'about7H4' | translate}}<br/>
              {{ 'about8H4' | translate}}
            </h4>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>
<script>
  import Arrow from '../components/Arrow.vue';
  import Mixin from '../mixins/RouterNavigation.mixin';

  export default {
    name: 'About',
    mixins: [Mixin],
    components: {
      Arrow
    },
    mounted() {
      // this.$bus.$emit('route-text', 'aboutHeader', 'bg-white');
    },
    beforeDestroy() {
      this.$bus.$emit('route-text', '', false);
    }
  }
</script>