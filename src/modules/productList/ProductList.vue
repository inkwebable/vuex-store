<template>
  <div class="order-list">
    <div class="card" v-for="product in products" :key="product.id">
      <div class="card-image">
        <img :src="product.img" :alt="product.title" />
        <span class="card-title">{{ product.title }}</span>
      </div>
      <div class="card-content">
        <p>{{ product.desc }}</p>
        <br />
        <div class="order">
          <p>
            <b>Price: £{{ product.price }}</b>
          </p>
          <span
            to="/"
            class="btn waves-effect waves-light"
            @click="handleClick(product.id)"
            >{{ inCart(product.id) ? 'Added' : 'add' }}<i v-if="!inCart(product.id)" class="material-icons">add</i></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProductList',
  data() {
    return {
      test: 'test'
    };
  },
  methods: {
    ...mapActions(['addItem','fetchProducts']),
    handleClick(id) {
      console.log('id', id);
      this.addItem({ id: id });
    }
  },
  computed: mapGetters(['products', 'inCart']),
  created() {
    // this.fetchProducts;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  color: #42b983;
}

.card {
  margin: 10px;
  padding: 7px;
  width: 300px;
  flex: 1 1 auto;

  .card-title {
    padding: 10px 10px;
    width: 100%;
    background-color: rgba(250, 235, 215, 0.81);
    color: black;
    font-weight: 400;
  }

  .content {
    padding: 25px;
  }

  .order {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.order-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row-reverse;
}
</style>
