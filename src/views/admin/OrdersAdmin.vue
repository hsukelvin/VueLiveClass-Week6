<template>
  <div>
    <h2 class="mt-5">訂單管理頁面</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getOrders() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    }
  },
  mounted() {
    this.getOrders();
  }
};
</script>
