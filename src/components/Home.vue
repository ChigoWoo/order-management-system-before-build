<template>
  <el-container>
    <el-header class="header">
      <el-row>
        <el-col :span="6">
          <p class="nav-left">
            <i class="el-icon-bank-card"></i><span>订单管理系统</span>
          </p>
        </el-col>
        <el-col :span="15">
          <el-menu
            default-active="/"
            class="home-menu"
            mode="horizontal"
            text-color="#fff"
            active-text-color="#fff"
            :router="true"
            style="border: none; background: #409eff"
          >
            <el-menu-item class="el-menu-item" index="/">订单管理</el-menu-item>
            <el-menu-item class="el-menu-item" index="/operation-center"
              >处理中心</el-menu-item
            >
            <el-menu-item class="el-menu-item" index="/platform"
              >工作台</el-menu-item
            >
          </el-menu>
        </el-col>
        <el-col :span="3">
          <div class="nav-right">
            <el-badge :value="99" class="item">
              <i class="el-icon-message"></i>
            </el-badge>
            <el-dropdown class="user-dropdown-link">
              <span class="username">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user-solid">
                  <span class="info-center"
                    ><router-link
                      to="/info-center"
                      style="text-decoration: none; color: #333"
                      >个人中心</router-link
                    ></span
                  >
                </el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-check" @click.native="logout"
                  >退出</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <p class="menu-name">菜单</p>
        <el-menu default-active="1" class="menu-vertical">
          <el-menu-item index="1">
            <i class="el-icon-s-data"></i>
            <span slot="title">整体数据</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-s-custom"></i>
            <span slot="title">客户管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-map-location"></i>
            <span slot="title">地址管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-s-management"></i>
            <span slot="title">区域管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">部门管理</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-s-home"></i>
            <span slot="title">员工管理</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title">短信通知</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <el-row :gutter="40">
            <el-col :span="12">
              <el-card class="box-card">
                <div slot="header" style="font-weight: bold">关键指标</div>
                <div class="progress">
                  <el-progress
                    class="progress-bar"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="25"
                    :format="(val) => moneyFormat(val, '回款率')"
                    status="exception"
                  ></el-progress>
                </div>
                <div class="progress">
                  <el-progress
                    class="progress-bar"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="50"
                    :format="(val) => moneyFormat(val, '库存')"
                  ></el-progress>
                </div>
                <div class="progress">
                  <el-progress
                    class="progress-bar"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="75"
                    :format="(val) => moneyFormat(val, '满意率')"
                    status="warning"
                  ></el-progress>
                </div>
                <div class="progress">
                  <el-progress
                    class="progress-bar"
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="100"
                    :format="(val) => moneyFormat(val, '送达率')"
                    status="success"
                  ></el-progress>
                </div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <div slot="header" style="font-weight: bold">
                  市场占有率 VS 市场渗透率
                </div>
                <el-progress
                  type="dashboard"
                  :width="180"
                  :percentage="62"
                  style="margin-right: 50px"
                ></el-progress>
                <el-progress
                  type="dashboard"
                  :width="180"
                  :percentage="88"
                  color="orange"
                ></el-progress>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="40">
            <el-col :span="12">
              <div
                style="margin: 15px 20px; font-size: 16px; font-weight: bold"
              >
                正常订单
              </div>
              <el-table :data="normalOrder" height="500" border stripe>
                <el-table-column
                  prop="id"
                  label="订单编号"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="date"
                  label="日期"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="price"
                  label="价格"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="user.name"
                  label="姓名"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="user.phone"
                  label="电话"
                  align="center"
                ></el-table-column>
              </el-table>
            </el-col>
            <el-col :span="12">
              <div
                style="margin: 15px 20px; font-size: 16px; font-weight: bold"
              >
                退款订单
              </div>
              <el-table :data="returnOrder" height="500" border stripe>
                <el-table-column
                  prop="id"
                  label="订单编号"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="date"
                  label="日期"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="price"
                  label="价格"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="user.name"
                  label="姓名"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="user.phone"
                  label="电话"
                  align="center"
                ></el-table-column>
              </el-table>
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
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      orders: [],
    };
  },
  computed: {
    username() {
      return localStorage.getItem("userName");
    },
    normalOrder() {
      return this.orders.filter((order) => {
        return !order.isReturn;
      });
    },
    returnOrder() {
      return this.orders.filter((order) => {
        return order.isReturn;
      });
    },
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
    moneyFormat(val, text) {
      return `${text} ${val}%`;
    },
  },
  created() {
    this.$http
      .get("http://localhost:12306/api/orders", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        this.orders = response.data;
      });
  },
};
</script>

<style lang="scss" scoped>
p {
  padding: 0;
  margin: 0;
}
.header {
  background-color: #409eff;
  height: 64px !important;
}
.header .nav-left,
.header .nav-right {
  display: flex;
  align-items: center;
  height: 64px;
}
.header .nav-left {
  margin: 0px 0px;
  line-height: 64px;
}

.header .nav-left i {
  font-size: 30px;
  line-height: 64px;
  margin-right: 8px;
  color: #fff;
}
.header .nav-left span {
  font-size: 24px;
  font-weight: bold;
  line-height: 64px;
  color: #fff;
}
.header .el-menu-item {
  font-size: 16px;
  font-weight: bold;
}
.header .nav-right {
  height: 64px;
  justify-content: space-between;
}
.header .nav-right .el-icon-message {
  font-size: 26px;
  color: #fff;
}
.header .nav-right .username {
  color: #fff;
}

.menu-name {
  border-right: solid 1px #e6e6e6;
  margin: 0;
  padding-bottom: 10px;
  padding-left: 60px;
  padding-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

.box-card + div {
  font-weight: bold;
}

.progress + .progress {
  margin-top: 35px;
}

.footer-box {
  height: 50px;
  line-height: 25px;
  text-align: center;
  background-color: #f9fafc;
  font-size: 12px;
}
</style>