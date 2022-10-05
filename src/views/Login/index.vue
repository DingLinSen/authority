<template>
  <div class="login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item>
        <h2>系统登录</h2>
      </el-form-item>
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="code" class="code-con">
        <el-input v-model="ruleForm.code" placeholder="请输入验证码" class="code"></el-input>
        <img :src="imgCodeUrl" alt="" @click="handleCode()" />
      </el-form-item>
      <el-form-item>
        <div class="el-form-item-content">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login, code, getUser } from '../../api/user'
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
        code: '',
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        text: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      },
      imgCodeUrl: '',
    }
  },
  methods: {
    // 点击确定按钮进行校验
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) return
        this.handleLogin()
      })
    },

    // 登录方法
    async handleLogin() {
      try {
        const token = await this.$store.dispatch('login', this.ruleForm)
        if (!token) return
        this.$message.success('登录成功')
        this.$router.push('/')
      } catch (error) {
        console.log(error.message)
      }
    },

    // 获取验证码
    async handleCode() {
      try {
        const response = await code()
        this.imgCodeUrl = window.URL.createObjectURL(response.data)
      } catch (error) {
        console.log(error.message)
      }
    },

    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
  created() {
    this.handleCode()
  },
}
</script>
<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .demo-ruleForm {
    height: 300px;
    width: 350px;
    box-shadow: 0 0 25px #cac6c6;
    border-radius: 10px;
    padding: 20px 35px;
    .code-con {
      .code {
        float: left;
        width: 64%;
      }
      img {
        float: right;
      }
    }
    .el-form-item {
      margin-bottom: 22px;
      ::v-deep .el-input__inner {
        height: 36px;
      }
      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 24px;
      }
    }
    .el-form-item-content {
      display: flex;
      justify-content: space-between;
      .el-button {
        padding: 10px 20px;
        width: 47%;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
