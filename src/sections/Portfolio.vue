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
                        <portfolio-item class="flex-33 margin-10" v-for="(item, index) in portfolioItens" :portfolioItem="item" :key='index'></portfolio-item>
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
            portfolioItens: [
            {
                name: 'TIM Network (Web)',
                title1: this.$t('timText'),
                title2: this.$t('timDateRange')
            },
            {
                name: 'Galindo Serviços Eletricos(Web)',
                title1: this.$t('galindoText'),
                title2: this.$t('galindoDateRange')
            },
            {
                name: 'Philips Healthcare Tasy (Web)',
                title1: this.$t('philipsText'),
                title2: this.$t('philipsDateRange')
            },                     
            {
                name: 'Porto Seguro (Web)',
                title1: this.$t('portoText'),
                title2: this.$t('portoDateRange')
            },            
            {
                name: 'JBV Tecnologia Elétrica (Web)',
                title1: this.$t('jbvText'),
                title2: this.$t('jbvDateRange')
            },           
            {
                name: 'BeerCalc App! (Web+Mobile+PWA)',
                title1: this.$t('beercalcText'),
                title2: this.$t('beercalcDateRange')
            },
            {
                name: 'Santander Lojistica (Web+Mobile)',
                title1: this.$t('santanderText'),
                title2: this.$t('santanderDateRange')
            },
            {
                name: 'this (Web)',
                title1: this.$t('thisText'),
                title2: this.$t('thisDateRange'),
                overrideLetter: 'T'
            },
            ]
        }
    }
}
</script>