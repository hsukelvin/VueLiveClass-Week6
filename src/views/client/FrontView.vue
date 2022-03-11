<template>
  <NavBar :platform-name="platform"></NavBar>
  <router-view />
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  data() {
    return {
      platform: '前台'
    };
  },
  components: {
    NavBar
  }
};
</script>
