<template>
  <button :class="cssClasses" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onClick() {
      this.count++;
    },
  },
  computed: {
    cssClasses() {
      let classes = ["app-button"];
      classes.push(`app-button--${this.type}`);
      return classes.join(' ')
    },
  },
};
</script>

<style scoped>
.app-button {
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  background: #eaeff3;
  cursor: pointer;
  transition-property: color, background, box-shadow;
  transition-duration: 0.1s;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
}
.app-button--primary {
  color: #fff;
  background: #1c93e2;
}
</style>
