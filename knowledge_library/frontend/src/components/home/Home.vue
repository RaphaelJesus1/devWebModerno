<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Base de conhecimento"/>
            <div class="stats">
                <Stat title="Categorias" :value="stat.categories"
                    icon="fa fa-folder" colorPrimary="#e8134d" colorSecondary="#a30530" />
                <Stat title="Artigos" :value="stat.articles"
                    icon="fa fa-file" colorPrimary="#13e8d4" colorSecondary="#0566a3" />
                <Stat title="Usuários" :value="stat.users"
                    icon="fa fa-user" colorPrimary="#6113e8" colorSecondary="#7605a3" />
            </div>
    </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle"
import Stat from "./Stat.vue"
import axios from "axios"
import {baseApiUrl} from "@/global"

export default {
    name: "Home",
    components: {PageTitle, Stat},
    data: function() {
        return {
            stat: {}
        }
    },
    methods :{
        getStats() {
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
        }
    },
    mounted() {
        this.getStats()
    }
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>