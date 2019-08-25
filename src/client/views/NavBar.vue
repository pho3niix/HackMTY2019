<template>
<div id="nav">
    <nav class="navbar navbar-expand-lg">
                <div class="collapse navbar-collapse" id="navbarColor01">
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item">
                      <router-link class="nav-link" to="/">Home</router-link>
                      </li>
                      <li class="nav-item">
                      <router-link class="nav-link" to="/trivia">Trivia</router-link>
                      </li>
                      <li class="nav-item">
                      <router-link class="nav-link" to="/login">Login</router-link>
                      </li>
                      <li class="nav-item">
                      <router-link class="nav-link" to="/newTrivia">New Trivia</router-link>
                      </li>
                      <li class="nav-item">
                      <router-link class="nav-link" to="/registry">Registry</router-link>
                      </li>
                  </ul>
                </div>
            </nav>
</div>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style lang="sass">

</style>