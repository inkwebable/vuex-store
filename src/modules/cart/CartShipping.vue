<template>
  <div class="collection">
    <div class="collection-item">
      <label>
        <input type="checkbox" class="filled-in" @change="handleCheck" />
        <span>Add Shipping (£6)</span>
      </label>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CartShipping',
  methods: {
    ...mapActions(['addShipping', 'removeShipping']),
    handleCheck(e) {
      console.log(e, e.target.checked);
      e.target.checked ? this.addShipping() : this.removeShipping();
    }
  }
};
</script>
