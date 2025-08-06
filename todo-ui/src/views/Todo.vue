<script>
export default {
  name: "Todo"
}
</script>

<template>
  <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.common-layout{
  width: 100%;
  height: 100vh;
  background: #fff;
}
</style>