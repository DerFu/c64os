<template>
  <span class="cursor blink">▋<CursorDialog v-if="showDialog" /></span>
</template>
<script>
import CursorDialog from './dialog.vue';

export default {
  name: 'C64ursor',
  props: ['showDialog'],
  components: {
    CursorDialog
  }
};
</script>
<style lang="scss" scoped>
@import '../../scss/variables.scss';

.cursor {
  position: relative;
  color: $lightBlue;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.blink {
  animation: blink 1.4s step-start 0s infinite;
}
</style>
