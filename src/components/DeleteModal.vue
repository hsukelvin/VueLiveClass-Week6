<template>
  <div
    id="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="btn-close" aria-label="Close" @click="hideModal"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ product.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" @click="hideModal">取消</button>
          <button type="button" class="btn btn-danger" @click="removeProduct(product.id)">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      bsModal: {},
      product: {}
    };
  },
  props: ['productObj'],
  watch: {
    productObj() {
      this.product = this.productObj;
    }
  },
  methods: {
    removeProduct(id) {
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`)
        .then((res) => {
          this.$swal(res.data.message);
          this.hideModal();
          this.updateProducts();
        })
        .catch((err) => {
          this.$swal(err.response.data.message);
        });
    },
    updateProducts() {
      this.$emit('update-products');
    },
    openModal() {
      this.bsModal.show();
    },
    hideModal() {
      this.bsModal.hide();
    }
  },
  mounted() {
    this.bsModal = new Modal(this.$refs.modal);
  }
};
</script>
