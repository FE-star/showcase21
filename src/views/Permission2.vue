<script>
import Loader from '../components/Loader.vue'
let permission = ['modifier']
function hasPermission(value) {
  return permission.indexOf(value) > -1
}
export default {
  methods: {
    change() {
      permission = ['create', 'modifier']
      this.$forceUpdate()
    }
  },
  directives: {
    permission: (el, binding, vnode, prevnode) => {
      console.log(binding)
      if (!hasPermission(binding.value)) {
        const comment = document.createComment(' ');
        Object.defineProperty(comment, 'setAttribute', {
          value: () => undefined,
        });
        vnode.el = comment
        vnode.type = 'comment'
        if (el.parentNode) {
          el.parentNode.replaceChild(comment, el);
        }
      }
    }
  },
  components: {
    Loader
  }
}
</script>

<template>
  <button @click="change">改变权限</button>
  <div v-permission="'create'">
    <Loader :load="() => import('../components/Dashboard.vue')" />
  </div>
</template>
