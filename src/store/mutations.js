export default {
  fetchInitialState(state) {
    state.initialLoading = true;
  },
  fetchUsersSuccess(state, users) {
    state.users = users;
  },
  fetchBasketSuccess(state, basket) {
    state.basket = basket;
  },
  initialLoadingComplete(state) {
    state.initialLoading = false;
  },
  error(state, errorMessage) {
    state.errorMessage = errorMessage;
  },
  grub(state, userId) {
    state.loading = { ...state.loading, [userId]: true };
  },
  grubSuccess(state, userId) {
    state.loading = { ...state.loading, [userId]: false };
  },
  freeApples(state) {
    state.loading = { ...state.loading, freeApples: true };
  },
  freeApplesSuccess(state) {
    state.loading = { ...state.loading, freeApples: false };
  },
};
