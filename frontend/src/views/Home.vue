<template>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Scroll Website</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous" />
</head>

  <div class="home">

<body>

  <!-- Hero Section -->
  <div class="hero" id="home">
    <div class="hero__container">
      <h1 class="hero__heading">Para amantes <span>de livros</span></h1>
      <p class="hero__description">mil vidas em uma página</p>
   <img src="imagens/052.png" alt="">
    </div>
  </div>

  <!-- About Section -->
  <div class="main" id="about">
    <div class="main__container">
      <div class="main__img--container">
       <img src="imagens/livro2.gif" alt="">
      </div>
      <div class="main__content">
        <h1>Quem somos?</h1>
        <h2>vamos te ajudar a entender sobre esse mundo</h2>
        <p>leia sobre a comunidade bookstan </p>
        <button class="main__btn"><a href="/detalhes">mais detalhes</a></button>
      </div>
    </div>
  </div>

  <!-- Services Section -->
  <div class="services" id="services">
    <h1>outros serviços</h1>
    <div class="services__wrapper">
      
     
      <div class="services__card">
        <h2>resenhas</h2>
        <p>poste  e guarde suas resenhas</p>
        <a href="/publicacao" target="_blank" class="services__btn"><button>vamos</button></a>
      </div>
      <div class="services__card">
        <h2>generos de livros</h2>
        <p>Lista Definitiva de Gêneros Literários</p>
        <a href="/generos" target="_blank" class="services__btn"><button>vamos</button></a>
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div class="main" id="sign-up">
    <div class="main__container">
      <div class="main__content">
        <h1>faça parte do nosso time</h1>
        <h2>entre em contato hoje</h2>
        <p>Veja nosso diferencial</p>
        <button class="main__btn"><a href="/">mande seu curriculo</a></button>
      </div>
      <div class="main__img--container">
        <div class="main__img--card" id="card-2">
          <i class="fas fa-users"></i>
        </div>
      </div>
    </div>
  </div>



  <!-- loader  -->
<div class="loader-container">
    <img src="imagens/livro.gif" alt="">
</div>

</body>
    
  </div>
</template>

