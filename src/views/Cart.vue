<template>
  <div class="container">
    <h1>Your cart</h1>
    <template v-if="totalCartCount > 0">
      <div class="cart">
        <h5>You have ordered:</h5>
        <CartSummary />
        <CartTotal totalPrepend="Sub" />
        <router-link to="checkout">
          <button class="waves-effect waves-light btn">Checkout</button>
        </router-link>
      </div>
    </template>
    <template v-else>
      <p>Your cart is empty</p>
    </template>
  </div>
</template>

<style scoped lang="scss">
.cart {
  margin-top: 40px;
}
</style>

<script>
import { mapGetters } from 'vuex';
import CartTotal from '../modules/cart/CartTotal';
import CartSummary from '../modules/cart/CartSummary';

export default {
  name: 'ProductList',
  components: {
    CartTotal,
    CartSummary
  },
  computed: mapGetters(['totalCartCount'])
};
</script>
