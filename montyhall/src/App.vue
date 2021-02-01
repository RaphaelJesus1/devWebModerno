<template>
    <div id="app">
        <h1>Monty Hall game</h1>
        <div class="form">
            <div v-if="!started">
                <label for="portsAmount">Doors amount: </label>
                <input type="text" id="portsAmount" size="3"
                    v-model.number="portsAmount"/>
            </div>
            <div v-if="!started">
                <label for="selectedPort">What's the rewarded door? </label>
                <input type="text" id="selectedPort" size="3"
                    v-model.number="selectedPort"/>
            </div>
            <button v-if="!started" @click="started = true">Start</button>
            <button v-if="started" @click="started = false">Restart</button>
            
        </div>
        <div class="doors" v-if="started">
            <div v-for="i in portsAmount" :key="i">
                <Door :hasGift="i == selectedPort" :number="i" />
            </div>
        </div>
        <Guide v-if="!started" />
    </div>
</template>

<script>
import Door from './components/Door'
import Guide from './components/Guide'

export default {
    name: "App",
    components: { Door, Guide },
    data: function() {
        return {
            started: false,
            portsAmount: 3,
            selectedPort: null
        }
    },
    methods: {
        toggleGuide() {
            const guide = document.querySelector('.guide')

            if(guide.classList.contains('d-none')) {
                guide.classList.remove('d-none')
            } else {
                guide.classList.add('d-none')
            }
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    color: #fff;
    background: linear-gradient(90deg, #0700b8 0%, #00ff88 100%);
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.form, .form input, .form button {
    margin-bottom: 10px;
    font-size: 2rem;
}

.doors {
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>