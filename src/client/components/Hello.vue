<template>
<div class="home">
    <div class="card" style="width:18rem;">
        <div class="card-body">
            <h2>Trivias</h2>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-controls mr-sm-2" type="text" placeholder="Search">
            </form>
        </div>
    </div>
    <div class="card" style="width:18rem;">
        <h1>Nombre de trivia</h1>
        <h4>Preguntas: 5</h4>
        <a href=""> Ver mas</a>
    </div>
</div>
</template>

<script>
    export default {
        name: 'hello',
        props: {
            msg: String
        },
        data() {
            return {
                greet: 'Welcome to the jungle',
                imageLink: ('./client/assets/app.png')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        #cool{
            width: 60%;
        }
    }
</style>