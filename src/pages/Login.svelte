<script>
  import {onMount} from "svelte"
  import loginUser from "../strapi/loginUser";
  import registerUser from "../strapi/registerUser";
  import { navigate } from "svelte-routing";
  import globalStore from "../stores/globalStore";

  let email = "";
  let password = "";
  let username = "default username";
  let isMember = true;
  $: isEmpty = !email || !password || !username || $globalStore.alert;

  function toggleMember() {
    globalStore.toggleItem("alert", true, `Cargado datos....`);
    isMember = !isMember;
    if (!isMember) {
      username = "";
    } else {
      password = "default username";
    }
  }
  onMount(()=>{
    navigate("/")
  })
  async function handleSubmit() {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }
</script>

<style>
  .login {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgb(91, 158, 91);
    min-height: 100vh;
  }
  .form {
    border-radius: 7px;
    padding: 20px;
    box-sizing: border-box;
    z-index: 2;
  }
  .nombre-app {
    text-align: center;
    color: rgb(48, 48, 48);
    font-weight: 700;
    font-size: 2.8em;
    z-index: 10;
  }
  .form-grupo {
    padding: 10px;
  }
  .titulo {
    text-align: center;
    font-weight: 600;
  }
  .boton-google {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 5px;
    background-color: white;
    border: transparent;
    box-shadow: 0px 0px 10px 0px rgb(165 165 165 / 92%);
    border-radius: 4px;
    font-weight: 500;
  }
  .icon-google {
    width: 30px;
    padding-right: 10px;
  }
  .background-skew {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: white;
  }
  .wave1 {
    animation: animate 30s linear infinite;
    z-index: 10;
    animation-delay: 0s;
    bottom: 0;
  }
  .wave2 {
    animation: animate2 15s linear infinite;
    z-index: 9;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }
  .wave3 {
    animation: animate 15s linear infinite;
    opacity: 0.2;
    z-index: 8;
    animation-delay: -2s;
    bottom: 15px;
  }
  .wave4 {
    animation: animate2 30s linear infinite;
    opacity: 0.7;
    z-index: 7;
    animation-delay: -5s;
    bottom: 20px;
  }
  @keyframes animate {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 1000px;
    }
  }
  @keyframes animate2 {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 1000px;
    }
  }
</style>

<section class="login k-grid">
  <h1 class="nombre-app">Calendario</h1>
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <!-- <h2 class="titulo">{isMember ? 'Iniciar Sesion' : 'Registrarse'}</h2> -->
    <button class="boton-google" type="submit">
      <img src="/assets/icon-google.png" alt="" class="icon-google" />
      <span>Iniciar sesión con Google</span>
    </button>
  </form>
  <div class="background-skew wave1" />
  <div class="background-skew wave2" />
  <div class="background-skew wave3" />
  <div class="background-skew wave4" />
</section>
