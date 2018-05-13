<template>
  <div class="alert" v-if="text">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: ['text'],
  name: 'Alert',
};
</script>

<style scoped>
  .alert {
    color: #8a6d3b;
    background-color: #fcf8e3;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #faebcc;
    border-radius: 4px;
    line-height: 28px;
    font-size: 16px;
  }
</style>
