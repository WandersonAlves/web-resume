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
                    <div class="flex flex-dir-row flex-wrap">
                        <portfolio-item class="flex-50" v-for="(item, index) in portfolioItens" :portfolioItem="item" :key='index'></portfolio-item>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import PortfolioItem from '../components/PortfolioItem.vue';
export default {
    name: 'Portfolio',
    components: {
        PortfolioItem
    },
    data() {
        return {
            portfolioItens: [{
                img: 'santander-lojistica.png',
                name: 'Santander Lojistica',
                title1: 'Application that helps clients and merchants to simulate and finish floatation on Santander platform',
                title2: 'Fev/2017 to Jul/2017'
            },
            {
                img: 'beercalc.png',
                name: 'BeerCalc App!',
                title1: 'PoC of CI/CD process and PWA application using AngularJS and NodeJS.',
                title2: 'Ago/2016 - Fev/2017'
            },
            {
                img: 'santander-lojistica.png',
                name: 'Santander Lojistica',
                title1: 'Application that helps clients and merchants to simulate and finish floatation on Santander platform',
                title2: 'Fev/2017 to Jul/2017'
            },
            ]
        }
    }
}
</script>