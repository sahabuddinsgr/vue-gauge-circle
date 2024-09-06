<script setup>
    import CircleProgress from './components/CircleProgress.vue'
</script>

<template>
    <div class="header">
        <h1>Welcome to Vue circle progress bar!</h1>
    </div>
    <div class="vue-echart">
        <CircleProgress 
            :progressValue="70"
            :minValue="0" 
            :maxValue="100" 
            :viewport="100"
            :fontSize="14" 
            :fontLineHeight="19"
            :lineWidth="10"
            :fontColor="'rgba(15, 31, 60, 1)'"
            :offsetColor="'rgba(227, 237, 255, 1)'"
            :progresColor="'rgba(66, 131, 252, 1)'"
        />
        <CircleProgress 
            :progressValue="70"
            :minValue="0" 
            :maxValue="100" 
            :viewport="100"
            :fontSize="14" 
            :fontLineHeight="19"
            :lineWidth="10"
            :fontColor="'rgba(15, 31, 60, 1)'"
            :offsetColor="'rgba(227, 237, 255, 1)'"
            :progresColor="'#E10715'"
        />
        <CircleProgress 
            :progressValue="70"
            :minValue="0" 
            :maxValue="100" 
            :viewport="100"
            :fontSize="14" 
            :fontLineHeight="19"
            :lineWidth="10"
            :fontColor="'rgba(15, 31, 60, 1)'"
            :offsetColor="'rgba(227, 237, 255, 1)'"
            :progresColor="'#3FDC00'"
        />
        <CircleProgress 
            :progressValue="70"
            :minValue="0" 
            :maxValue="100" 
            :viewport="100"
            :fontSize="14" 
            :fontLineHeight="19"
            :lineWidth="10"
            :fontColor="'rgba(15, 31, 60, 1)'"
            :offsetColor="'rgba(227, 237, 255, 1)'"
            :progresColor="'#3EBAE1'"
        />
        <CircleProgress 
            :progressValue="70"
            :minValue="0" 
            :maxValue="100" 
            :viewport="100"
            :fontSize="14" 
            :fontLineHeight="19"
            :lineWidth="10"
            :fontColor="'rgba(15, 31, 60, 1)'"
            :offsetColor="'rgba(227, 237, 255, 1)'"
            :progresColor="'#21D683'"
        />
    </div>
</template>
