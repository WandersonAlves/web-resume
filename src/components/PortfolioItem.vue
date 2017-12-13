<style lang="sass" scoped>
.portfolio-img 
    width: 220px
    height: 220px

.line-height-1
    line-height: 1em
.private-text-center

@media(max-width: 959px)
    .private-text-center
        text-align: center
</style>
<template>
<div class="flex flex-dir-row flex-align-items-center">    
    <img class="portfolio-img" :src="imageSource"/>
    <div class="flex flex-dir-col">
        <h3 class="private-text-center flex-33 white montserrat font-weight-400 line-height-1">{{portfolioItem.name}}</h3>
        <h4 class="private-text-center flex-33 white quicksand font-weight-300 word-wrap line-height-1">{{portfolioItem.title1}}</h4>
        <h4 class="private-text-center flex-33 white quicksand font-weight-300 line-height-1">{{portfolioItem.title2}}</h4>
    </div>
</div>
  
</template>
<script>
export default {
  name: "PortfolioItem",
  props: {
    portfolioItem: {
      type: Object
    }
  },
  computed: {
    imageSource() {
      return `/src/assets/portfolio/${this.portfolioItem.img}`;
    },
    title1Trunc() {
      let str = this.portfolioItem.title1;
      if (str.length > 45) {
        return str.substring(0, 45 - "...".length) + "...";
      } else {
        return str;
      }
    }
  }
};
</script>


