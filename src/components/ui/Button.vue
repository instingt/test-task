<template>
  <button :disabled="loading" :class="classes" @click="$emit('click')">
    <slot></slot>
    <Loading v-if="loading"></Loading>
  </button>
</template>

<script>
import Loading from './Loading';

export default {
  components: { Loading },
  name: 'Button',
  props: {
    color: {
      validator: value => ['red', 'green'].indexOf(value) !== -1,
      default: 'green',
    },
    size: {
      validator: value => ['small', 'normal'].indexOf(value) !== -1,
      default: 'normal',
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    classes() {
      const classes = [
        'button',
        `button__${this.color}`,
        `button__${this.size}`,
      ];

      if (this.loading) {
        classes.push('button__loading');
      }

      return classes;
    },
  },
};
</script>

<style scoped lang="scss">
  .button {
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:focus {
      outline: thin dotted;
      outline: 5px auto -webkit-focus-ring-color;
      outline-offset: -2px;
    }

    &:active {
      outline: 0;
      box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    }

    &__normal {
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.3333333;
      border-radius: 6px;
    }

    &__small {
      padding: 1px 5px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;

      .loading-spinner {
        margin-top: -7px;
        margin-left: -7px;
        border-width: 2px;
        width: 10px;
        height: 10px;
      }
    }

    &__green {
      color: #fff;
      background-color: #5cb85c;
      border-color: #4cae4c;

      &:hover {
        color: #fff;
        background-color: #449d44;
        border-color: #398439;
      }

      &:focus {
        color: #fff;
        background-color: #449d44;
        border-color: #255625;
      }
    }

    &__red {
      color: #fff;
      background-color: #d9534f;
      border-color: #d43f3a;

      &:hover {
        color: #fff;
        background-color: #c9302c;
        border-color: #ac2925;
      }

      &:focus {
        color: #fff;
        background-color: #c9302c;
        border-color: #761c19;
      }
    }

    &__loading {
      color: transparent;
      position: relative;

      &:hover, &:active, &:focus {
        color: transparent;
      }
    }
  }
</style>
