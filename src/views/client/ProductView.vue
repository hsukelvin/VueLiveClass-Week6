<template>
  <div class="vld-parent">
    <Loading v-model:active="isLoading" />
  </div>
  <h2 class="mt-5">查看單一產品</h2>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-6">
        <img class="img-fluid" :src="product.imageUrl" alt="" />
      </div>
      <div class="col-sm-6 justufy-content">
        <span class="badge bg-primary rounded-pill">{{ product.category }}</span>
        <p>商品描述：{{ product.description }}</p>
        <p>商品內容：{{ product.content }}</p>
        <!-- <div class="h5">{{  }} 元</div> -->
        <del class="h6">原價 {{ product.origin_price }} 元</del>
        <div class="h5">現在只要 {{ product.price }} 元</div>
        <div>
          <div class="input-group">
            <input type="number" class="form-control" min="1" v-model="quantity" />
            <button
              type="button"
              class="btn btn-primary"
              @click="emitAddCartData(product.id, quantity)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      quantity: 1,
      isLoading: false
    };
  },
  methods: {
    // 取得單一產品
    getProduct() {
      this.isLoading = true;
      const ProductId = this.$route.params.id;
      this.axios
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${ProductId}`)
        .then((res) => {
          this.isLoading = false;
          const { product } = res.data;
          this.product = product;
          console.log(this.product);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 加入購物車
    emitAddCartData(id, qty) {
      const para = {
        id,
        qty
      };
      this.$bus.$emit('addCartData', para);
    }
  },
  mounted() {
    this.getProduct();
  }
};
</script>
