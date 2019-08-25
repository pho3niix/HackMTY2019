<template>
<div class="container"> 
<div class="newTrivia">
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre de trivia">
  <button type="submit" class="btn btn-primary" onclick="aparecer()" >Crear</button>
</div>
<div class="invisible" id="invisible">
    <trivia />
</div>
</div>
</template>
<script>
  import trivia from '../components/Trivia.vue';
    export default {
        name: 'NewTrivia',
        components: {
            trivia
        },
        data() {
            return {
                newTrivia: 'NewTrivia us',
                hero: 'Super Vue'
            }
        }
    }
   
</script>
<style lang="sass">

</style>