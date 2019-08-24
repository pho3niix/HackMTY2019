<template>
    <div class="home">
        <hello msg="MEVN STACK" />
        <h3>{{ mensaje }}</h3>
    </div>
</template>

<script>
    import hello from '../components/Hello.vue';

    export default {
        name: 'home',
        components: {
            hello
        },
        data() {
            return {
                mensaje: 'App'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>