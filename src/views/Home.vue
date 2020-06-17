<template>
  <div class="home">
    <HelloWorld msg="Welcome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created(){
    this.axios.post("/sinan30/account/getIndustry1Items").then(res => {
      
    })
  }
}
</script>
