<script>
  import { afterUpdate, onMount } from "svelte";
  // pages
  import Login from "./pages/Login.svelte";
  import ProductTemplate from "./pages/ProductTemplate.svelte";
  import Products from "./pages/Products.svelte";
  import Home from "./pages/Home.svelte";
  // router
  import { Router, Route, Link, navigate } from "svelte-routing";
  // components
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Sidebar from "./components/Navbar/Sidebar.svelte";

  import user from "./stores/user";
  import globalStore from "./stores/globalStore";
  import Alert from "./components/Alert.svelte";
  import { rangeCalendar } from "./stores/calendar";

  onMount(() => {
    rangeCalendar($globalStore.año, $globalStore.mes, $globalStore.diaHoy);
    if (!user.jwt) {
      navigate("/login");
    }
  });
</script>

<Router>
  <!-- <Navbar /> -->
  {#if $globalStore.sidebar}
    <Sidebar />
  {/if}
  {#if $globalStore.alert}
    <Alert />
  {/if}
  <Route path="/" component={Home} />
  <Route path="/login" component={Login} />
  <Route path="/products" component={Products} />
  <Route path="/products/:id" component={ProductTemplate} />
</Router>
