<template>
  <div>
    <h3>{{ subTitle }} Address</h3>
    <form @submit.prevent>
      <div>
        <label htmlFor="address-line-1">Address Line 1</label>
        <input
          type="text"
          name="address-line-1"
          v-model="addressLine1"
          required
          :disabled="!editing"
        />
      </div>
      <div>
        <label htmlFor="address-line-2">Address Line 2</label>
        <input
          type="text"
          name="address-line-2"
          v-model="addressLine2"
          :disabled="!editing"
        />
      </div>
      <div>
        <label htmlFor="address-line-3">Address Line 3</label>
        <input
          type="text"
          name="address-line-3"
          v-model="addressLine3"
          required
          :disabled="!editing"
        />
      </div>
      <div>
        <label htmlFor="postcode">Postcode</label>
        <input
          type="text"
          name="postcode"
          v-model="postcode"
          required
          :disabled="!editing"
        />
      </div>
      <div v-if="showShipping">
        <label htmlFor="useAsShipping">
          <input
            type="checkbox"
            class="filled-in"
            name="email"
            v-model="useAsShipping"
            :disabled="!editing"
            @change="handleUseAsShipping"
          />
          <span>Use address for shipping</span>
        </label>
      </div>
      <button
        v-if="editing"
        class="waves-effect waves-light btn"
        :disabled="!valid"
        @click="onHandleSave"
      >
        Confirm
      </button>
      <button
        v-else
        class="waves-effect waves-light btn"
        :disabled="!valid"
        @click="editing = true"
      >
        Change
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Address',
  props: {
    subTitle: {
      type: String,
      default: 'Your'
    },
    showShipping: {
      type: Boolean,
      default: true
    },
    handleSave: {
      type: Function
    },
    address: {
      type: Object
    }
  },
  computed: {
    valid() {
      return (
        this.addressLine1.length > 0 &&
        this.addressLine3.length > 0 &&
        this.postcode.length > 0
      );
    }
  },
  data() {
    return {
      editing: true,
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      postcode: '',
      useAsShipping: ''
    };
  },
  methods: {
    ...mapActions(['updateUser']),
    handleUseAsShipping(e) {
      console.log(e.target.checked);
    },
    onHandleSave() {
      if (this.valid) {
        const address = {
          addressLine1: this.addressLine1,
          addressLine2: this.addressLine2,
          addressLine3: this.addressLine3,
          postcode: this.postcode
        };

        if (this.showShipping) {
          address.useAsShipping = this.useAsShipping;
        }

        this.handleSave(address);

        this.editing = false;
      }
    }
  },
  created() {
    this.addressLine1 = this.address.addressLine1;
    this.addressLine2 = this.address.addressLine2;
    this.addressLine3 = this.address.addressLine3;
    this.postcode = this.address.postcode;

    if (this.showShipping) {
      this.useAsShipping = this.address.useAsShipping;
    }
  }
};
</script>
