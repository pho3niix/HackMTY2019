<template>
<div id="nav">
    <nav class="navbar navbar-expand-lg" style="border-botton: #solid 1px;">
                <div class="collapse navbar-collapse" id="navbarColor01"> 
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item">
                      <router-link class="nav-link" to="/">Inicio</router-link>
                      </li>
                      <li class="nav-item">
                      <router-link class="nav-link" to="/newTrivia">Trivia</router-link>
                      </li>
                      <li class="nav-item">
                      <router-link class="nav-link" to="/login">Sesion</router-link>
                      </li> 
                      <li class="nav-item">
                      <router-link class="nav-link" to="/registry">Registro</router-link>
                      </li>
                      <li class="nav-item">
                      <router-link class="nav-link" to="/mesa">MESA</router-link>
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