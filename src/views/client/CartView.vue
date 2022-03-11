<template>
  <div class="vld-parent">
    <Loading v-model:active="isLoading" />
  </div>
  <h2 class="mt-5">購物車頁面</h2>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-6">
        <div class="text-end">
          <button
            class="btn btn-outline-danger"
            type="button"
            @click="deleteCartAllItem"
            :disabled="btnStatus"
          >
            清空購物車
          </button>
        </div>
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 150px">數量/單位</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    :disabled="loadItemId === item.id ? true : false"
                    @click="deleteCartItem(item.id)"
                  >
                    <i class="fas fa-spinner fa-pulse" v-if="loadItemId === item.id"></i>
                    x
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group mb-3">
                      <input
                        min="1"
                        type="number"
                        class="form-control"
                        :disabled="loadItemId === item.id ? true : false"
                        v-model.number="item.qty"
                        @blur="updateCartItem(item)"
                      />
                      <span class="input-group-text" id="basic-addon2">
                        {{ item.product.unit }}
                      </span>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <small class="text-success" v-if="cart.final_total !== cart.total"
                    >折扣價：</small
                  >
                  {{ item.final_total }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ cart.total }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="col-sm-6">
        <VForm />
      </div>
    </div>
  </div>
</template>

<script>
import VForm from '../../components/FormComponent.vue';

export default {
  components: {
    VForm
  },
  data() {
    return {
      cart: {},
      loadItemId: '',
      isLoading: false,
      btnStatus: false,
      user: {}
    };
  },
  methods: {
    // 取得購物車資料
    getCart() {
      this.isLoading = true;
      this.axios
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data;
          if (this.cart.carts.length === 0) {
            this.btnStatus = !this.btnStatus;
          }
          this.isLoading = false;
          // console.log(this.cart);
        })
        .catch((err) => {
          this.$swal(err.data.message);
          // console.log(err);
        });
    },
    // 清空購物車
    deleteCartAllItem() {
      this.isLoading = true;
      this.axios
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          this.getCart();
          this.isLoading = false;
          this.$swal(res.data.message);
        })
        .catch((err) => {
          this.$swal(err.data.message);
        });
    },
    // 更新購物車單一產品數量
    updateCartItem(item) {
      const { qty, id } = item;
      const para = {
        data: {
          product_id: item.product_id,
          qty
        }
      };
      this.loadItemId = id;
      this.isLoading = true;
      this.axios
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`, para)
        .then((res) => {
          this.loadItemId = '';
          this.isLoading = false;
          this.getCart();
          this.$swal(res.data.message);
        })
        .catch((err) => {
          this.$swal(err.data.message);
        });
    },
    // 刪除購物車單一產品
    deleteCartItem(id) {
      this.loadItemId = id;
      this.isLoading = true;
      this.axios
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          this.loadItemId = '';
          this.isLoading = false;
          this.getCart();
          this.$swal(res.data.message);
        })
        .catch((err) => {
          this.$swal(err.data.message);
        });
    }
  },
  mounted() {
    this.getCart();
  }
};
</script>
