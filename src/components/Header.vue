<template>
  <header>
    <div class="container">
      <div class="brand">SITE</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
  header {
    height: 50px;
    background: #199AD5;

    .brand {
      padding: 15px 15px;
      font-size: 18px;
      line-height: 20px;
      color: #ffffff;
      font-weight: bold;
    }
  }
</style>
