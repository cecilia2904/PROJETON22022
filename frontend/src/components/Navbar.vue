<template>
      <link rel="stylesheet" href="style.css" />
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous" />
    <div id="navbar">
        <div class="navbar__container">
            <a href="/" id="navbar__logo">BOOKVERSO</a>
      <div class="navbar__toggle" id="mobile-menu">
        <span class="bar"></span> <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="navbar__menu">
        <router-link to="/">        
          <li class="navbar__item">
          <a class="navbar__links" id="home-page">Início</a></li>
        </router-link>
        <li class="navbar__item">
        <a href="#about" class="navbar__links" id="home-page">Sobre</a></li>  
        <li class="navbar__item">
        <a href="#services" class="navbar__links" id="about-page">Outros</a></li> 
        <li class="navbar__item">
          <a href="#sign-up" class="navbar__links" id="services-page">Nosso time</a>
        </li> 
        <router-link to="/register" v-show="!authenticared">        
        <li class="navbar__btn">
          <a href="" class="button" id="signup">Cadastro</a>
        </li></router-link>
        <router-link to="/login" v-show="!authenticared">
            <li class="navbar__btn">
          <a href="" class="button" id="signup">Entrar</a>
        </li>
        </router-link>
        <li class="navbar__btn">
        <router-link to="/dashboard" v-show="authenticated">Dashboard</router-link>
        </li>
        <li class="navbar__btn">
        <router-link to="/profile" v-show="authenticated">Configurações</router-link>
        </li>
        <button @click="logout($event)" v-show="authenticated">Sair</button>
        
    </ul>
    </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

    export default {
        name: "Navbar",
        methods: {
            logout(e) {
            
                e.preventDefault();
            
            //Emitir evento para o usuário deslogar
                this.$store.commit("logout");
            
            //redirecionar para página pública
            this.$router.push("/");

            }
        },
        computed: {
            ...mapState([
                'authenticated'
            ])

        }

    }

</script>


<style scoped>
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kumbh Sans', sans-serif;
    scroll-behavior: smooth;
  }

    #navbar {
        background: #bee7f9;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #EEE;
        font-size: 1.2rem;
        position: sticky;
        top: 0;
        z-index: 999;
    }
 
    .navbar__container {
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;
  }
  
  #navbar__logo {
    background-color: #ff8177;
    background-image: linear-gradient(to top, #001d8f, #5f1cfd, #001d8f);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    
  }
  
  .navbar__menu {
    display: flex;
    align-items: center;
    list-style: none;
  }
  
  .navbar__item {
    height: 80px;
  }
  
  .navbar__links {
    color: #1a2442;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    text-decoration: none;
    height: 100%;
    transition: all 0.3s ease;
  }
  
  .navbar__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
  }
  
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 10px 20px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 4px;
    background: #000000;
    background: -webkit-linear-gradient(to right,  #001d8f, #5f1cfd );
    background: linear-gradient(to right,#001d8f, #5f1cfd );
    color: #fff;
    transition: all 0.3s ease;
  }
  
  .navbar__links:hover {
    color: #ff0000;
    transition: all 0.3s ease;
  }
  
  @media screen and (max-width: 960px) {
    .navbar__container {
      display: flex;
      justify-content: space-between;
      height: 80px;
      z-index: 1;
      width: 100%;
      max-width: 1300px;
      padding: 0;
    }
  
    .navbar__menu {
      display: grid;
      grid-template-columns: auto;
      margin: 0;
      width: 100%;
      position: absolute;
      top: -1000px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: -1;
    }
  
    .navbar__menu.active {
      background: #dbeeff;
      top: 100%;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 99;
      height: 60vh;
      font-size: 1.6rem;
    }
  
    #navbar__logo {
      padding-left: 25px;
    }
  
    .navbar__toggle .bar {
      width: 25px;
      height: 3px;
      margin: 5px auto;
      transition: all 0.3s ease-in-out;
      background: #fff;
    }
  
    .navbar__item {
      width: 100%;
    }
  
    .navbar__links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }
  
    .navbar__btn {
      padding-bottom: 2rem;
    }
  
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 80px;
      margin: 0;
    }
  
    #mobile-menu {
      position: absolute;
      top: 20%;
      right: 5%;
      transform: translate(5%, 20%);
    }
  
    .navbar__toggle .bar {
      display: block;
      cursor: pointer;
    }
  
    #mobile-menu.is-active .bar:nth-child(2) {
      opacity: 0;
    }
  
    #mobile-menu.is-active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
  
    #mobile-menu.is-active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
</style>