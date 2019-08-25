<template>
<div class="trivia">
   <div class="card"  style="width: 60vw; margin-top:15px;">
  <div class="card-body">
    <form>
      <!--Pregunta-->
       <div class="form-group">
         <input type="email" class="form-control" style="width:45vw; " id="exampleInputEmail1" aria-describedby="question" placeholder="Pregunta">
       </div>
       <div class="container-qt">
      <!--Input pregunta 1-->
      <div class="form-check"> 
        <label class="form-check-label" for="exampleRadios1">
        <input class="form-registry" style="width:40vw;" type="text" placeholder="Respuesta 1">
        </label>
      </div>
       </div>
       <div class="container-qt">
      <!--Input pregunta 2-->
      <div class="form-check">
        <label class="form-check-label" for="exampleRadios2">   
        <input class="form-registry" style="width:40vw;" type="text" placeholder="Respuesta 2">
        </label>
      </div>
       </div>
       <div class="container-qt">
      <!--Input pregunta 3-->
      <div class="form-check disabled">
        <label class="form-check-label" for="exampleRadios3">
          <input class="form-registry"  style="width:40vw; " type="text" placeholder="Respuesta 3">
        </label>
      </div>
       </div>
       <div class="container-qt">
      <!--Input pregunta 4-->
      <div class="form-check disabled">
        <label class="form-check-label" style="width:40vw;" for="exampleRadios4">  
        <input class="form-registry" type="text" placeholder="Respuesta 4">
        </label>
      </div>
       </div>
        <button type="submit" style="justify-content:center;" class="btn btn-primary">Guardar</button>
    </form>
  </div>
</div>
<button type="submit" class="btn btn-primary">Hecho</button>
</div>
</template>

<script>
    export default {
        name: 'trivia',
        components: {

        },
        data() {
            return {
                trivia: 'Trivia us',
                hero: 'Super Vue'
            }
        }
    }
</script>

<style lang="sass"></style>