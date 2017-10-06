<style scoped lang="sass">

</style>
<template>
    <section>
        <div class="container bg-pink container-padding-top container-padding-bottom">
            <div class="container-padding">
                <div class="flex flex-dir-col flex-content-center flex-align-items-center">
                    <div>
                        <h1 class="montserrat heading-margin pink bg-white heading-bg">{{'portfolioHeader' | translate | uppercase}}</h1>
                    </div>
                </div>
                <card></card>
                <card></card>
                <card></card>
            </div>
        </div>
    </section>
</template>
<script>
import Card from '../components/Card.vue';
export default {
    name: 'Portfolio',
    components: {
        Card
    }
}
</script>