<script>
export default {
  mounted() {
    this.$refs.p.textContent = 'mounted and updated via refs!'
  }
}
</script>

<template>
<div class="about">
  <p ref="p">hello</p>
</div>
</template>