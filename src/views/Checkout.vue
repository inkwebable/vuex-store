<template>
  <div class="container">
    <h1>Checkout</h1>
    <br />
    <div class="checkout" v-if="totalCartCount">
      <div class="checkout-form">
        <YourDetails />
        <br />
        <Address
          :showShipping="true"
          :address="address"
          :handleSave="handleAddress"
        />
        <br />
        <Address
          v-if="!address.useAsShipping"
          subTitle="Shipping"
          :showShipping="false"
          :address="shippingAddress"
          :handleSave="handleShippingAddress"
        />
      </div>
      <div class="checkout-summary">
        <div>
          <h3>Order Summary</h3>
          <CartSummary :changeQuantity="false" :removeItems="false" />
          <CartShipping />
          <CartTotal />
          <button
            class="waves-effect waves-light btn"
            :disabled="!sectionsValid"
            @click="handlePay"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

<style scoped lang="scss">
form {
  border: 1px solid #e0e0e0;
  padding: 20px;
}

.checkout {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  .checkout-form {
    margin-right: 40px;
    width: 600px;
    flex: 1 1 auto;
    min-width: 320px;
  }

  .checkout-summary {
    margin-bottom: 20px;
    width: 300px;
    flex: 1 1 auto;
    min-width: 320px;

    .collection {
      &:first-child {
        margin-top: 0;
      }

      .collection-item img {
        width: 60px;
        margin-right: 10px;
      }
    }
  }
}

</style>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex/dist/vuex.esm.browser';

import CartSummary from '../modules/cart/CartSummary';
import CartTotal from '../modules/cart/CartTotal';
import CartShipping from '../modules/cart/CartShipping';
import YourDetails from '../modules/checkout/YourDetails';
import Address from '../modules/checkout/Address';

export default {
  name: 'Checkout',
  computed: mapGetters(['totalCartCount', 'address', 'shippingAddress', 'sectionsValid']),
  components: {
    CartSummary,
    CartShipping,
    CartTotal,
    YourDetails,
    Address
  },
  methods: {
    ...mapActions(['updateAddress', 'updateShippingAddress']),
    handleAddress(address) {
      console.log('id', address);
      this.updateAddress({ address: address });
    },
    handleShippingAddress(address) {
      console.log('id', address);
      this.updateShippingAddress({ address: address });
    },
    handlePay() {
      alert('You would be taken a payment gateway, but there isn\'t one for this demo.');
    }
  }
};
</script>
