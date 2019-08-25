<template>
<div class="trivia">
   <div class="card"  style="width: 60vw;">
  <div class="card-body">
    <form>
      <!--Pregunta-->
       <div class="form-group">
         <input type="email" class="form-control" style="width:45vw;" id="exampleInputEmail1" aria-describedby="question" placeholder="Pregunta">
       </div>
       <!--Boton pregunta 1-->
       <div class="form-group">
         <input class="form-check" type="checkbox" id="defaultCheck1" value="option1">
       </div>
       <!--Input pregunta 1-->
      <div class="form-check"> 
        <label class="form-check-label" for="exampleRadios1">
        <input class="form-control" style="width:40vw;" type="text" placeholder="Respuesta 1">
        </label>
      </div>
      <!--Boton pregunta 2-->
      <div style="">
        <input class="form-check" style="position: absolute;" type="checkbox" id="defaultCheck2" value="option2">
      </div>
      <!--Input pregunta 2-->
      <div class="form-check">
        <label class="form-check-label" for="exampleRadios2">   
        <input class="form-control" style="width:40vw;" type="text" placeholder="Respuesta 2">
        </label>
      </div>
      <!--Boton pregunta 3-->
      <div>
        <input class="form-check"  type="checkbox" id="defaultCheck3"  value="option3">
      </div>
      <!--Input pregunta 3-->
      <div class="form-check disabled">
        <label class="form-check-label" style="width:40vw;" for="exampleRadios3">
          <input class="form-control" type="text" placeholder="Respuesta 3">
        </label>
      </div>
      <!--Boton pregunta 4-->
      <div> 
        <input class="form-check" type="checkbox" id="defaultCheck4" value="option4">
      </div>
      <!--Input pregunta 4-->
      <div class="form-check disabled">
        <label class="form-check-label" style="width:40vw;" for="exampleRadios4">  
        <input class="form-control" type="text" placeholder="Respuesta 4">
        </label>
      </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
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