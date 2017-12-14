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
                        <portfolio-item class="flex-50 margin-10" v-for="(item, index) in portfolioItens" :portfolioItem="item" :key='index'></portfolio-item>
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
                name: 'Santander Lojistica (Web+Mobile)',
                title1: 'Application that helps clients and merchants to simulate and finish floatation on Santander platform',
                title2: 'Fev/2017 to Jul/2017'
            },
            {
                name: 'BeerCalc App! (Web+Mobile+PWA)',
                title1: 'PoC of CI/CD process and PWA application using AngularJS and NodeJS.',
                title2: 'Ago/2016 - Fev/2017'
            },
            {
                name: 'Philips Healthcare Tasy (Web)',
                title1: 'Complete and integrated hospital management software pioneer in Brazil, Tasy is a solution for hospitals, clinics, managed care plans, laboratories and diagnostic imaging centers. Developed in AngularJS using requireJS as dependency control.',
                title2: 'Fev/2017 to Jul/2017'
            },
            {
                name: 'TIM Network (Web)',
                title1: 'Development of web systems for management and maintenance of telephone lines and financial area.',
                title2: 'Fev/2017 to Jul/2017'
            },
            ]
        }
    }
}
</script>