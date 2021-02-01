<template>
    <div class="door-area">
        <div class="door-frame" :class="{selected: selected && !open}">
            <Gift v-if="open && hasGift"></Gift>
        </div>
        <div class="door" :class="{open}"
            @click="selected = !selected">
            <div class="number" :class="{selected}">{{number}}</div>
            <div class="knob" :class="{selected}"
                @click.stop="open = true"></div>
        </div>
    </div>
</template>

<script>
import Gift from './Gift'

export default {
    name: 'Door',
    components: { Gift },
    props: {
        number: {},
        hasGift: { type: Boolean }
    },
    data: function() {
        return {
            open: false,
            selected: false
        }
    }
}
</script>

<style>
:root {
    --door-border: 5px solid brown;
    --selected-border: 5px solid #ffd700;
    --golden: #ffd700;
}

.door-area {
    position: relative;
    width: 200px;
    height: 310px;
    border-bottom: 10px solid #BBB;
    margin-bottom: 20px;
    font-size: 3em;

    display: flex;
    justify-content: center;
}

.door-frame {
    position: absolute;
    height: 300px;
    width: 180px;

    border-left: var(--door-border);
    border-top: var(--door-border);
    border-right: var(--door-border);

    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.door{
    position: absolute;
    top: 5px;
    height: 295px;
    width: 170px;
    background-color: chocolate;

    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
}

.door .knob {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: brown;
    align-self: flex-start;
    margin-top: 60px;
}

.door-frame.selected {
    border-left: var(--selected-border);
    border-top: var(--selected-border);
    border-right: var(--selected-border);
}

.door .number.selected{
    color: var(--golden)
}

.door .knob.selected{
    background-color: var(--golden)
}

.door.open {
    background-color: #0007;
}

.door.open .number, .door.open .knob {
    display:none;
}

</style>