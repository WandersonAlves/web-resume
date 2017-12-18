<style scoped>
.avatar {
  width: 250px;
  height: 250px;
  background: linear-gradient(270deg, #f4376d, #66349d);
  background-size: 400% 400%;
  border-radius: 50%;
  padding: 8px;
  animation: Gradient 25s ease infinite;
}

@keyframes Gradient {
    0%{background-position:0% 4%}
    50%{background-position:100% 97%}
    100%{background-position:0% 4%}
}

.line-height {
  line-height: 11px;
}

.margin {
  margin-top: 7%;
}

.center-content {
  margin-top: 25vh;
}

.icon-size {
  font-size: 2.7em;
  padding-left: 5px;
  padding-right: 5px;
}

.icon-fix {
  font-size: 2.5em;
}

.container p {
  font-size: 20px;
  letter-spacing: 0.01em;
}

.separator {
  margin: 0px 10px 0px 10px;
}

@media (max-width: 1024px) {
  .responsive-text {
    text-align: center;
    line-height: 22px;
  }
  .center-content {
    margin-top: 10vh;
  }
  .separator {
    margin-top: 10px;
  }
}

@media (max-width: 768px) {
  .avatar {
    width: 200px;
    height: 200px;
  }
  .jumbotron p {
    font-size: 1.2em;
  }
}

</style>

<template>
<div class="height flex flex-dir-row flex-align-items-center flex-content-center fade-in">
  <div class="flex-dir-row">
      <img src="/src/assets/avatar.jpg" class="avatar center-block" alt="Wanderson Alves"/>
  </div>
  <span class="separator"></span>
  <div class="flex-dir-col line-height responsive-text">
    <p class="boldier quicksand white">{{ 'homeFirstP' | translate }}</p>
    <p class="boldier quicksand white">{{ 'homeSecondP' | translate }}</p>
    <p class="boldier quicksand white">{{ 'homeThirdP' | translate }}</p>
    <a href="https://www.linkedin.com/in/wanderson-alves-575279a1/" target='noopener'><i class="fa fa-linkedin-square white icon-size" aria-hidden="true"></i></a>
    <a href="https://github.com/WandersonAlves" target='noopener'><i class="fa fa-github white icon-size" aria-hidden="true"></i></a>
    <a href="https://t.me/popoto900" target='noopener'><i class="fa fa-telegram white icon-fix icon-size" aria-hidden="true"></i></a>
    <a href="https://twitter.com/Popoto_" target='noopener'><i class="fa fa-twitter white icon-size" aria-hidden="true"></i></a>
    <a href="mailto:wandersonalvesferreira2012@gmail.com"><i class="fa fa-envelope white icon-fix icon-size" aria-hidden="true"></i></a>
  </div>
</div>
</template>

<script>
export default {
  name: 'Avatar'
}
</script>
