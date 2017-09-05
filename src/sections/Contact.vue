<style scoped lang="sass">
.avatar 
    width: 200px
    height: 200px
    border-radius: 50%;

.line-height
    line-height: 1em

.container
    padding-left: 10%
    padding-right: 10%

@media(max-width: 959px)
    .flex-dir-row
        flex-direction: row !important
</style>
<template>
    <section>
        <div class="container bg-blue container-padding-top container-viewport">
            <div class="height flex flex-dir-col flex-33">
                <div class="flex-dir-col text-center line-height">
                    <img src="/src/assets/avatar.jpg" class="avatar center-block" alt="Wanderson Alves"/>
                    <p class="quicksand lightier white">"Two possibilities exist: either we area alone in the Universe or we are not.</p>
                    <p class="quicksand lightier white">Both area equally terrifying." - Athur C. Clarke</p>
                    <p class="quicksand lightier white">And we're only 245m away :3 </p>
                </div>
                <span class="flex-10"></span>
                <div class="flex flex-dir-row flex-33">
                    <div class="flex flex-dir-col">
                        <i class="fa fa-phone white font-size-2" aria-hidden="true"></i> 
                        <i class="fa fa-envelope white font-size-2" aria-hidden="true"></i>
                        <i class="fa fa-linkedin white font-size-2" aria-hidden="true"></i> 
                    </div>
                    <div class="flex flex-dir-col flex-92">
                        <p class="quicksand lightier white">+55 81 99828-7685</p>                                            
                        <p class="quicksand lightier white"> wandersonalvesferreira2012@gmail.com</p>
                        <p class="quicksand lightier white">linkedin.com/wandersonalves</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Arrow from '../components/Arrow.vue';
export default {
    name: 'Contact',
    components: {
        Arrow
    },
    mounted() {
        //this.$bus.$emit('change-animation');
        // this.$bus.$emit('route-text', 'contactHeader', 'bg-blue');
    },
    beforeDestroy() {
        this.$bus.$emit('route-text', '', false);
    }
}
</script>