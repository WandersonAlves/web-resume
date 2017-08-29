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
            Graduated in Computer Science at UNICAP (Universidade Catolica de Pernambuco).<br/><br/>
            Professional and personal experience in web development (Client and Server side in Javascript).<br/>
            Professional experience with corporative systems development.<br/>
            Experience in prototyping middle and high fidelity websites.<br/>
            Experience in DevOps pipelines (automation, unit/e2e tests, code coverage, Jenkins, open source CI/CD tools).<br/>

            Wide experience in front-end development focused on Angular 1.x/Angular 4/VueJS and high knowledge in JavaScript development, becoming reference in projects that i work. <br/><br/>

            Also, i had worked with Adobe Flex and ETL tools in the past in Accenture.<br/>
            Passion and love for UI/UX Design!!!
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