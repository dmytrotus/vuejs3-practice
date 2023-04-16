<script lang="ts">
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>

<template>
    <div class="about">
        <input v-model="text" placeholder="Type here">
        <p>{{ text }}</p>
    </div>
</template>