<template>
  <div id="app">
    <div id="nav" class="h-10">

      <b-navbar toggleable="lg" type="dark" variant="warning" class="h-100">
        <img src="./assets/logo.png" width="50" height="50" class="d-inline-block align-top" alt="">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/order">Order</b-nav-item>
          </b-navbar-nav>
  
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.h-10{
  height: 10%;
}


</style>
