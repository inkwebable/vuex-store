const state = {
  products: [
    {
      id: 1,
      title: 'Great Trainers',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 110,
      img:
        'https://images.unsplash.com/photo-1534206303345-04c4c6d95cce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=280'
    },
    {
      id: 2,
      title: 'Adidas',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 80,
      img:
        'https://images.unsplash.com/photo-1519976691384-bd9c1d4a95fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=280'
    },
    {
      id: 3,
      title: 'Reds',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 120,
      img:
        'https://images.unsplash.com/photo-1542665889681-5fd1eb5c9f5b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=280'
    },
    {
      id: 4,
      title: 'Nikey',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 260,
      img:
        'https://images.unsplash.com/photo-1514989940723-e8e51635b782?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=280'
    },
    {
      id: 5,
      title: 'White Trainers',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 160,
      img:
        'https://images.unsplash.com/photo-1543908753-04c7ebbecc21?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=280'
    },
    {
      id: 6,
      title: 'Tip Top',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 90,
      img:
        'https://images.unsplash.com/photo-1542818212-9899bafcb9db?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=280'
    }
  ],
  addedItems: [],
  total: 0
};

const getters = {
  products: state => state.products,
  addedItems: state => state.addedItems,
  total: state => state.total,
  totalCartCount: state =>
    state.addedItems.reduce((acc, item) => acc + item.quantity, 0),
  inCart: state => id => state.addedItems.filter(item => item.id === id).length,
};

const actions = {
  async fetchProducts({ commit }) {
    commit('setProducts', state.products);
  },
  async addItem({ commit }, { id }) {
    let item = state.products.find(item => item.id === id);
    console.log(id);
    let existed_item = state.addedItems.find(item => id === item.id);
    if (existed_item) {
      commit('increaseQuantity', id);
    } else {
      const itemToAdd = { quantity: 1, ...item };
      commit('addItem', itemToAdd);
    }
  },
  async removeItem({ commit }, { id }) {
    commit('removeItem', id);
  },
  increaseQuantity({ commit }, { id }) {
    commit('increaseQuantity', id);
  },
  async reduceQuantity({ commit }, { id }) {
    await commit('reduceQuantity', id);
    let item = state.addedItems.find(item => id === item.id);
    if (item.quantity < 1) {
      commit('removeItem', id);
    }
  },
  addShipping({ commit }) {
    commit('addShipping');
  },
  removeShipping({ commit }) {
    commit('removeShipping');
  }
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  addItem: (state, item) => {
    state.addedItems.push(item);
    state.total += item.price;
  },
  removeItem: (state, id) => {
    let item = state.addedItems.find(item => item.id === id);
    let itemIndex = state.addedItems.findIndex(item => item.id === id);
    if (item) {
      state.total -= item.price * item.quantity;
      state.addedItems.splice(itemIndex, 1);
    }
  },
  increaseQuantity: (state, id) => {
    let itemIndex = state.addedItems.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      state.addedItems[itemIndex].quantity += 1;
      state.total += state.addedItems[itemIndex].price;
    }
  },
  reduceQuantity: (state, id) => {
    let itemIndex = state.addedItems.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      state.addedItems[itemIndex].quantity -= 1;
      state.total -= state.addedItems[itemIndex].price;
    }
  },
  addShipping: state => {
    state.total += 6;
  },
  removeShipping: state => {
    state.total -= 6;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
