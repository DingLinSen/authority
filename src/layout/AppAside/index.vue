<template>
  <div>
    <app-menu></app-menu>
  </div>
</template>
<script>
export default {
  name:'AppAside',
  components: {
    AppMenu: () => import('../../components/Menu.vue'),
  },
  
  data() {
    return {
     
    }
  },
}
</script>
