<template>
    <div>
        <InfoHead></InfoHead>
        <div class="loading--screen">
            <pre>READY</pre>
            <pre><C64ursor :showDialog="true" /></pre>
            <pre>
              {{inputText}}<router-link tag="span" to="/dashboard"></router-link>
            </pre>
        </div>
    </div>
</template>

<script>
import InfoHead from "../../components/InfoHead";
import C64ursor from "../../components/cursor";

export default {
  name: "OnBoarding",
  components: {
    InfoHead,
    C64ursor
  },
  data() {
    return {
      inputText: ""
    };
  }
};
</script>

<style scoped lang="scss">
pre {
  margin: 0;
}

textarea {
  width: 100%;
  border: 0;
  height: 100%;
  padding: 0;
  margin: 0;
  background: none;
  font-size: inherit;
  color: inherit;
  outline: none;
}
</style>