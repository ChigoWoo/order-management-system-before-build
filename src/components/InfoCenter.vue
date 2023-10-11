<template>
  <div id="info">
    <img src="../assets/avatar.png" alt="logo" />
    <h2>个人中心</h2>
    <p>姓名：Chigo</p>
    <p>性别：男🚹</p>
    <p>年龄：24岁</p>
    <p>职业：程序员-programmer</p>
  </div>
</template>

<script>
export default {
  name: "InfoCenter",
};
</script>

<style>
#info {
  text-align: center;
  margin: 100px auto;
}
img {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
p {
  margin: 10px 0;
}
</style>