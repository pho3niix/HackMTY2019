<template>
    <div class="card">
        <div id="content">
            <div id="part1">
                <div id="image">
                    <img src="../assets/final.png" alt="SUPER VUE">
                </div>
                <div id="detail">
                    <h2>{{ nombre }}</h2>
                    <h3>Total: {{ total }}</h3>
                </div>
            </div>
            <div id="part2">
                <h4>Preguntas</h4>
                <h3>{{ question }}</h3>
                <ul id="answer">
                    <li><h5>A) {{ answera }}</h5></li>
                    <li><h5>B) {{ answerb }}</h5></li>
                    <li><h5>C) {{ answerc }}</h5></li>
                    <li><h5>D) {{ answerd }}</h5></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        props: {
            nombre: String, 
            total: Number,
            answera: String,
            answerb: String,
            answerc: String,
            answerd: String,
            question: String
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
    .card{
        display: inline-block;
        border-radius: 4px;
        border: none;
        padding: .5vw;
        width: 25vw;
        height: 75vh;
        background-color: #ffffff;
        color: rgb(0, 0, 0);
        margin-left: 2vw;
        margin-top: 2vh;
        box-shadow: 0 0 3vh rgb(0, 0, 0);

        
        #content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            #part1{
                display: flex;
                height: 20vh;
                align-items: center;
                justify-content: space-evenly;
            #image{
                img{
                    width: 10vw;
                }
            }   
        }

        #part2{
            display: flex;
            height: 55vh;
            width: 22vw;
            align-self: center;
            flex-direction: column;
            ul{
                li{
                    list-style: none;
                     
                }
            }
        }
        }
    }
</style>