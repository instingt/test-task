<template>
  <div class="apples-app">
    <div class="apples-app_left">
      <h3>Users</h3>
      <UserList></UserList>
    </div>
    <div class="apples-app_right">
      <h3>Basket</h3>
      <Basket></Basket>
    </div>
  </div>
</template>

<script>
import Basket from './Basket';
import Button from './ui/Button';
import UserList from './UserList';

export default {
  components: {
    UserList,
    Button,
    Basket,
  },
  name: 'ApplesApp',
};
</script>

<style scoped lang="scss">
  .apples-app {
    display: flex;

    &_left, &_right {
      flex-basis: 100%;
      margin: 10px 20px;
    }
  }

  h3 {
    color: #95a5a6;
    font-weight: 400;
    font-family: 'Lato', 'Lato Light', sans-serif;
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    .apples-app {
      flex-wrap: wrap;
    }
  }
</style>
