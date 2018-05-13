<template>
  <div class="user-list">
    <List :list="users" :list-item="ListItem"></List>
    <div class="user-list_center-button">
      <Button :loading="freeApplesLoading" @click="freeApples">Free Aplles</Button>
    </div>
  </div>
</template>

<script>
import Button from './ui/Button';
import List from './ui/List';
import ListItem from './UserListItem';

export default {
  components: {
    List,
    Button,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    ListItem() {
      return ListItem;
    },
    freeApplesLoading() {
      return this.$store.state.loading.freeApples;
    },
  },
  name: 'UserList',
  methods: {
    freeApples() {
      this.$store.dispatch('freeApples');
    },
  },
};
</script>

<style scoped>
  .user-list_center-button {
    margin-top: 15px;
    text-align: center;
  }
</style>
