<style scoped lang="sass">
.separator
  margin-top: 30px
  margin-left: 200px
  margin-right: 200px

.separator-2
  margin-left: 30px
  margin-right: 30px

.ball
  margin-top: 180px
  width: 92px
  height: 92px

h4
  font-size: 1.4em
  letter-spacing: 0.03em
  line-height: 1.2em

h4::first-letter 
  color: #D33575
  font-size: 1.8em

@media(max-width: 959px)
  h4
    font-size: 1.3em

  .separator
    margin-top: 30px
    margin-bottom: 30px
    margin-left: 20px
    margin-right: 20px
  
  .separator-2
    margin-top: 30px
  
  .sm-text-center
    text-align: center;

</style>
<template>
  <section>
    <div class="container bg-white container-padding-top container-padding-bottom">
      <div class="container-padding">
        <div class="flex flex-dir-col flex-content-center flex-align-items-center">
          <div>
            <h1 class="montserrat heading-margin white bg-black heading-bg">{{'aboutHeader' | translate | uppercase}}</h1>
          </div>
          <div class="flex-dir-row flex">
            <div class="flex-dir-col">
              <img class="fake-responsive-img" src="/src/assets/me.png">
              <!-- <p class="black margin-top-20 text-center open-sans font-weight-500 font-size-12">{{'aboutJavascript' | translate}}</p> -->
            </div>
            <span class="separator-2"></span>
            <div class="flex-align-self-center sm-text-center">
              <h3 class="pink montserrat line-height-1">NOME COMPLETO</h3>
              <p class="black font-weight-300 open-sans font-size-11">Wanderson Alves Ferreira</p>
              <h3 class="pink montserrat line-height-1 padding-top-20">E-MAIL</h3>
              <p class="black font-weight-300 open-sans font-size-11">wandersonalvesferreira2012@gmail.com</p>
              <h3 class="pink montserrat line-height-1 padding-top-20">HOBBIES</h3>
              <p class="black font-weight-300 open-sans font-size-11">{{'hobbies' | translate}}</p>
            </div>
          </div>
          <div class="flex-dir-col separator">
            <h4 class="black text-justify font-weight-300 open-sans">
              {{'about1H4' | translate}} <span class="font-weight-500">{{'name' | translate}}</span>{{'about2H4' | translate}} <br/>
              {{'about3H4' | translate}} <span class="font-weight-500">{{'about4H4' | translate}} </span> {{'about5H4' | translate}}  <span class="font-weight-500">{{'about6H4' | translate}} </span><br/>
              {{'about7H4' | translate}} <br/>
              {{'about8H4' | translate}} 
            </h4>
          </div>
          <div>
            <img class="ball" src="/src/assets/pc.svg"/>
          </div>
        </div>
      </div>
    </div>    
  </section>
</template>
<script>

  export default {
    name: 'About',
  }
</script>