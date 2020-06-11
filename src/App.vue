<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 10px;
}

h1 {
  margin-top: 20px;
  font-size: 36px;
}

h2 {
  font-size: 32px;
}

h3 {
  font-size: 28px;
}

h4 {
  font-size: 24px;
}

h5 {
  font-size: 24px;
}

.btn {
  height: auto;
  display: flex;

  i {
    margin-left: 5px;
    background-color: transparent;
  }
}

form {
  border: 1px solid #e0e0e0;
  padding: 20px;
}

.material-icons {
  font-size: 2.4em;
  cursor: pointer;
}

</style>

<script>
import NavBar from "./modules/nav/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>
