<script>
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
      if (!hasPermission(binding.value)) {
        // replace HTMLElement with comment node
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
  }
}
</script>

<template>
  <button @click="change">改变权限</button>
  <button v-permission="'create'">创建</button>
</template>
