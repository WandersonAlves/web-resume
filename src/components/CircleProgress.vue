<style scoped>

.psize {
    width: 188px
}

.padding {
    padding: 20px
}

.padding-left {
    padding-left: 20px
}

.padding-right {
    padding-right: 20px
}

.flex {
    display: flex;
    flex: 1 1 auto;
}

.flex-dir-row {
    flex-direction: row;
}

.flex-dir-col {
    flex-direction: column;
}

.flex-itens-center {
    align-items: center;
}

.text-center {
    text-align: center;
}

.text-left {
    text-align: left;
}
.text-right {
    text-align: right;
}


@media(max-width: 959px) {
    .flex-dir-row {
        flex-direction: column;
    }
    .text-right, .text-left {
        text-align: center;
    }
}


</style>
<template>    
    <div class="flex padding flex-itens-center" v-bind:class="{'flex-dir-col': direction === 'mid', 'flex-dir-row': direction === 'left' || 'right'}">        
        <div class="text-right padding-right" v-if="direction === 'right'">
            <h3 class="margin-top-10 font-weight-400 pink margin-reset montserrat">{{skill}}</h3>
            <div class="psize">
                <p class="black font-weight-300 open-sans">{{description}}</p>
            </div>
        </div>
        <div>            
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="12" />
                <text class="boldier" x="42" y="65" fill="#D33575" font-size="20px" font-family="Montserrat">{{shownPercentage}}%</text>
                <circle cx="60" cy="60" r="54" fill="none" :stroke="color" stroke-width="12" stroke-linecap="round" transform="rotate(-90 60 60)" stroke-dasharray="339.292" :stroke-dashoffset="strokeDashoffset" />
            </svg>
        </div>
        <div v-bind:class="{'text-center': direction === 'mid', 'text-left padding-left': direction === 'left'}" v-if="direction !== 'right'">
            <h3 class="margin-top-10 font-weight-400 margin-reset montserrat" :style="{ color: color }">{{skill}}</h3>
            <div class="psize">
                <p class="black font-weight-300 open-sans">{{description}}</p>
            </div>
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
        },
        direction: {
            type: String,
            default: 'mid'
        },
        color: {
            type: String,
            default: "#D33573"
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
