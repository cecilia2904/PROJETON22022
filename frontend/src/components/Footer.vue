<template>
    <footer>
        
        <section class="social__media">
      <div class="social__media--wrap">
        <div class="footer__logo">
          <a href="/" id="footer__logo">Bookverso</a>
        </div>
        <p class="website__rights">© BOOK 2022. All rights reserved a Cecília.</p>
        <div class="social__icons">
          <a href="https://pt-br.facebook.com/" class="social__icon--link" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/" class="social__icon--link" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/" class="social__icon--link" target="_blank"><i class="fab fa-youtube"></i></a>
          <a href="https://www.linkedin.com/" class="social__icon--link" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://twitter.com/" class="social__icon--link" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </section>
    </footer>
</template>

<script>
export default {
    name: "footer"
}
</script>

<style scoped>

    footer {
        background-color: #bee7f9;;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    
  /* Footer CSS */
  .footer__container {
    background-color:#e5f1ff;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  #footer__logo {
    color: #000000;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
  }
  
  .footer__links {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
  }
  
  .footer__link--wrapper {
    display: flex;
  }
  
  .footer__link--items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
  }
  
  .footer__link--items h2 {
    margin-bottom: 16px;
    color: #000000;
  }
  
  .footer__link--items a {
    color: #000000;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: 0.3 ease-out;
  }
  
  .footer__link--items a:hover {
    color: #000000;
    transition: 0.3 ease-out;
  }
  
  .social__icon--link {
    color: #000000;
    font-size: 24px;
  }
  
  .social__media {
    max-width: 1000px;
    width: 100%;
  }
  
  .social__media--wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;
  }
  
  .social__icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
  }
  
  .website__rights {
    color: #000000;
  }
  
  @media screen and (max-width: 820px) {
    .footer__links {
      padding-top: 2rem;
    }
  
    #footer__logo {
      margin-bottom: 2rem;
    }
  
    .website__rights {
      margin-bottom: 2rem;
    }
  
    .footer__link--wrapper {
      flex-direction: column;
    }
  
    .social__media--wrap {
      flex-direction: column;
    }
  }
</style>


