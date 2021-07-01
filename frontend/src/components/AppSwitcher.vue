<template>
  <v-select hide-details label="Apps" :items="items" @change="handleChange" />
</template>

<script>
export default {
  data() {
    return {
      default: '/kanboard',
      items: [
        {
          text: 'Painel de Trabalho',
          value: '/kanboard',
        },
        {
          text: 'Tarefas',
          value: '/task',
        },
      ],
    }
  },
  methods: {
    handleChange(val) {
      const { href } = this.$router.resolve({
        path: val,
      })
      window.open(href, '_blank')
    },
  },
}
</script>

<style></style>
