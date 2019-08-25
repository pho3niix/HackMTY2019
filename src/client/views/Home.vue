<template>
        <hello  />
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
    .card{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>