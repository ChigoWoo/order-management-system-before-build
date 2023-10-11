<template>
  <div id="error">
    <h2>这是404页面</h2>
    <h2>This is 404 Not Found page.</h2>
    <el-button @click="$router.back()" type="primary" size="mini"
      >返回上一页</el-button
    >
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style scoped>
#error {
  text-align: center;
  margin: 100px auto;
}

h2 {
  margin-bottom: 10px;
}
</style>