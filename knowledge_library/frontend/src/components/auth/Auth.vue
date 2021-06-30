<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="@/assets/logo.png" width="600" alt="Logo">
            <b-progress :value="100" animated
                variant="danger" class="w-75" height="0.5rem"></b-progress>
            <div class="auth-title">{{showSignup ? "Cadastro":"Login"}}</div>

            <input v-if="showSignup" v-model="user.name" type="text" placeholder="Nome"/>
            <input type="text" v-model="user.email" name="email" placeholder="E-mail"/>
            <input type="password" v-model="user.password" name="password" placeholder="Senha"/>
            <input v-if="showSignup" type="password" v-model="user.confirmPassword"
                placeholder="Confirme a senha"/>

            <button v-if="showSignup" @click="signup">Registrar</button>
            <button v-else @click="signin">Entrar</button>

            <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup">Já tem cadastro? Acesse o login!</span>
                <span v-else>Não tem cadastro? Registre-se aqui!</span>
            </a>
        </div>
    </div>
</template>

<script>
import {baseApiUrl, showError, userKey} from "@/global"
import axios from "axios"

export default {
    name: "Auth",
    data: function() {
        return {
            showSignup: false,
            user: {}
        }
    },
    methods: {
        signin() {
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({path:"/"})
                })
                .catch(showError)
        },
        signup() {
            axios.post(`${baseApiUrl}/signup`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.user = {}
                    this.showSignup = false
                })
                .catch(showError)
        }
    }
}
</script>

<style>
    .auth-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .auth-modal {
        background-color: #fff;
        width: 700px;
        padding: 35px;
        box-shadow: 0 1px 5px #0001;
        border-radius: 8px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .auth-title {
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 15px;
    }

    .auth-modal input {
        border: 1px solid #bbb;
        width: 70%;
        margin-bottom: 12px;
        padding: 3px 8px;
        outline-color: #fb3d28;
    }

    .auth-modal button {
        box-sizing: border-box;
        align-self:center;
        background-color: transparent;
        color: #fb3d28;
        padding: 5px 15px;
        border-radius: 5px;
        border: 2px solid #fb3d28;
        cursor: pointer;
        outline: 0;
    }

    .auth-modal button:hover {
        color: #fff;
        background-color: #fb3d28;
    }

    .auth-modal a {
        margin-top: 35px;
        color: #666;
        background-color: #f5f4f2;
        width: 300px;
        text-align: center;
    }

    .auth-modal img {
        margin-bottom: 10px;
    }
</style>