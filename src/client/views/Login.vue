<template>
<div class="login">
<div class="card" style="width: 18rem;">
  <h2>Sign In</h2>
  <div class="card-body">
    <form>
  <div class="form-group">
    <input type="email" class="form-control" style="width: 20vw;" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username">
    
  </div>
  <div class="form-group">
    <input type="password" class="form-control" style="width: 20vw;" id="exampleInputPassword1" placeholder="Password">
  </div>
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  <button type="submit" class="btn btn-primary">Sign</button>
</form>
  </div>
</div>
</div>
</template>

<script>
    export default {
        name: 'Login',
        components: {

        },
        data() {
            return {
                login: 'Login us',
                hero: 'Super Vue'
            }
        }
    }
</script>
<style lang="sass">
  
</style>