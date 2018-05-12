<template>
  <div>
      <div class="overlay"></div>
      <div class="dialog">
        Hi!, I'm Cursor
        <!-- <div class="answers">
            <pre v-for="(answer, i) in answers" :key="i">
                {{answer.text}}
            </pre>
        </div> -->
      </div>
  </div>
</template>
<script>
import C64ursor from '../../components/cursor';

export default {
  components: {
    C64ursor
  },
  data() {
    return {
      answers: [
        {
          text: 'Who?'
        },
        {
          text: 'eeeh..'
        },
        {
          text: 'what?'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 800;
  background: rgba(0, 0, 0, 0.8);
}
.dialog {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 810;
  .answers {
    pre {
      color: $yellow;
      & > .selected,
      &:hover {
        color: $purple;
      }
    }
  }
}
</style>

