<template>
  <div>
    <List :list="basket"></List>
  </div>
</template>

<script>
import List from './ui/List';

export default {
  components: {
    List,
  },
  name: 'Basket',
  computed: {
    basket() {
      return this.$store.state.basket;
    },
  },
};
</script>

<style scoped>

</style>
