<template>
    <div class="guide">
        <header>
            <h2>Welcome to Monty Hall game</h2>
            <p lead>Developed by Raphael Menezes de Jesus during his Web development classes about VueJS</p>
            <p>
                This game is based on a mathematical problem that emerged during a contest in a television program 
                shown on 70's, called <span class="italic">Let's Make a Deal</span>.
            </p>
        </header>

        <main>
            <h2>How to play</h2>
            <section>
                <h3>Preparations...</h3>
                <p>
                    Insert how many doors will be in your game.
                    At last, choose which door will be the rewarded one.
                    Doors are created from number "1" to (amount of doors you chose).
                </p>
                    <span class="danger">Watch out:</span> <span class="italic">if you choose an out of range number, your game won't have rewarded doors.</span>
            </section>

            <hr/>

            <section>
                <h3>Start...</h3>
                <p>
                    The application will render all doors and they'll be closed.
                    You can mark (or unmark) a door as hunt by left-clicking it.
                    Many doors can be marked at the same time.
                    After you decide what door you want to open, click on its knob and... voilà! It's opened!
                </p>
                <p><span class="warning">Warning:</span><span class="italic"> since the door is opened, you can't undo the action.</span></p>
            </section>

            <hr/>

            <section>
                <h3>Finally...</h3>
                <p>
                    After the game ends you can press the 'restart' button or refresh the page to play again.
                </p>
            </section>
        </main>

        <footer>
            <h3>Now it's your turn to challenge this mathematical problem and prove you're the luckiest player of the world.</h3>
            <p lead>Send me your score, I'm rewarding the best player</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Guide"

}
</script>

<style>
    *{
        box-sizing: border-box;
    }
    :root{
        --bg-dark: #0C2340;
    }

    .guide{
        border-radius: 20px;
        width: 90vw;
        background-color: #fff;
        font-size: 1.6rem;
        color: #000;
        margin-top: 50px
    }

    .guide > * {
        padding: 20px 25px 6px 25px;
    }

    header {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        background-color: #0C2340;
        color: white;
        box-shadow: 0px 9px 10px 0px rgba(0,0,0,0.20);;
    }

    h2{
        margin: 10px 0;
    }

    h3{
        margin: 20px 0 0 0;
    }

    p[lead]{
        color: #aaa;
        font-size: 1.4rem;
    }

    .italic{
        font-style: italic;
        font-weight: 600;
    }

    .danger{
        color: crimson;
        font-weight: 700;
    }

    .warning{
        color: gold;
        font-weight: 600;
    }

    section {
        margin-left: 20px;
    }

    footer {
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
        background-color: var(--bg-dark);
        color: #fff;
        box-shadow: 0px -9px 10px 0px rgba(0,0,0,0.20);;
    }

    .guide > footer, footer > * {
        margin: 0;
        padding: 15px 25px 25px 25px;
    }
</style>