<template>
    <div id="app">
        <div id="nav">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>
        </div>
    <router-view/>
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style lang="scss" scoped>
    #nav a.router-link-exact-active {
        color: #42b983;
    }
    a{
        font-size: 18px;
    }

</style>