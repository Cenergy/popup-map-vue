<template>
  <div class="own-popup">123 ---{{hello}}</div>
</template>

<script>
export default {
  data() {
    return {
      hello: 1
    };
  }
};
</script>

<style lang="less">
.own-popup {
  padding: 10px;
  max-width: 200px;
  background: #fff;
  border-radius: 4px;
}
</style>
