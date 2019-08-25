<template>
<div class="trivia">
   <div class="card"  style="width: 60vw;">
  <div class="card-body">
    <form>
       <div class="form-group">
         <input type="email" class="form-control" styles="width:40vw;" id="exampleInputEmail1" aria-describedby="question" placeholder="Pregunta">
       </div>
      <div class="form-check">    
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
        <label class="form-check-label" for="exampleRadios1">
        <input class="form-control form-control-sm" style="width:50vw;" type="text" placeholder=".form-control-sm">
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
        <label class="form-check-label" for="exampleRadios2">   
        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
        </label>
      </div>
      <div class="form-check disabled">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
        <label class="form-check-label" for="exampleRadios3">
        </label>
        <input class="form-control  form-control-sm" type="text" placeholder=".form-control-sm">
      </div>
      <div class="form-check disabled">
         <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4">
        <label class="form-check-label" for="exampleRadios4">
        </label>
        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
      </div>
        <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</div>
<button type="submit" class="btn btn-primary">Save</button>
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