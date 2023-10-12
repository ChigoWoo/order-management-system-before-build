<template>
  <el-container>
    <el-header style="margin-top: 15px">
      <el-row>
        <el-col :span="12">
          <p class="nav-left">
            <i class="logo"></i>
            <span>订单管理系统</span>
          </p>
        </el-col>
        <el-col :span="12">
          <p class="nav-right">
            <span>概览</span>
            <span>文档</span>
          </p>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <el-col :xs="24" :sm="16" align="center">
          <img src="../assets/working.png" class="working" />
        </el-col>
        <el-col :xs="24" :sm="8">
          <div>
            <h2 style="color: #409eff">开始与众不同</h2>
            <el-form label-width="" label-position="left">
              <el-form-item label="" class="password-item">
                <el-input
                  prefix-icon="el-icon-user-solid"
                  placeholder="账号"
                  v-model="ruleForm.username"
                ></el-input>
              </el-form-item>
              <el-form-item label="" class="password-item">
                <el-input
                  @keyup.enter.native="validForm"
                  prefix-icon="el-icon-lock"
                  placeholder="密码"
                  show-password
                  v-model="ruleForm.password"
                ></el-input>
              </el-form-item>
              <p class="handle-password">
                <el-checkbox v-model="ruleForm.rememberMe">
                  <span style="font-size: 12px; color: #409eff">记住我</span>
                </el-checkbox>
                <el-link href="/" target="_blank" type="primary">
                  <span style="font-size: 12px">忘记密码</span>
                </el-link>
              </p>
              <p>
                <el-button @click="validForm" type="primary">登录</el-button>
              </p>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top: 40px">
        <el-col :span="8">
          <div class="main-intro">
            <i class="el-icon-magic-stick el-icon"></i>
            <h2 class="magic-stick">美观而强大</h2>
            <p>
              你会发现管理订单从未如此简单，
              无需任何基础立即上手，风格简约不简单，
              多终端自适应，响应快如闪电。
            </p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="main-intro">
            <i class="el-icon-s-marketing el-icon"></i>
            <h2 class="s-marketing">体验超出预期</h2>
            <p>
              一种全新的连接用户与服务的方式，能够在微信内便捷的获取、传播，同时具有出众的使用体验。
            </p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="main-intro">
            <i class="el-icon-odometer el-icon"></i>
            <h2 class="odometer">轻松完成工作</h2>
            <p>
              绑定支付宝或微信，即可开始线上销售。无论您是单个商品还是上百个商品。都可以轻松实现线上交易。
            </p>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <el-row>
        <el-col>
          <div class="footer-box">
            <p>Designed by Chigo</p>
            <p>Copyright ©2023. All Rights Reserved.</p>
          </div>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        rememberMe: false,
      },
    };
  },
  methods: {
    validForm() {
      if (
        this.ruleForm.username.length === 0 ||
        this.ruleForm.password.length === 0
      ) {
        this.$message({
          message: "请输入账号和密码",
          type: "warning",
        });
        return;
      }
      // http://localhost:12306/login 是后端服务处理登录的API
      this.$http
        .post("http://localhost:12306/login", {
          username: this.ruleForm.username,
          password: this.ruleForm.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", response.data.user.id);
          localStorage.setItem("userName", response.data.user.name);
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("userId", response.data.user.id);
          sessionStorage.setItem("userName", response.data.user.name);
          this.$message({
            message: "登录成功",
            type: "success",
          });
          this.$router.push("/home");
        })
        .catch((error) => {
          this.$message({
            message: "账号或密码错误！",
            type: "warning",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  padding: 0;
  margin: 0;
}
.nav-left,
.nav-right {
  height: 36px;
  display: flex;
  align-items: center;
}
.nav-left .logo {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 8px;
  background: url("../assets/logo.png");
  background-size: cover;
  vertical-align: middle;
}
.nav-left span {
  font-size: 24px;
  font-weight: bold;
  color: #409eff;
}
.nav-right {
  justify-content: flex-end;
}
.nav-right span + span {
  margin-left: 20px;
}
.working {
  width: 400px;
  height: 280px;
}
.password-item {
  // width: 300px;
  margin-top: 10px;
  margin-bottom: 5px;
}
.handle-password {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.footer-box {
  height: 50px;
  line-height: 25px;
  text-align: center;
  background-color: #f9fafc;
  font-size: 12px;
}
.el-icon {
  font-size: 30px;
}
.main-intro .el-icon-magic-stick,
h2.magic-stick {
  color: #409eff;
}
.main-intro .el-icon-s-marketing,
h2.s-marketing {
  color: #e6a23c;
}
.main-intro .el-icon-odometer,
h2.odometer {
  color: #67c23a;
}
</style>