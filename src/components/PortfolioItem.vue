<style lang="sass" scoped>
=square-pseudo()
  border-radius: 50%
  max-width: 10px
  max-height: 10px
  min-height: 10px
  min-width: 10px
  content: " "
  background-color: white
  position: relative

.line-height-1
    line-height: 1em

.square
  border-radius: 20px
  max-width: 128px
  max-height: 128px
  min-height: 128px
  min-width: 128px
  margin: 10px

.square::after
  +square-pseudo()
  top: -46px
  left: -77px

.square::before
  +square-pseudo()
  top: 46px
  left: 77px

.link
  cursor: pointer

.text-spacing
  margin: 4px

@media(max-width: 959px)
    .private-text-center
        text-align: center
    .square
        flex-direction: row !important
</style>
<template>
<div class="flex flex-dir-row flex-align-items-center">    
    <div class="square flex flex-dir-row flex-align-items-center flex-content-center link" :style="{'background-color': randomColor}">
      <h2 class="text-center white montserrat font-weight-600 margin-reset font-size-6">{{initialLetter}}</h2>
    </div>
    <div class="flex flex-dir-col">
        <h3 class="text-spacing private-text-center flex-33 white montserrat margin-reset font-weight-400 line-height-1">{{portfolioItem.name}}</h3>
        <p class="italic text-spacing private-text-center flex-33 white quicksand margin-reset font-weight-300 word-wrap line-height-1">{{portfolioItem.company}}</p>
        <p class="text-spacing private-text-center flex-33 white quicksand margin-reset font-weight-300 word-wrap line-height-1">{{portfolioItem.title1}}</p>
        <p class="text-spacing private-text-center flex-33 white quicksand margin-reset font-weight-300 line-height-1">{{portfolioItem.title2}}</p>
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
    title1Trunc() {
      let str = this.portfolioItem.title1;
      if (str.length > 45) {
        return str.substring(0, 45 - "...".length) + "...";
      } else {
        return str;
      }
    },
    initialLetter() {
      if (this.portfolioItem.overrideLetter) {
        return this.portfolioItem.overrideLetter;
      }
      return this.portfolioItem.name.substring(0,1).toUpperCase();
    },
    randomColor() {
      const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      const randomByte = () => randomNumber(0, 255)
      const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2)
      const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`
      let randomColor = randomCssRgba();
      return randomColor;
    }
  }
};
</script>


