import { getPath } from '../../../src/api';

// eslint-disable-next-line import/no-webpack-loader-syntax,import/no-webpack-loader-syntax
// eslint-disable-next-line import/no-extraneous-dependencies,import/no-webpack-loader-syntax
const apiInjector = require('inject-loader!../../../src/api');

function createMockApi(response) {
  return apiInjector({
    axios: {
      create() {
        return {
          get() {
            return Promise.resolve(response);
          },
          interceptors: {
            response: {
              use: () => undefined,
            },
          },
        };
      },
    },
  }).default;
}

describe('API', () => {
  describe('getPath', () => {
    it('should work replace path', () => {
      const expectedResult = '/users/1';
      const actualResult = getPath('user', { userId: 1 });
      expect(actualResult).to.equal(expectedResult);
    });

    it('should throw error when path not found', () => {
      expect(getPath.bind(null, 'some_unknown_path')).to.throw();
    });
  });

  it('should return users', async () => {
    const users = [{ name: 'John' }, { name: 'July' }];
    const api = createMockApi(users);
    const actualValue = await api.users();
    expect(actualValue).to.equal(users);
  });

  it('should return users basket', async () => {
    const basket = ['Apple 1', 'Apple 2'];
    const api = createMockApi(basket);
    const actualValue = await api.basket();
    expect(actualValue).to.equal(basket);
  });

  it('should grub from basket', async () => {
    const userId = 1;
    const response = {
      success: true,
      apple: {
        id: 1,
      },
    };
    const api = createMockApi(response);
    const actualValue = await api.grub(userId);
    expect(actualValue).to.equal(response);
  });

  it('should handle grub error', async () => {
    const userId = 1;
    const response = {
      success: false,
      error: 'some server error',
    };
    const api = createMockApi(response);
    const error = await api.grub(userId).catch(err => err);
    expect(error).to.instanceOf(Error).and.have.property('message', response.error);
  });

  it('should handle grub error with default error message', async () => {
    const userId = 1;
    const response = {
      success: false,
    };
    const api = createMockApi(response);
    const error = await api.grub(userId).catch(err => err);
    expect(error).to.instanceOf(Error).and.have.property('message', 'Internal server error');
  });

  it('should free Apples works', async () => {
    const response = {
      success: true,
    };
    const api = createMockApi(response);
    const actualValue = await api.freeApples();
    expect(actualValue).to.equal(response);
  });

  it('should fetch user by id', async () => {
    const userId = 1;
    const response = {
      id: 1,
      name: 'Jonathan',
      apples: [],
    };
    const api = createMockApi(response);
    const actualValue = await api.userById(userId);
    expect(actualValue).to.equal(response);
  });
});
