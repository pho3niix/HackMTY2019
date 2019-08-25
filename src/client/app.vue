<template>
    <div id="app">
        <navBar/>
    <router-view/>
    </div>
</template>

<script>
import navBar from './views/NavBar.vue';
    export default {
        name:'app',
        components: {
            navBar
        }
        
    }
</script>

<style lang="scss" src="./stylus/main.scss"></style>