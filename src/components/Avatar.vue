<style scoped>
.avatar {
  border-radius: 50%;
  width: 250px;
  height: 250px;
}

.line-height {
  line-height: 11px;
}

.boldier {
  font-weight: 400;
}

.margin {
  margin-top: 7%;
}
.white {
  color: white;
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
@media (max-width: 1024px)
{
  .responsive-text {
    text-align: center;
    line-height: 25px;
  }
  .center-content {
    margin-top: 10vh;
  }
}
</style>

<template>
<div class="row center-content">
  <div class="col-md-3">
    <img src="/src/assets/avatar.jpg" class="avatar center-block" />
  </div>
  <div class="col-md-6 col-xs-12 line-height margin responsive-text">
    <p class="boldier white">Hi, Wanderson Alves over here!</p>
    <p class="boldier white">I’m a Front-End Developer & UI Designer</p>
    <p class="boldier white">Currently living in Recife, Brazil</p>
      <a href="https://www.linkedin.com/in/wanderson-alves-575279a1/" target='_blank'><i class="fa fa-linkedin-square white icon-size" aria-hidden="true"></i></a>
      <a href="https://github.com/WandersonAlves" target='_blank'><i class="fa fa-github white icon-size" aria-hidden="true"></i></a>
      <a href="https://twitter.com/Popoto_" target='_blank'><i class="fa fa-twitter white icon-size" aria-hidden="true"></i></a>
      <a href="mailto:wandersonalvesferreira2012@gmail.com"><i class="fa fa-envelope white icon-fix icon-size" aria-hidden="true"></i></a>
  </div>
</div>
</template>

<script>
export default {
  name: 'Avatar'
}
</script>
