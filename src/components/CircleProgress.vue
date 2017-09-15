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
        :class="{'flex-dir-col': computedDirection === 'mid', 'flex-dir-row': computedDirection === 'left' || 'right', 'flex-row-inverse' : computedDirection === 'right'}">
        <div>            
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="12" />
                <text class="boldier" :x="xAxis" y="67" :fill="color" font-size="20px" font-family="Montserrat">{{computedPercentage}}%</text>
                <circle cx="60" cy="60" r="54" fill="none" :stroke="color" stroke-width="12" stroke-linecap="round" transform="rotate(-90 60 60)" stroke-dasharray="339.292" :stroke-dashoffset="strokeDashoffset" />
            </svg>
        </div>        
        <div>
            <h3 class="margin-top-10 font-weight-400 margin-reset montserrat" 
                :class="{'text-center': computedDirection === 'mid', 'text-left padding-left': computedDirection === 'left', 'text-right padding-right': computedDirection === 'right'}" 
                :style="{ color: color }">{{skill}}</h3>
            <div class="psize" 
                 :class="{'text-center': computedDirection === 'mid', 'text-left padding-left': computedDirection === 'left', 'text-right padding-right': computedDirection === 'right'}">
                <p class="black font-weight-300 quicksand">{{description}}</p>
            </div>
        </div>
    </div>
</template>
<script>
const DEFAULT_SIZE = 339.292;
const DIRECTION_MID = 'mid';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const FULL_CIRCLE_PERCENTAGE = 100;
const EMPTY_CIRCLE_PERCENTAGE = 0;
const TREE_DIGITS_X_AXIS = 36;
const ONE_DIGITS_X_AXIS = 47;
const DEFAULT_DIGITS_X_AXIS = 42;

export default {
    name: 'CircleProgress',
    introduction: 'Just a Circle Progress component!',
    props: {
        percentage: {
            type: Number,
            default: 100,
            note: 'Describe the percentage of the circle. If decimal number was set, then, return a Math.round() of the value'
        },
        skill: {
            type: String,
            note: 'Main text of the circle'
        },
        description: {
            type: String,
            note: 'Secondary text of the circle'
        },
        direction: {
            type: String,
            default: 'mid',
            note: 'Describe the direction of text of the circle. Valid values are: mid (default) | left | right. If a invalida value was set, then, default value will be assigned'
        },
        color: {
            type: String,
            default: "#D33573",
            note: 'A hex color of the circle, default is #D33573'
        },
    },
    computed: {
        strokeDashoffset() {
            return DEFAULT_SIZE * (1 - (this.computedPercentage / FULL_CIRCLE_PERCENTAGE));
        },
        xAxis() {
            if (this.computedPercentage >= FULL_CIRCLE_PERCENTAGE) { return TREE_DIGITS_X_AXIS; } 
            if (this.computedPercentage >= EMPTY_CIRCLE_PERCENTAGE && this.computedPercentage <=9) { return ONE_DIGITS_X_AXIS; }
            return DEFAULT_DIGITS_X_AXIS;
        },
        computedDirection() {
            if (this.direction !== DIRECTION_MID && 
                this.direction !== DIRECTION_LEFT && 
                this.direction !== DIRECTION_RIGHT) {
                return DIRECTION_MID;
            }
            return this.direction;            
        },
        computedPercentage() {
            let clonePercentage = Math.round(this.percentage);
            if (clonePercentage > FULL_CIRCLE_PERCENTAGE) { return FULL_CIRCLE_PERCENTAGE; } 
            if (clonePercentage < EMPTY_CIRCLE_PERCENTAGE) { return EMPTY_CIRCLE_PERCENTAGE; }
            return clonePercentage;            
        }
    },
}
</script>
