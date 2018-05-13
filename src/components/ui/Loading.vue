<template>
  <div class="loading-spinner"></div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style scoped>
  .loading-spinner {
    position: absolute;
    margin-top: -14px;
    margin-left: -14px;
    top: 50%;
    left: 50%;
    border: 4px solid #FFF;
    border-top-color: rgba(0, 0, 0, 0);
    border-left-color: rgba(0, 0, 0, 0);
    width: 20px;
    height: 20px;
    opacity: 0.8;
    border-radius: 50%;
    animation: loadingSpinner 0.7s infinite linear;
  }

  @keyframes loadingSpinner {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
  }
</style>
