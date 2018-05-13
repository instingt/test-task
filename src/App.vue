<template>
  <div id="app">
    <Alert :text="error"></Alert>
    <Header></Header>
    <div class="container">
      <ApplesApp v-if="!loading"></ApplesApp>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/ui/Alert';
import ApplesApp from './components/ApplesApp';
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Alert,
    Header,
    ApplesApp,
  },
  computed: {
    loading() {
      return this.$store.state.initialLoading;
    },
    error() {
      return this.$store.state.errorMessage;
    },
  },
};
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', 'Lato Light', sans-serif;
    background: #F2F2F2;
  }

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }

  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
</style>
