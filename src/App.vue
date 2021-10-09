<template>
  <div id="app">
    <div id="nav" class="nav-height">
      <b-navbar toggleable="lg" type="dark" variant="warning" class="h-100">
        <a href="/">
          <img
            src="./assets/logo.png"
            width="80"
            height="80"
            class="d-inline-block align-top"
            style="margin-right: 100px; margin-left: 50px"
          />
        </a>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="f-nav">
            <b-nav-item href="/" class="mx-3">Home</b-nav-item>
            <b-nav-item href="/menu" class="mx-3">Menu</b-nav-item>
            <b-nav-item href="/aboutUs" class="mx-3">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  background-color: #e4d8b2;
}
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.f-nav {
  font-size: 25px;
  font-weight: 800;
}

.h-10 {
  height: 10%;
}

.nav-link {
  color: rgb(32, 122, 94) !important;
}
.nav-height {
  height: 10vh;
}
</style>
