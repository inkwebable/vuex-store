<template>
  <div>
    <h3>Your Details</h3>
    <form @submit.prevent>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" v-model="firstName" required :disabled="!editing" />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" v-model="lastName" required :disabled="!editing" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" v-model="email" required :disabled="!editing" />
      </div>
      <button v-if="editing" class="waves-effect waves-light btn" :disabled="!valid" @click="handleSave">Confirm</button>
      <button v-else class="waves-effect waves-light btn" :disabled="!valid" @click="editing = true">Change</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'YourDetails',
  computed: {
    valid() {
      return (
        this.firstName.length > 0 &&
        this.lastName.length > 0 &&
        this.email.length > 0
      );
    }
  },
  data() {
    return {
      editing: true,
      firstName: '',
      lastName: '',
      email: ''
    };
  },
  methods: {
    ...mapActions(['updateUser']),
    handleSave() {
      if (this.valid) {
        this.updateUser({
          user: {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
          }
        });

        this.editing = false;
      }
    }
  }
};
</script>
