<style scoped lang="scss">

.icon-size {
  font-size: 8em;
  padding-left: 5px;
  padding-right: 5px;
  @media (max-width: 768px) {
    font-size: 6em;
  }
}

.icon-fix {
  font-size: 7.5em;
  @media (max-width: 768px) {
    font-size: 5.5em;
  }
}

.title-font-size {
  font-size: 16px;
}

.separator {
  padding: 20px;
}

.gradient-background {
  background: linear-gradient(-90deg, #9d12c2, #a122b6);
  background-size: 400% 400%;

  animation: GradientAnimation 25s ease infinite;
}
@keyframes GradientAnimation { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
</style>
<template>
  <section>
    <div class="container gradient-background container-padding-top container-padding-bottom">
      <div class="container-padding">
        <div class="flex flex-dir-col flex-content-center flex-align-items-center">
          <div>
            <h1 style="color: #9d12c2" class="montserrat heading-margin bg-white heading-bg">{{'contactHeader' | translate | uppercase}}</h1>
          </div>
          <div>
            <h1 class="montserrat white heading-margin text-center">{{'contactText' | translate}}</h1>
          </div>
          <div class="margin-top-20 flex flex-dir-row flex-flow-wrap-row flex-align-items-center">
            <div class="flex flex-dir-col flex-align-items-center separator flex-33">
              <a href="https://www.linkedin.com/in/wanderson-alves-575279a1/" target='noopener'><i class="fab fa-linkedin white icon-size" aria-hidden="true"></i></a>
              <p class="boldier white open-sans title-font-size margin-reset">LinkedIn</p>
            </div>
            <div class="flex flex-dir-col flex-align-items-center separator flex-33">
              <a href="mailto:wandersonalvesferreira2012@gmail.com"><i class="fas fa-envelope white icon-fix icon-size" aria-hidden="true"></i></a>
              <p class="boldier white open-sans title-font-size margin-reset">E-Mail</p>
            </div>
            <div class="flex flex-dir-col flex-align-items-center separator flex-33">
              <a href="https://github.com/WandersonAlves" target='noopener'><i class="fab fa-github-alt white icon-size" aria-hidden="true"></i></a>
              <p class="boldier white open-sans title-font-size margin-reset">Github</p>
            </div>
            <div class="flex flex-dir-col flex-align-items-center separator flex-33">
              <a href="https://t.me/popoto900" target='noopener'><i class="fab fa-telegram-plane white icon-fix icon-size" aria-hidden="true"></i></a>
              <p class="boldier white open-sans title-font-size margin-reset">Telegram</p>
            </div>
            <div class="flex flex-dir-col flex-align-items-center separator flex-33">
              <a href="https://twitter.com/Popoto_" target='noopener'><i class="fab fa-twitter white icon-size" aria-hidden="true"></i></a>
              <p class="boldier white open-sans title-font-size margin-reset">Twitter</p>
            </div>            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

  export default {
    name: 'Contacts',
  }
</script>