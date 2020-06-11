<template>
  <div class="collection">
    <div class="collection-item">
      <b>{{ totalPrepend }} Total: £{{ total }}</b>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CartTotal',
  props: {
    totalPrepend: {
      type: String,
      default: ''
    }
  },
  computed: mapGetters(['total'])
};
</script>
