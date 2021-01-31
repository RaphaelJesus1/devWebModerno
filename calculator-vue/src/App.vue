<template>
    <div id="app">
        <h1>Calculator - VueJS</h1>
        <Calculator />
    </div>
</template>

<script>
import Calculator from "./main/Calculator"

export default {
    components: {Calculator}
}
</script>

<style>
@font-face {
    font-family: RobotoMono;
    src: url("./fonts/RobotoMono-Thin.ttf");
}

*{
    font-family: "RobotoMono", monospace;
}

body{
    margin: 0
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #fff;
    background: linear-gradient(90deg, rgba(0,42,42,1) 0%, rgba(26,187,190,1) 100%);
}
</style>