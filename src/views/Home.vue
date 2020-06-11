<template>
  <div class="container">
    <h1 class="center">Products</h1>
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/modules/productList/ProductList.vue";

export default {
  name: "Home",
  components: {
    ProductList
  }
};
</script>
