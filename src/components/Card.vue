<style lang="sass" scoped>
.card-container
    max-width: 240px
    max-height: 450px
    border-radius: 10px 10px 10px 10px
    border: 0px solid #000000
    background-color: #f5f5f5

.card-title
    color: #727c95
    letter-spacing: 12px
.card-type
    color: #727c95

</style>
<template>
<div class="card-container white">
    <div class="flex flex-dir-col flex-align-items-center">
        <span class="card-title">BEERCALC</span>
        <img class="card-picture"/>
        <span class="card-type boldier">WEB</span>
        <button class="card-button">+</button>
    </div>
</div>
  
</template>
<script>
export default {
  name: 'Card',
  props: {  
    bannerImg: {
        type: String,
    },
    cardText: {
        type: String,
    }
  }
}
</script>


