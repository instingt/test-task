import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import state from './state';

export default function createStore() {
  return new Vuex.Store({
    state,
    mutations,
    actions,
  });
}
