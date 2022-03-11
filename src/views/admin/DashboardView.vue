<template>
  <NavBar :platform-name="platform" @sign-out="signOut"></NavBar>
  <router-view />
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  data() {
    return {
      platform: '後台'
    };
  },
  components: {
    NavBar
  },
  methods: {
    checkSignIn() {
      this.axios
        .post(`${process.env.VUE_APP_API}/api/user/check`)
        .then(() => {
          this.$router.push('/admin/products');
        })
        .catch((err) => {
          this.$swal(err.data.message);
          this.$router.push('/login');
        });
    },
    signOut() {
      this.axios
        .post(`${process.env.VUE_APP_API}/logout`)
        .then((res) => {
          document.cookie = 'hexToken=;expires=;';
          this.$swal(res.data.message);
          this.$router.push('/login');
        })
        .catch((err) => {
          this.$swal(err.data.message);
        });
    }
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (token) {
      this.axios.defaults.headers.common.Authorization = token;
      this.checkSignIn();
    } else {
      /* eslint-disable */
      // alert('尚未登入');
      /* eslint-enable */
      this.$router.push('/login');
    }
  }
};
</script>
