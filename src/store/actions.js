import api from '../api';

export default {
  async initialLoading({ commit }) {
    commit('fetchInitialState');

    let result;

    try {
      result = await Promise.all([api.users(), api.basket()]);
    } catch (e) {
      commit('error', 'Internal server error');
      commit('initialLoadingComplete');
      return;
    }

    commit('fetchUsersSuccess', result[0]);
    commit('fetchBasketSuccess', result[1]);
    commit('initialLoadingComplete');
  },

  async updateUsersAndBasket({ commit }) {
    let result;

    try {
      result = await Promise.all([api.users(), api.basket()]);
    } catch (e) {
      commit('error', 'Internal server error'); // show error
      return;
    }

    // update users and basket data
    commit('fetchUsersSuccess', result[0]);
    commit('fetchBasketSuccess', result[1]);
  },

  async grub({ commit, dispatch }, userId) {
    commit('grub', userId); // disable grub button

    try {
      await api.grub(userId);
    } catch (e) {
      commit('error', e.message); // show error
      commit('grubSuccess', userId); // enable button
      return;
    }

    await dispatch('updateUsersAndBasket'); // update data


    // enable grub button for userId
    commit('grubSuccess', userId);
  },

  async freeApples({ commit, dispatch }) {
    commit('freeApples');

    try {
      await api.freeApples();
    } catch (e) {
      commit('error', 'Internal server error');
      commit('freeApplesSuccess');
      return;
    }

    await dispatch('updateUsersAndBasket');

    commit('freeApplesSuccess');
  },
};
