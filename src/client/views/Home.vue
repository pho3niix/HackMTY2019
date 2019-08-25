<template>
    <div class="home">
        <div id="nav">
            <div id="title">
                <h3>Tus Trivias</h3>
            </div>
            <div id="search">
                <input type="text">
            </div>
        </div>
        <div id="cards">
            <h3 id="else" v-if="totalQ==0">{{ before }}</h3>
            <hello v-else v-for="item in trivia" :key="item._id" :nombre="item.name" :total="totalQ" question="¿Cual es la capital de francia?"
            answera="Paris"
            answerb="Italia"
            answerc="Roma"
            answerd="China"
            />
        </div>
    </div>
</template>

<script>
    import hello from '../components/Hello.vue';

    export default {
        name: 'home',
        components: {
            hello
        },
        data() {
            return {
                mensaje: 'App',
                url: '/api/trivia/questions/getTrivia',
                trivia: null,
                questions: null,
                before: 'Loading...',
                status: false,
                totalQ: 0
            }
        },
        mounted() {
            this.getTrivia(this.url);
        },
        methods:{
            getTrivia(e){
                this.axios(e)
                .then((res)=>{
                    this.trivia = res.data;
                    this.questions = res.data.questions;
                })
                .then((res)=>{
                    this.totalQ = this.trivia.length;
                })
                .finally(()=>{
                    if(this.totalQ == 0){
                        this.before = "There's no trivias yet"
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home{
        display: flex;
        width: 100vw;
        height: 90vh;
        flex-direction: column;

        #nav{
            display: flex;
            width: 90vw;
            height: 10vh;
            background-image: linear-gradient(#F7334D, #AF082F);
            color: white;
            justify-content: space-around;
            align-items: center;
            border-radius: 8px;
            align-self: center;

            #search{
                border: solid white 1px;
                height: 5vh;
                color: black;
                border-radius: 5px;
                background-image: url('../assets/lupa.png');
                background-position: right .5vw center;
                background-repeat: no-repeat;
                background-size: 12%;
                text-indent: .5vw;
                background-color: invert($color: #000000)
            }
        }
        #cards{
            width: 94vw;
            align-self: center;

             #else{
                    display: block;
                    margin-right: auto;
                    margin-left: auto;
                    align-self: center;
                }
        }
    }
</style>