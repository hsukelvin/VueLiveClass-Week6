<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">雜貨店 {{ platformName }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" v-if="platformName === '前台'">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">關於</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">後臺管理</router-link>
          </li>
        </ul>
        <ul class="navbar-nav" v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/">返回前台</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">產品管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders">訂單管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupons">優惠卷管理</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="$emit('sign-out')">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['platformName']
};
</script>
