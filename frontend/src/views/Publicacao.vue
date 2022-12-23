<template>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous" />


  <!-- Hero Section -->
   <!-- Body Section -->
 <div class="body" id="body">
    <div class="body__container">
      <h1 class="body__heading"></h1>
          <h1 class="heading"> <i class="fas fa-book"></i>área criativa<i class="fas fa-book"></i> </h1>
  
<p>Embora esteja apresentando os gêneros de livros mais populares, existem muitos outros gêneros e essa relação muda todos os anos. Todavia, isso não é um problema, mas sim mostra como a literatura tem uma plasticidade incrível.</p>

            <div class="gallery">
                <figure >
                     <img src="imagens/img1.jpg" class="gallery__img" alt="Image 1">
                </figure>
                <figure >
                    <img src="imagens/img2.jpg" class="gallery__img" alt="Image 1">
                </figure>
                <figure >
                     <img src="imagens/img3.jpg" class="gallery__img" alt="Image 1">
                </figure>
                <figure >
                     <img src="imagens/img4.jpg" class="gallery__img" alt="Image 1">
                </figure>
                <figure class="gallery__item gallery__item--5">
                     <img src="imagens/img5.jpg" class="gallery__img" alt="Image 1">
                </figure>
                <figure>
                     <img src="imagens/img6.jpg" class="gallery__img" alt="Image 1">
                </figure>
            </div>
        </div>
  </div>
    
</template>

<script></script>

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
  
  /* Body Section */

  .body {
    background:#ffffff;
    background: linear-gradient(to right, #ffffff);
    padding: 200px 0;
  }
  
  .body__container {
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

.body__container img {
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

  
  .body__heading {
    font-size: 100px;
    margin-bottom: 24px;
    color: #383839;
    
  }
  
  .body__heading span {
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
  
  .body__description {
    font-size: 30px;
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

 .body__description2 img{
align-items: center;
   
 }
.body__description2 span{
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

.detals h3{
   font-family:Georgia;
    scroll-behavior: smooth;
  
}


.gallery {
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows:  1fr ;
}

.gallery__img{
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    height: 90%;
    text-align: center;
    padding: 30px;
}



</style>