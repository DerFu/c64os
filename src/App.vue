<template>
  <div id="app">
      <div class="outer">
        <div class="inner">
          <transition name="fade">
            <router-view></router-view>
          </transition>        
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    OnBoarding: () => import('./container/OnBoarding'),
    InfoHead: () => import('./components/InfoHead')
  }
};
</script>

<style lang='scss'>
@import './scss/variables.scss';

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: $fontFamily;
  text-transform: uppercase;
}
pre {
  font-family: $fontFamily;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $blue1;
  background: $blue1;
  height: 100%;
}

.outer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  background: rgb(168, 159, 253);
  height: 100%;
}

.outer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: stretch;
  height: 100%;
}
.inner {
  background: $darkBlue;
  order: 0;
  flex: 1 1 auto;
  align-self: stretch;
  margin: 48px;
}

.inner {
  margin: 8%;
  order: 0;
  flex: 1 1 auto;
  align-self: stretch;
  background: rgb(78, 47, 225);
  color: rgb(168, 159, 253);
}
</style>
