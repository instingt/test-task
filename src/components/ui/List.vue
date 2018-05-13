<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <component v-if="listItem" :is="listItem" :item="item">{{ item }}</component>
      <template v-else>{{ item }}</template>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    listItem: {},
    list: {
      type: Array,
      default: () => [],
    },
  },
  name: 'List',
};
</script>

<style scoped lang="scss">
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
    display: block;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #ddd;
    color: #cccccc;

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child {
      margin-bottom: 0;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }
</style>
