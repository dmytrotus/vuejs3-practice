<script lang="ts">
export default {
  emits: ['response'],
  created() {
    this.$emit('response', 'hello from child')
  }
}
</script>

<template>
  <h2>Child component with emits</h2>
</template>