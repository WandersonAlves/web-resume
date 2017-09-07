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

.flex-row-inverse {
    flex-flow: row-reverse
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
    .padding-left, .padding-right {
        padding: 0px;
    }
}


</style>
<template>    
    <div class="flex padding flex-itens-center" 
        :class="{'flex-dir-col': direction === 'mid', 'flex-dir-row': direction === 'left' || 'right', 'flex-row-inverse' : direction === 'right'}">
        <div>            
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="12" />
                <text class="boldier" :x="xAxis" y="67" :fill="color" font-size="20px" font-family="Montserrat">{{percentage}}%</text>
                <circle cx="60" cy="60" r="54" fill="none" :stroke="color" stroke-width="12" stroke-linecap="round" transform="rotate(-90 60 60)" stroke-dasharray="339.292" :stroke-dashoffset="strokeDashoffset" />
            </svg>
        </div>        
        <div>
            <h3 class="margin-top-10 font-weight-400 margin-reset montserrat" 
                :class="{'text-center': direction === 'mid', 'text-left padding-left': direction === 'left', 'text-right padding-right': direction === 'right'}" 
                :style="{ color: color }">{{skill}}</h3>
            <div class="psize" 
                 :class="{'text-center': direction === 'mid', 'text-left padding-left': direction === 'left', 'text-right padding-right': direction === 'right'}">
                <p class="black font-weight-300 quicksand">{{description}}</p>
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
            default: 100
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
            if (this.percentage > 100) {
                this.percentage = 100;
            }
            else if (this.percentage < 0) {
                this.percentage = 0;
            }
            return 339.292 * (1 - (this.percentage / 100));
        },
        xAxis() {
            if (this.percentage >= 100) {
                return 36;
            }
            else if (this.percentage >=0 && this.percentage <=9) {
                return 47;
            }
            else {
                return 42;
            }
        }
    }
}
</script>
