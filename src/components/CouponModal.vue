<template>
  <div
    id="couponModal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="couponModalLabel">
            <span>{{ titleText }}</span>
          </h5>
          <button type="button" class="btn-close" aria-label="Close" @click="hideModal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="coupon.title"
              placeholder="請輸入標題"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              v-model="coupon.code"
              placeholder="請輸入優惠碼"
            />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input type="date" class="form-control" id="due_date" v-model="due_date" />
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="price"
              min="0"
              v-model.number="coupon.percent"
              placeholder="請輸入折扣百分比"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="coupon.is_enabled"
                id="is_enabled"
              />
              <label class="form-check-label" for="is_enabled"> 是否啟用 </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="hideModal">Close</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="titleText !== '更新優惠券' ? addCoupon() : editCoupon(coupon.id)"
          >
            {{ titleText !== '更新優惠券' ? '新增優惠卷' : '更新優惠券' }}
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
      coupon: {},
      due_date: ''
    };
  },
  props: ['couponObj', 'titleText'],
  watch: {
    couponObj() {
      this.coupon = this.couponObj;
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.coupon.due_date * 1000).toISOString().split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.coupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    }
  },
  methods: {
    addCoupon() {
      const data = {
        data: this.coupon
      };
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`, data)
        .then((res) => {
          this.$swal(res.data.message);
          this.hideModal();
          this.updateCoupons();
        })
        .catch((err) => {
          this.$swal(JSON.stringify(err.response.data.message));
        });
    },
    editCoupon(id) {
      console.log(id);
      const data = {
        data: this.coupon
      };
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`, data)
        .then((res) => {
          this.$swal(res.data.message);
          this.hideModal();
          this.updateCoupons();
        })
        .catch((err) => {
          this.$swal(err.response.data.message);
        });
    },
    updateCoupons() {
      this.$emit('update-coupons');
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
