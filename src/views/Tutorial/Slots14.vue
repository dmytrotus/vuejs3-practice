<script>
import ChildComp14 from './ChildComp14.vue'

export default {
  components: {
    ChildComp14
  },
  data() {
    return {
      msg: 'from parent'
    }
  }
}
</script>

<template>
  <ChildComp14>Message: {{ msg }}</ChildComp14>
</template>