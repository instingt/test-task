import mutations from '../../../../src/store/mutations';

describe('vuex mutations', () => {
  it('should fetchInitialState works', () => {
    const initialStore = {
      initialLoading: false,
    };
    const expectedStore = {
      initialLoading: true,
    };
    mutations.fetchInitialState(initialStore);

    expect(initialStore).to.deep.equals(expectedStore);
  });

  it('should initialLoadingCompete works', () => {
    const initialStore = {
      initialLoading: true,
    };
    const expectedStore = {
      initialLoading: false,
    };
    mutations.initialLoadingComplete(initialStore);

    expect(initialStore).to.deep.equals(expectedStore);
  });

  it('should error works', () => {
    const errorMessage = 'some error';
    const initialStore = {
      errorMessage: '',
    };
    const expectedStore = {
      errorMessage,
    };
    mutations.error(initialStore, errorMessage);

    expect(initialStore).to.deep.equals(expectedStore);
  });

  it('should fetchUserSuccess works', () => {
    const users = [{ name: 'John' }, { name: 'July' }];
    const initialStore = {
      users: [],
    };
    const expectedStore = {
      users,
    };
    mutations.fetchUsersSuccess(initialStore, users);

    expect(initialStore).to.deep.equals(expectedStore);
  });

  it('should fetchBasketSuccess works', () => {
    const basket = ['Apple 1', 'Apple 2'];
    const initialStore = {
      basket: [],
    };
    const expectedStore = {
      basket,
    };
    mutations.fetchBasketSuccess(initialStore, basket);

    expect(initialStore).to.deep.equals(expectedStore);
  });

  it('should grub works', () => {
    const userId = 1;
    const initialStore = {
      loading: {},
    };
    const expectedStore = {
      loading: {
        [userId]: true,
      },
    };
    mutations.grub(initialStore, userId);

    expect(initialStore).to.deep.equals(expectedStore);
  });

  it('should grubSuccess works', () => {
    const userId = 1;
    const initialStore = {
      loading: {
        [userId]: true,
      },
    };
    const expectedStore = {
      loading: {
        [userId]: false,
      },
    };
    mutations.grubSuccess(initialStore, userId);

    expect(initialStore).to.deep.equals(expectedStore);
  });

  it('should freeApples works', () => {
    const initialStore = {
      loading: {},
    };
    const expectedStore = {
      loading: {
        freeApples: true,
      },
    };
    mutations.freeApples(initialStore);

    expect(initialStore).to.deep.equals(expectedStore);
  });

  it('should grubSuccess works', () => {
    const initialStore = {
      loading: {
        freeApples: true,
      },
    };
    const expectedStore = {
      loading: {
        freeApples: false,
      },
    };
    mutations.freeApplesSuccess(initialStore);

    expect(initialStore).to.deep.equals(expectedStore);
  });
});
