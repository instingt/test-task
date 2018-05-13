<template>
  <div class="user_item">
    {{ text }}
    <Button @click="grub" :loading="loading" size="small" color="red">Grab apple</Button>
  </div>
</template>

<script>
import Button from './ui/Button';

export default {
  props: ['item'],
  components: {
    Button,
  },
  methods: {
    grub() {
      this.$store.dispatch('grub', this.item.id);
    },
  },
  computed: {
    loading() {
      return this.$store.state.loading[this.item.id];
    },
    text() {
      const { name, apples } = this.item;
      return `${name} has ${apples.length} apples`;
    },
  },
  name: 'UserListItem',
};
</script>

<style scoped>
  .user_item {
    display: flex;
    justify-content: space-between;
  }
</style>
