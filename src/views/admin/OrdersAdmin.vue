<template>
  <h2 class="mt-5">訂單管理頁面</h2>
  <div class="container mt-5">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(order, key) in orders" :key="key">
          <tr v-if="orders.length" :class="{ 'text-secondary': !order.is_paid }">
            <td>{{ createDate(order.create_at) }}</td>
            <!-- $filters.date(item.create_at) -->
            <td><span v-text="order.user.email" v-if="order.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in order.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ order.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="`paidSwitch${order.id}`"
                  v-model="order.is_paid"
                  @change="updatePaid(order)"
                />
                <label class="form-check-label" :for="`paidSwitch${order.id}`">
                  <span v-if="order.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="openOrderModal(order)"
                >
                  檢視
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  @click="openDeleteModal(order)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <OrderModal ref="orderModal" :order-obj="order" @update-paid="updatePaid" />
    <DeleteModal ref="deleteModal" :item-obj="order" @delete-item="removeOrder" />
    <PaginationComponent :pagi-obj="pagination" @update-page="getOrders" />
  </div>
</template>

<script>
import OrderModal from '../../components/OrderModal.vue';
import DeleteModal from '../../components/DeleteModal.vue';
import PaginationComponent from '../../components/PaginationComponent.vue';

export default {
  components: {
    OrderModal,
    DeleteModal,
    PaginationComponent
  },
  data() {
    return {
      orders: [],
      order: {},
      pagination: {
        current_page: 1
      }
    };
  },
  methods: {
    getOrders(pageNum = this.pagination.current_page) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${pageNum}`
        )
        .then((res) => {
          // console.log(res);
          const { orders, pagination } = res.data;
          this.orders = orders;
          this.pagination = pagination;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    removeOrder() {
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.order.id}`
        )
        .then((res) => {
          this.$swal(res.data.message);
          this.$refs.deleteModal.hideModal();
          this.getOrders();
        })
        .catch((err) => {
          this.$swal(err.response.data.message);
        });
    },
    createDate(date) {
      const localDate = new Date(date * 1000);
      return localDate.toLocaleDateString();
    },
    updatePaid(order = this.order) {
      // this.isLoading = true;
      const para = {
        data: {
          is_paid: order.is_paid
        }
      };
      this.$http
        .put(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${order.id}`,
          para
        )
        .then((res) => {
          // this.isLoading = false;
          // const orderComponent = this.$refs.orderModal;
          // orderComponent.hideModal();
          this.$swal(res.data.message);
          this.$refs.orderModal.hideModal();
          this.getOrders(this.pagination.current_page);
        })
        .catch(() => {
          // this.isLoading = false;
          // console.dir(err.message);
          this.$swal('錯誤訊息');
        });
    },
    openOrderModal(order) {
      this.order = { ...order };
      this.$refs.orderModal.openModal();
    },
    openDeleteModal(order) {
      this.order = order;
      this.$refs.deleteModal.openModal();
    }
  },
  mounted() {
    this.getOrders();
  }
};
</script>
