<template>
  <nav>
    <div class="nav-wrapper">
      <div class="container">
        <router-link to="/" class="brand-logo">Vuex Store</router-link>
        <ul class="right">
          <li>
            <router-link to="/cart">
              My cart<span class="new badge round" data-badge-caption="">{{totalCartCount}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "NavBar",
  computed: mapGetters(['totalCartCount']),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  background-color: #764abc;
}
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #ffffff;
}

span.badge.round {
  width: auto;
  min-width: 1.5rem;
  border-radius: 30px;
}
</style>
