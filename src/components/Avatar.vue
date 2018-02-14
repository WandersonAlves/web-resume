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
  </div>
</div>
</template>

<script>
export default {
  name: 'Avatar'
}
</script>
