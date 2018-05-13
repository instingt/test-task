import sinon from 'sinon';

// eslint-disable-next-line import/no-webpack-loader-syntax,import/no-webpack-loader-syntax
// eslint-disable-next-line import/no-extraneous-dependencies,import/no-webpack-loader-syntax
const actionsInjector = require('inject-loader!../../../../src/store/actions');

function createActions(config) {
  return actionsInjector({
    '../api': config,
  }).default;
}

function checkChain(stub, expectedCommitChain) {
  stub
    .getCalls()
    .forEach((call, index) => expect(call.args).to.deep.equals(expectedCommitChain[index]));
}

describe('vuex actions', () => {
  let commit;

  beforeEach(() => {
    commit = sinon.stub();
  });

  it('should work initialLoading action', async () => {
    // create api stubs
    const users = sinon.stub().returns('users');
    const basket = sinon.stub().returns('basket');

    // expected commit chain with args
    // format: array of ARGS
    // ARGS: ['mutationName', ...mutationArgs?]
    const expectedCommitChain = [
      ['fetchInitialState'],
      ['fetchUsersSuccess', 'users'],
      ['fetchBasketSuccess', 'basket'],
      ['initialLoadingComplete'],
    ];

    // create actions with injected API stub
    const actions = createActions({
      users,
      basket,
    });

    // call action
    await actions.initialLoading({ commit });

    // check chain with args
    checkChain(commit, expectedCommitChain);
    sinon.assert.calledOnce(users);
    sinon.assert.calledOnce(basket);
  });

  it('should handle initialLoading errors', async () => {
    const users = sinon.stub().rejects('error');
    const basket = sinon.stub().rejects('error');

    const actions = createActions({
      users,
      basket,
    });

    const expectedCommitChain = [
      ['fetchInitialState'],
      ['error', 'Internal server error'],
      ['initialLoadingComplete'],
    ];

    await actions.initialLoading({ commit });

    checkChain(commit, expectedCommitChain);
    sinon.assert.calledOnce(users);
    sinon.assert.calledOnce(basket);
  });

  it('should updateUsersAndBasket works', async () => {
    const users = sinon.stub().returns('users');
    const basket = sinon.stub().returns('basket');

    const action = createActions({
      users,
      basket,
    });

    const expectedCommitChain = [
      ['fetchUsersSuccess', 'users'],
      ['fetchBasketSuccess', 'basket'],
    ];

    await action.updateUsersAndBasket({ commit });

    checkChain(commit, expectedCommitChain);
    sinon.assert.calledOnce(users);
    sinon.assert.calledOnce(basket);
  });

  it('should handle updateUsersAndBasket errors', async () => {
    const users = sinon.stub().rejects('error');
    const basket = sinon.stub().rejects('error');

    const action = createActions({
      users,
      basket,
    });

    const expectedCommitChain = [
      ['error', 'Internal server error'],
    ];

    await action.updateUsersAndBasket({ commit });

    checkChain(commit, expectedCommitChain);
    sinon.assert.calledOnce(users);
    sinon.assert.calledOnce(basket);
  });

  it('should grub works', async () => {
    const grub = sinon.stub().returns('grub');
    const dispatch = sinon.stub();
    const userId = 1;

    const action = createActions({
      grub,
    });

    const expectedCommitChain = [
      ['grub', userId],
      ['grubSuccess', userId],
    ];

    const expectedDispatchChain = [
      ['updateUsersAndBasket'],
    ];

    await action.grub({
      commit,
      dispatch,
    }, userId);

    checkChain(commit, expectedCommitChain);
    checkChain(dispatch, expectedDispatchChain);
    sinon.assert.calledOnce(grub);
  });

  it('should handle grub errors', async () => {
    const error = 'some server error';
    const grub = sinon.stub().rejects(new Error(error));
    const dispatch = sinon.stub();
    const userId = 1;

    const action = createActions({
      grub,
    });

    const expectedCommitChain = [
      ['grub', userId],
      ['error', error],
      ['grubSuccess', userId],
    ];

    const expectedDispatchChain = [];

    await action.grub({
      commit,
      dispatch,
    }, userId);

    checkChain(commit, expectedCommitChain);
    checkChain(dispatch, expectedDispatchChain);
    sinon.assert.calledOnce(grub);
  });

  it('should freeApples works', async () => {
    const freeApples = sinon.stub().returns('grub');
    const dispatch = sinon.stub();

    const action = createActions({
      freeApples,
    });

    const expectedCommitChain = [
      ['freeApples'],
      ['freeApplesSuccess'],
    ];

    const expectedDispatchChain = [
      ['updateUsersAndBasket'],
    ];

    await action.freeApples({
      commit,
      dispatch,
    });

    checkChain(commit, expectedCommitChain);
    checkChain(dispatch, expectedDispatchChain);
    sinon.assert.calledOnce(freeApples);
  });

  it('should handle freeAplles errors', async () => {
    const freeApples = sinon.stub().rejects('error');
    const dispatch = sinon.stub();

    const action = createActions({
      freeApples,
    });

    const expectedCommitChain = [
      ['freeApples'],
      ['error', 'Internal server error'],
      ['freeApplesSuccess'],
    ];

    const expectedDispatchChain = [];

    await action.freeApples({
      commit,
      dispatch,
    });

    checkChain(commit, expectedCommitChain);
    checkChain(dispatch, expectedDispatchChain);
    sinon.assert.calledOnce(freeApples);
  });
});
