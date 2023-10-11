<template>
  <div id="operate-center">
    <h2>This is operation center page!</h2>
    <el-button @click="$router.back()" type="primary" size="mini"
      >返回上一页</el-button
    >
  </div>
</template>

<script>
export default {
  name: "OperateCenter",
};
</script>

<style scoped>
#operate-center {
  text-align: center;
  margin: 100px auto;
}

h2 {
  margin-bottom: 10px;
}
</style>