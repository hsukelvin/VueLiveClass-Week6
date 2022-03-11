<template>
  <div class="vld-parent">
    <Loading v-model:active="isLoading" />
  </div>
  <h2 class="mt-5">產品列表頁面</h2>
  <div class="container mt-5">
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-for="item in products" :key="item.id">
        <tr>
          <td style="width: 200px">
            <div
              style="height: 100px; background-size: cover; background-position: center"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
          </td>
          <td>
            {{ item.title }}
          </td>
          <td>
            <!-- <div class="h5">{{ item.price }} 元</div> -->
            <del class="h6">原價 {{ item.origin_price }} 元</del>
            <div class="h5">現在只要 {{ item.price }} 元</div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <router-link
                type="button"
                class="btn btn-outline-secondary"
                :disabled="loadItemId === item.id ? true : false"
                :to="`/product/${item.id}`"
              >
                <i class="fas fa-spinner fa-pulse" v-if="loadItemId === item.id"> </i>
                查看細節
              </router-link>
              <button
                type="button"
                class="btn btn-outline-danger"
                :disabled="loadItemId === item.id ? true : false"
                @click="addToCart(item.id)"
              >
                <i class="fas fa-spinner fa-pulse" v-if="loadItemId === item.id"></i>
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      loadItemId: '',
      isLoading: false
    };
  },
  methods: {
    // 取得所有產品
    getProducts() {
      this.isLoading = true;
      this.axios
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`)
        .then((res) => {
          const { products } = res.data;
          this.products = products;
          this.isLoading = false;
          // console.log(this.products);
        })
        .catch(() => {
          // console.log(err);
        });
    },
    // 加入購物車
    addToCart(id, quantity = 1) {
      const para = {
        data: {
          product_id: id,
          qty: quantity
        }
      };
      this.loadItemId = id;
      this.isLoading = true;
      this.axios
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, para)
        .then((res) => {
          this.loadItemId = '';
          this.isLoading = false;
          this.$swal(res.data.message);
        })
        .catch((err) => {
          this.$swal(err.data.message);
        });
    }
  },
  created() {
    // 加入 加入購物車監聽
    // 需清掉前一次的 event q
    this.$bus.$off('addCartData');
    this.$bus.$on('addCartData', (para) => {
      const { id, qty } = para;
      this.addToCart(id, qty);
    });
  },
  mounted() {
    this.getProducts();
  }
};
</script>
