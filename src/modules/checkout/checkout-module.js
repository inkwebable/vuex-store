const state = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    valid: false,
  },
  address: {
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    postcode: '',
    useAsShipping: true,
    valid: false,
  },
  shippingAddress: {
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    postcode: '',
    valid: false,
  }
};

const getters = {
  user: state => state.user,
  address: state => state.address,
  shippingAddress: state => state.shippingAddress,
  sectionsValid: state => state.user.valid && state.address.valid & state.shippingAddress.valid
};

const actions = {
  updateUser({ commit }, { user }) {
    commit('updateUser', user);
  },
  updateAddress({ commit }, { address }) {
    console.log('updateAddress', address);
    commit('updateAddress', address);
    if (address.useAsShipping) {
      commit('updateShippingAddress', address);
    }
  },
  updateShippingAddress({ commit }, { address }) {
    commit('updateShippingAddress', address);
  },
};

const mutations = {
  updateUser: (state, payload) => {
    const { firstName, lastName, email } = payload;
    state.user.firstName = firstName;
    state.user.lastName = lastName;
    state.user.email = email;
    state.user.valid = true;
  },
  updateAddress: (state, payload) => {
    console.log('pay', payload);
    const { addressLine1, addressLine2, addressLine3, postcode, useAsShipping = true } = payload;
    state.address.addressLine1 = addressLine1;
    state.address.addressLine2 = addressLine2;
    state.address.addressLine3 = addressLine3;
    state.address.postcode = postcode;
    state.address.useAsShipping = useAsShipping;
    state.address.valid = true;
  },
  updateShippingAddress: (state, payload) => {
    const { addressLine1, addressLine2, addressLine3, postcode } = payload;
    state.shippingAddress.addressLine1 = addressLine1;
    state.shippingAddress.addressLine2 = addressLine2;
    state.shippingAddress.addressLine3 = addressLine3;
    state.shippingAddress.postcode = postcode;
    state.shippingAddress.valid = true;

    if (Object.is(state.shippingAddress.addressLine1, state.address.addressLine1)
      && Object.is(state.shippingAddress.addressLine2, state.address.addressLine2)
      && Object.is(state.shippingAddress.addressLine3, state.address.addressLine3)
      && Object.is(state.shippingAddress.postcode, state.address.postcode)) {
      state.address.useAsShipping = true;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
