<template>
  <div>
    <h2 class="mt-5">產品管理頁面</h2>
  </div>

  <div class="container mt-5">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openProductModal('新增產品')">建立新的產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-left">{{ product.origin_price }}</td>
          <td class="text-left">{{ product.price }}</td>
          <td>
            <span class="text-success" v-if="product.is_enabled">啟用</span>
            <span class="text-danger" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openProductModal('編輯產品', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openDeleteModal(product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <ProductModal
      ref="productModal"
      :product-obj="product"
      :title-text="action"
      @update-products="getProducts"
    />
    <DeleteModal ref="deleteModal" :item-obj="product" @delete-item="removeProduct" />
    <PaginationComponent :pagi-obj="pagination" @update-page="getProducts" />
  </div>
</template>

<script>
import ProductModal from '../../components/ProductModal.vue';
import DeleteModal from '../../components/DeleteModal.vue';
import PaginationComponent from '../../components/PaginationComponent.vue';

export default {
  components: {
    ProductModal,
    DeleteModal,
    PaginationComponent
  },
  data() {
    return {
      products: [],
      action: '',
      product: {},
      pagination: {
        current_page: 1
      }
    };
  },
  methods: {
    getProducts(pageNum = this.pagination.current_page) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${pageNum}`
        )
        .then((res) => {
          // console.log(res);
          const { products, pagination } = res.data;
          this.products = products;
          this.pagination = pagination;
        })
        .catch(() => {});
    },
    removeProduct() {
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.product.id}`
        )
        .then((res) => {
          this.$swal(res.data.message);
          this.$refs.deleteModal.hideModal();
          this.getProducts();
        })
        .catch((err) => {
          this.$swal(err.response.data.message);
        });
    },
    openProductModal(action, product = {}) {
      // 編輯產品
      if (action === '編輯產品') {
        this.action = '編輯產品';
        this.product = JSON.parse(JSON.stringify(product));
      } else {
        this.action = '新增產品';
        this.product = product;
      }
      this.$refs.productModal.openModal();
    },
    openDeleteModal(product) {
      this.product = product;
      this.$refs.deleteModal.openModal();
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>
