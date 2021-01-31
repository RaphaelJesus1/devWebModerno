<template>
    <div class="display"
       :class={historic} >
        {{value}}
    </div>
</template>

<script>
export default {
    props: {
        value: {},
        historic: { type: Boolean }
    }
}
</script>

<style>
    .display{
        grid-column: span 4;
        background-color: #0004;

        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 8px;
        font-size: 2.1em;
        overflow: hidden;
    }

    .display.historic{
        font-size: 1.3em
    }
</style>