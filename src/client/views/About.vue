<template>
    <div class="about">
        <h1>{{ about }}</h1>
        <img id="hero" src="../assets/final.png" alt="">
        <h2>{{ hero }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'about',
        components: {

        },
        data() {
            return {
                about: 'About us',
                hero: 'Super Vue'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .about{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        #hero{
            padding: 0;
            margin: -6vh;
            width: 40%;
        }
    }
</style>