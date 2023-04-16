<script lang="ts">
import ChildComp13 from './ChildComp13.vue'

export default {
  components: {
    ChildComp13
  },
  data() {
    return {
      childMsg: 'No child msg yet'
    }
  }
}
</script>

<template>
<div class="about">
  <ChildComp13 @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</div>
</template>