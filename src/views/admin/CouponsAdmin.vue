<template>
  <h2 class="mt-5">優惠卷管理頁面</h2>
  <div class="container mt-5">
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openCouponModal('新增優惠卷')">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(coupon, key) in coupons" :key="key">
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.percent }}%</td>
          <td>{{ createDate(coupon.due_date) }}</td>
          <td>
            <span v-if="coupon.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openCouponModal('更新優惠券', coupon)"
              >
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm" @click="openDeleteModal(coupon)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <CouponModal
      ref="couponModal"
      :coupon-obj="coupon"
      :title-text="action"
      @update-coupons="getCoupons"
    />
    <DeleteModal ref="deleteModal" :item-obj="coupon" @delete-item="deleteCoupon" />
    <PaginationComponent :pagi-obj="pagination" @update-page="getCoupons" />
  </div>
</template>

<script>
import CouponModal from '../../components/CouponModal.vue';
import DeleteModal from '../../components/DeleteModal.vue';
import PaginationComponent from '../../components/PaginationComponent.vue';

export default {
  components: {
    CouponModal,
    DeleteModal,
    PaginationComponent
  },
  data() {
    return {
      coupons: [],
      action: '',
      coupon: {},
      pagination: {
        current_page: 1
      }
    };
  },
  methods: {
    getCoupons(pageNum = this.pagination.current_page) {
      this.$http(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${pageNum}`
      )
        .then((res) => {
          console.log(res);
          const { coupons, pagination } = res.data;
          this.coupons = coupons;
          this.pagination = pagination;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCoupon() {
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.coupon.id}`
        )
        .then((res) => {
          console.log(res);
          this.$swal(res.data.message);
          this.deleteCoupon.hideModal();
          this.getCoupons();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createDate(date) {
      const localDate = new Date(date * 1000);
      return localDate.toLocaleDateString();
    },
    openCouponModal(action, coupon = {}) {
      // 編輯產品
      if (action === '更新優惠券') {
        this.action = '更新優惠券';
        this.coupon = { ...coupon };
      } else {
        this.action = '新增優惠卷';
        this.coupon = { due_date: new Date().getTime() / 1000 };
      }
      this.$refs.couponModal.openModal();
    },
    openDeleteModal(coupon) {
      this.coupon = coupon;
      this.$refs.deleteModal.openModal();
    }
  },
  mounted() {
    this.getCoupons();
  }
};
</script>
