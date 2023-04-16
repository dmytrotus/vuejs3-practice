<script lang="ts">
export default {
  data() {
    return {
      message: 'Hello World!',
      counter: {
        count: 0
      }
    }
  }
}
</script>

<template>
    <div class="about">
        <h1>{{ message }}</h1>
        <p>Count is: {{ counter.count }}</p>
    </div>
</template>