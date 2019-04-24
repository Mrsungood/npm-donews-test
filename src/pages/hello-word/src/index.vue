<template>
  <div>
    {{name}} 你好
  </div>
</template>
<script>
export default {
  name: 'DnHelloWord',
  componentName: 'DnHelloWord',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
