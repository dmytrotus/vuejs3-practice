<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<template>
    <div class="about">
        <button @click="increment">count is: {{ count }}</button>
    </div>
</template>