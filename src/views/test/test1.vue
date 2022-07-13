<template>
  <div>
    测试界面
    <a @click="ok1">ok1</a>
    <a @click="ok2">ok2</a>
    {{ id }}
  </div>
</template>

<script>
import {topics} from "@/config/api"

export default {
  name: "test1",
  mounted() {
  },
  data() {
    return {
      id: 100,
      findall: {
        id: 5
      }
    }
  },
  methods: {
    async ok1() {
      await this.test1()
        .then(async res => {
          console.log(this.id)
          await this.test2(20)
          console.log('运行test2')
          console.log(this.id)
        })
        .then(async res => {
          console.log('运行完test2')
          console.log(this.id)
          await this.test3()
          console.log('运行test3')
        }).then(res => {
          console.log(this.id)
        })

    },
    test1() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('我是1')
          this.id = 1
          resolve()
        }, 15000)
      })
    },
    test2(ids) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('我是2')
          this.id = ids
          resolve()
        }, 5000)
      })
    },
    test3() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('我是3')
          this.id = 3
          resolve()
        }, 20000)
      })
    },
    ok2(){
      this.axios
    }
  }
}
</script>

<style scoped>

</style>
