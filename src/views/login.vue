<template>
  <div>
    <el-row :gutter="2">
      <el-col :span="1" :offset="0"><i>用户名：</i></el-col>
      <el-col :span="6">
        <el-input
          v-model="userName"
          placeholder="用户名"
          size="normal"
          clearable
        ></el-input>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="2">
      <el-col :span="1" :offset="0"><i>密码：</i></el-col>
      <el-col :span="6">
        <el-input
          type="password"
          v-model="password"
          placeholder="密码"
          size="normal"
          clearable
        ></el-input>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="4" :offset="4">
        <el-button type="primary" size="default" @click="login">登陆</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    
  }
};
</script>

<style></style>
