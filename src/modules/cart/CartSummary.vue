<template>
  <ul class="collection">
    <li
      class="collection-item avatar"
      v-for="item in addedItems"
      :key="item.id"
    >
      <div class="item-img">
        <img :src="item.img" :alt="item.img" class="" />
      </div>
      <div class="item-desc">
        <span class="title">{{ item.title }}</span>
        <p>{{ item.desc }}</p>
        <p>
          <b>Price: £{{ item.price }}</b>
        </p>
        <p>
          <b>Quantity: {{ item.quantity }}</b>
        </p>
      </div>
      <div class="item-add-remove">
        <div class="add-remove" v-if="changeQuantity">
          <span @click="handleDecrease(item.id)"><i class="material-icons">remove</i></span>
          <span><b>{{item.quantity}}</b></span>
          <span @click="handleIncrease(item.id)"><i class="material-icons">add</i></span>
        </div>
        <button class="waves-effect waves-light btn pink remove" @click="removeItem({id: item.id})">Remove</button>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.collection {
  padding: 5px;

  .collection-item {
    display: flex;

    img {
      width: 130px;
      margin-right: 25px;
    }

    &.avatar {
      padding-left: 20px;
    }

    .title {
      font-size: 20px;
      font-weight: 500;
      display: block;
      margin-bottom: 20px;
    }
  }
}
.item-add-remove {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1 1 auto;
}

.add-remove {
  display: flex;
}

.add-remove i {
  margin: 4px 15px;
  font-size: 1rem;
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CartSummary',
  props: {
    changeQuantity: {
      type: Boolean,
      default: true
    },
    removeItems: {
      type: Boolean,
      default: true
    }
  },
  computed: mapGetters(['addedItems']),
  methods: {
    ...mapActions(['increaseQuantity', 'reduceQuantity', 'removeItem']),
    handleIncrease(id) {
      console.log('id', id);
      this.increaseQuantity({ id: id });
    },
    handleDecrease(id) {
      console.log('id', id);
      this.reduceQuantity({ id: id });
    }
  }
};
</script>
