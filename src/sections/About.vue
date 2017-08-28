<style scoped lang="sass">
.separator
  margin-left: 10px
  margin-right: 10px

h4
  font-size: 1.5em

h4::first-letter 
  color: red
  font-size: 1.8em

@media(max-width: 959px)
  h4
    font-size: 1.3em

</style>
<template>
  <section>
    <div class="container container-padding-top container-padding">
      <div class="flex flex-dir-row flex-content-center flex-align-items-center">
        <div class="flex-dir-col separator">
          <img src="/src/assets/skills.png">
          <p class="margin-top-20 text-center open-sans font-weight-500 font-size-12">The "Javascripty" sexy experience</p>
        </div>
        <span class="flex-separator"></span>
        <div class="flex-dir-col separator">
          <h4 class="boldier text-justify open-sans">
            Bacon ipsum dolor amet pork chop pig filet mignon, kielbasa pork loin prosciutto pancetta doner ground round tail. Pancetta venison cupim ribeye shoulder meatball t-bone pork belly. Landjaeger boudin shoulder, bacon pork chop jowl ribeye chuck tri-tip corned beef tongue. Leberkas spare ribs t-bone andouille, filet mignon tri-tip pork chop shank sausage swine short loin. Ham swine picanha kielbasa tail pork loin doner, drumstick landjaeger kevin capicola strip steak turducken burgdoggen corned beef. Ham hock kevin meatloaf pork ribeye tongue. Salami meatball drumstick swine bacon shank, venison sirloin ham hock meatloaf ribeye jowl brisket.
          </h4>
          <h4 class="boldier text-justify open-sans">
            Picanha pork belly turkey, doner leberkas flank spare ribs biltong. Kielbasa spare ribs tri-tip strip steak meatloaf. Tongue jowl strip steak salami porchetta rump. Tongue ribeye turducken t-bone, kevin strip steak flank brisket doner pork loin shank tail. Capicola bacon prosciutto, corned beef ground round burgdoggen tail short ribs shank pork loin t-bone sirloin. Flank prosciutto ribeye, ham hock picanha chicken boudin pork burgdoggen jowl pork loin alcatra brisket ham venison.
          </h4>
        </div>
      </div>
    </div>
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
      this.$bus.$emit('route-text', 'ABOUT', true);
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