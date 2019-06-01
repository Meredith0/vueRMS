<template>
  <d2-container :filename="filename">
    <CRUD_common>
    </CRUD_common>
  </d2-container>
</template>

<script>
  import CRUD_common from "./CRUD_common.vue"

  export default {
    components:{
      CRUD_common
    },
  name: 'page1',
  data () {
    return {
      filename: __filename
    }
  }
}
</script>