<style scoped>
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kumbh Sans', sans-serif;
    scroll-behavior: smooth;
  }
  
  .navbar {
    background: #bee7f9;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    background: -webkit-linear-gradient(to right,  #0733e4, #8d65ec );
    background: linear-gradient(to right,#5274ff, #7641f1 );
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
  
  /* Hero Section */
  .hero {
    background:#ffffff;
    background: linear-gradient(to right, #ffffff);
    padding: 200px 0;
  }
  
  .hero__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    height: 90%;
    text-align: center;
    padding: 30px;
  }

.hero__container img {
    margin: 10px;
    height: 500px;
    width: 500px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    background-image: linear-gradient(to right,#ffffff);
  
}

  
  .hero__heading {
    font-size: 100px;
    margin-bottom: 24px;
    color: #383839;
  }
  
  .hero__heading span {
    background: #001d8f
    ; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #00b3ff
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #001d8f
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -mo-text-fill-color: transparent;
  }
  
  .hero__description {
    font-size: 60px;
    background: #009dff; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
     #009dff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  
  .highlight {
    border-bottom: 4px solid rgb(132, 0, 255);
  }
  
  @media screen and (max-width: 768px) {
    .hero__heading {
      font-size: 60px;
    }
  
    .hero__description {
      font-size: 40px;
    }
  }
  
  /* About Section */
  .main {
    background-color:#e5f1ff;
    padding: 10rem 0;
  }
  
  .main__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 90%;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    padding: 0 50px;
  }
  
  .main__content {
    color: #000000;
    width: 100%;
  }
  
  .main__content h1 {
    font-size: 2rem;
    background-color: #001d8f;
    background-image: linear-gradient(to top, #00b3ff 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-transform: uppercase;
    margin-bottom: 32px;
  }
  
  .main__content h2 {
    font-size: 4rem;
    background: #00b3ff
    ; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
     #001d8f
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
     #001d8f
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  
  .main__content p {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 700;
  }
  
  .main__btn {
    font-size: 1.8rem;
    background:#ff0000;
      
    background: -webkit-linear-gradient(to right, #001d8f, #5f1cfd);
    background: linear-gradient(to right, #001d8f, #5f1cfd
                               );
    padding: 20px 60px;
    border: none;
    border-radius: 4px;
    margin-top: 2rem;
    cursor: pointer;
    position: relative;
    transition: all 0.35s;
    outline: none;
  }
  
  .main__btn a {
    position: relative;
    z-index: 2;
    color: #000000;
    text-decoration: none;
  }
  
  .main__btn:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #ff0000;
      
    border-radius: 4px;
  }
  
  .main__btn:hover {
    color: #fff;
  }
  
  .main__btn:hover:after {
    width: 100%;
  }
  
  .main__img--container {
    text-align: center;
  }
  
  .main__img--card {
    margin: 10px;
    height: 500px;
    width: 500px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%);
  }
  
  .fa-layer-group,
  .fa-users {
    font-size: 14rem;
  }
  
  #card-2 {
    background: #ffffff;
    background: -webkit-linear-gradient(to right, #001d8f, #5f1cfd
                                       );
    background: linear-gradient(to right,  #001d8f, #5f1cfd
                               );
  }
  
  /* Mobile Responsive */
  @media screen and (max-width: 1100px) {
    .main__container {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 auto;
      height: 90%;
    }
  
    .main__img--container {
      display: flex;
      justify-content: center;
    }
  
    .main__img--card {
      height: 425px;
      width: 425px;
    }
  
    .main__content {
      text-align: center;
      margin-bottom: 4rem;
    }
  
    .main__content h1 {
      font-size: 2.5rem;
      margin-top: 2rem;
    }
  
    .main__content h2 {
      font-size: 3rem;
    }
  
    .main__content p {
      margin-top: 1rem;
      font-size: 1.5rem;
    }
  }
  
  @media screen and (max-width: 480px) {
    .main__img--card {
      width: 250px;
      height: 250px;
    }
  
    .fa-users,
    .fa-layer-group {
      font-size: 4rem;
    }
  
    .main__content h1 {
      font-size: 2rem;
      margin-top: 3rem;
    }
    .main__content h2 {
      font-size: 2rem;
    }
  
    .main__content p {
      margin-top: 2rem;
    }
  
    .main__btn {
      padding: 12px 36px;
      margin: 2.5rem 0;
    }
  }
  
  /* Services Section */
  .services {
    background:#ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10rem 0;
  }
  
  .services h1 {
    background-color:#001d8f
    ;
    background-image: linear-gradient(to right,#001d8f
                                      100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    margin-bottom: 5rem;
    font-size: 2.5rem;
  }
  
  .services__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 3fr;
  }
  
  .services__card {
    margin: 30px;
    height: 425px;
    width: 300px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000000;
    background-image: linear-gradient(to right,  #0f17ff,
      #da22ff);
    transition: 0.3s ease-in;
  }
  
  .services__card:nth-child(2) {
    background: #1fa2ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
       #0f17ff,
      #da22ff
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
       #0f17ff,
      #da22ff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  
  .services__card:nth-child(3) {
    background-image: linear-gradient(
      -225deg,
      #0f17ff,
      #da22ff
    );
  }
  
  .services__card h2 {
    text-align: center;
  }
  
  .services__card p {
    text-align: center;
    margin-top: 24px;
    font-size: 20px;
  }
  
  .services__btn {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  
  .services__card button {
    color: #000000;
    padding: 14px 24px;
    border: none;
    outline: none;
    border-radius: 4px;
    background: #ffffff;
    font-size: 1rem;
  }
  
  .services__card button:hover {
    cursor: pointer;
  }
  
  .services__card:hover {
    transform: scale(1.075);
    transition: 0.3s ease-in;
    cursor: pointer;
  }
  
  @media screen and (max-width: 1300px) {
    .services__wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media screen and (max-width: 768px) {
    .services__wrapper {
      grid-template-columns: 1fr;
    }
  }
  
  
  @media screen and (max-width: 480px) {
    .footer__link--items {
      margin: 0;
      padding: 10px;
      width: 100%;
    }
  }

/*LOADER PAGE*/
.loader-container{
    position: fixed;
    top:0; left:0;
    height:100%;
    width:100%;
    z-index: 10000;
    background:#E7DFDD;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.loader-container img{
    width:35rem;
}

.loader-container.fade-out{
    top:-110%;
    opacity:0;
}

</style>

<script scoped>



function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2000);
}

window.onload = fadeOut;
</script>