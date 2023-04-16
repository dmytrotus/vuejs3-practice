<script>
import ChildComp12 from './ChildComp12.vue'

export default {
  components: {
    ChildComp12
  },
  data() {
    return {
      greeting: 'Hello from parent'
    }
  }
}
</script>

<template>
  <ChildComp12 :msg="greeting" />
</template>