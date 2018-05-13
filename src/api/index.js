import axios from 'axios';

const routeMap = {
  users: '/users',
  user: '/users/:userId',
  basket: '/basket',
  grub: '/users/:userId/grab',
  freeApples: '/apples/free',
};

export function getPath(routeName, params = {}) {
  let route = routeMap[routeName];

  if (!route) {
    throw new Error(`Can not find route ${route} in routeMap`);
  }

  Object.entries(params).forEach(([key, value]) => {
    route = route.replace(`:${key}`, value);
  });

  return route;
}

class Api {
  constructor() {
    const instance = axios.create({
      baseURL: 'http://hrtest.alycedev.com/',
    });
    instance.interceptors.response.use(data => data.data, error => Promise.reject(error));

    this.axios = instance;
  }

  users() {
    return this.axios.get(getPath('users'));
  }

  userById(userId) {
    return this.axios.get(getPath('user', { userId }));
  }

  basket() {
    return this.axios.get(getPath('basket'));
  }

  async grub(userId) {
    const res = await this.axios.get(getPath('grub', { userId }));
    if (res.success) {
      return res;
    }

    throw new Error(res.error || 'Internal server error');
  }

  freeApples() {
    return this.axios.get(getPath('freeApples'));
  }
}

const api = new Api();

export default api;
