<style scoped>

.psize {
    width: 188px
}

.padding {
    padding: 20px
}

</style>
<template>    
    <div class="flex flex-dir-col padding">        
        <div class="flex-align-self-center">            
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="12" />
                <text class="boldier" x="42" y="65" fill="#D33575" font-size="20px" font-family="Montserrat">{{shownPercentage}}%</text>
                <circle cx="60" cy="60" r="54" fill="none" stroke="#D33575" stroke-width="12" stroke-linecap="round" stroke-dasharray="339.292" :stroke-dashoffset="strokeDashoffset" />
            </svg>
        </div>
        <h3 class="margin-top-10 text-center font-weight-400 pink margin-reset montserrat">{{skill}}</h3>
        <div class="psize">
            <p class="black text-center font-weight-300 open-sans">{{description}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CircleProgress',
    props: {
        percentage: {
            type: Number,
            default: 1
        },
        skill: {
            type: String
        },
        description: {
            type: String
        }
    },
    computed: {
        strokeDashoffset() {
            return 339.292 * (1 - this.percentage);
        },
        shownPercentage() {
            return this.percentage * 100;
        }
    }
}
</script>
