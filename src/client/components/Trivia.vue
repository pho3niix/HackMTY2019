<template>
<div class="trivia">
   <div 
   class="card" 
   style="width: 18rem; margin-top: 12px; "
   >
  <div class="card-body">
    <form>
       <div class="form-group">
         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
       </div>
      <div class="form-check">
        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
        <label class="form-check-label" for="exampleRadios1">
        </label>
      </div>
      <div class="form-check">
        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
        <label class="form-check-label" for="exampleRadios2">
         
        </label>
      </div>
      <div class="form-check disabled">
        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
        <label class="form-check-label" for="exampleRadios3">
        </label>
      </div>
      <div class="form-check disabled">
        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4">
        <label class="form-check-label" for="exampleRadios4">
        </label>
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