<script>
export default {
  methods: {
    long() {
      alert('hello')
    }
  },
  directives: {
    longpress: {
      created: function (el, binding, vNode) {
        if (typeof binding.value !== 'function') {
          throw 'callback must be a function'
        }
        let pressTimer = null
        let start = (e) => {
          if (e.type === 'click' && e.button !== 0) {
            return
          }
          if (pressTimer === null) {
            pressTimer = setTimeout(() => {
              handler()
            }, 1000)
          }
        }
        // 取消计时器
        let cancel = (e) => {
          if (pressTimer !== null) {
            clearTimeout(pressTimer)
            pressTimer = null
          }
        }
        // 运行函数
        const handler = (e) => {
          binding.value(e)
        }
        // 添加事件监听器
        el.addEventListener('mousedown', start)
        el.addEventListener('touchstart', start)
        // 取消计时器
        el.addEventListener('click', cancel)
        el.addEventListener('mouseout', cancel)
        el.addEventListener('touchend', cancel)
        el.addEventListener('touchcancel', cancel)
      },
      // 指令与元素解绑的时候，移除事件绑定
      unmount(el) {
        // clean up
      },
    }
  }
}
</script>

<template>
  <button v-longpress="long">长按</button>
</template>
