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
</style>
<template>
  <section>
    <div class="container bg-grey container-padding-top container-padding-bottom">
      <div class="container-padding">
        <div class="flex flex-dir-col flex-content-center flex-align-items-center">
          <div>
            <h1 class="montserrat heading-margin grey-2 bg-grey-2 heading-bg">{{'contactHeader' | translate | uppercase}}</h1>
          </div>
          <div class="margin-top-20 flex flex-dir-row flex-flow-wrap-row flex-align-items-center">
            <div class="flex flex-dir-col flex-align-items-center separator flex-50">
              <a href="https://www.linkedin.com/in/wanderson-alves-575279a1/" target='noopener'><i class="fab fa-linkedin grey icon-size" aria-hidden="true"></i></a>
              <p class="boldier grey open-sans title-font-size margin-reset">LinkedIn</p>
            </div>
            <div class="flex flex-dir-col flex-align-items-center separator flex-50">
              <a href="https://github.com/WandersonAlves" target='noopener'><i class="fab fa-github-alt grey icon-size" aria-hidden="true"></i></a>
              <p class="boldier grey open-sans title-font-size margin-reset">Github</p>
            </div>
            <div class="flex flex-dir-col flex-align-items-center separator flex-50">
              <a href="https://t.me/popoto900" target='noopener'><i class="fab fa-telegram-plane grey icon-fix icon-size" aria-hidden="true"></i></a>
              <p class="boldier grey open-sans title-font-size margin-reset">Telegram</p>
            </div>
            <div class="flex flex-dir-col flex-align-items-center separator flex-50">
              <a href="https://twitter.com/Popoto_" target='noopener'><i class="fab fa-twitter grey icon-size" aria-hidden="true"></i></a>
              <p class="boldier grey open-sans title-font-size margin-reset">Twitter</p>
            </div>
            <div class="flex flex-dir-col flex-align-items-center separator flex-50">
              <a href="mailto:wandersonalvesferreira2012@gmail.com"><i class="fas fa-envelope grey icon-fix icon-size" aria-hidden="true"></i></a>
              <p class="boldier grey open-sans title-font-size margin-reset">E-Mail</p>
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