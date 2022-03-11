<template>
  <div class="vld-parent">
    <Loading v-model:active="isLoading" />
  </div>
  <Form v-slot="{ errors }" @submit="createOrder">
    <!-- {{ errors }} {{errors['email']}} {{errors['姓名']}} {{errors['電話']}} {{errors['地址']}}  -->
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <Field
        id="email"
        name="email"
        type="email"
        class="form-control"
        rules="email|required"
        :class="{ 'is-invalid': errors['email'] }"
        placeholder="請輸入 Email"
        v-model="user.email"
      />
      <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="name" class="form-label">收件人姓名</label>
      <Field
        id="name"
        name="姓名"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['姓名'] }"
        placeholder="請輸入姓名"
        rules="required"
        v-model="user.name"
      />
      <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="tel" class="form-label">收件人電話</label>
      <Field
        id="tel"
        name="電話"
        type="tel"
        class="form-control"
        :class="{ 'is-invalid': errors['電話'] }"
        placeholder="請輸入電話"
        :rules="isPhone"
        v-model="user.tel"
      />
      <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">收件人地址</label>
      <Field
        id="address"
        name="地址"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['地址'] }"
        placeholder="請輸入地址"
        rules="required"
        v-model="user.address"
      />
      <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">留言</label>
      <textarea id="message" class="form-control" cols="30" rows="10" v-model="message"> </textarea>
    </div>
    <div class="text-end">
      <button type="submit" class="btn btn-danger">送出訂單</button>
    </div>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      message: '',
      btnStatus: true,
      isLoading: false
    };
  },
  methods: {
    // 自訂義的驗證
    isPhone(value) {
      const phoneRule = /^(09)[0-9]{8}$/;
      return phoneRule.test(value) ? true : '請輸入正確的電話號碼';
    },
    onSubmit() {
      // this.isLoading = true;
      // setInterval(() => {
      //   this.isLoading = false;
      // }, 1000);
      // this.createOrder();
      // this.$refs.form.resetForm();
    },
    // 結帳
    createOrder(values) {
      const data = {
        data: {
          user: this.user,
          message: this.message
        }
      };
      console.log(values);
      console.log(data);
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    }
  }
};
</script>
