<style scoped lang="sass">
.separator
  margin-left: 10px
  margin-right: 10px

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

</style>
<template>
  <section>
    <div class="container">
      <arrow direction="up" color="black"></arrow>
      <div class=" container-padding-top container-padding">
        <div class="flex flex-dir-row flex-content-center flex-align-items-center">
          <div class="flex-dir-col separator">
            <img src="/src/assets/skills.png">
            <p class="margin-top-20 text-center open-sans font-weight-500 font-size-12">The "Javascripty" sexy experience</p>
          </div>
          <span class="flex-separator"></span>
          <div class="flex-dir-col separator">
            <h4 class="boldier text-justify">
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
    <arrow direction="down" color="black"></arrow>
  </section>
</template>
<script>
  import Arrow from '../components/Arrow.vue';
  export default {
    name: 'About',
    components: {
      Arrow
    },
    mounted() {
      //this.$bus.$emit('change-animation');
      this.$bus.$emit('route-text', 'ABOUT', 'bg-white');
    },
    beforeDestroy() {
      this.$bus.$emit('route-text', '', false);
    },
    methods: {
       nextPage() {
        this.$router.push({ name: 'skills' });
      }
    }
  }
</script>