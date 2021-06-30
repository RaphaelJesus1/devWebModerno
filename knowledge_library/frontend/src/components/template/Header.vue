<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">
            <router-link to="/">{{title}}</router-link>
        </h1>
        <UserDropdown v-if="!hideUserDropdown"/>
    </header>
</template>

<script>
import UserDropdown from "./UserDropdown"

export default {
    name: "Header",
    components: {UserDropdown},
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed: {
        icon() {
            return this.$store.state.isMenuVisible ? "fa-angle-left":"fa-angle-down";
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit("toggleMenu")
        }
    }
}
</script>

<style scoped>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #dc143c, #a80e2d);

        display: flex;
        justify-content: center;
        align-content: center;

        box-sizing: content-box; 
        border-bottom: 4px solid rgb(250, 87, 87);
    }

    .title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
        align-self: center;
    }

    .title a {
        color: #FFF;
        text-decoration: none;
    }

    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color: #fff;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    header.header > a.toggle:hover {
        background-color: #0003;
    }
</style>