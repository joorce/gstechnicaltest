<template>
  <input
    class="new-todo"
    type="text"
    ref="adder"
    v-model="description"
    @keydown.enter="onAdd"
  />
</template>

<script>
export default {
  name: 'TodoAdder',
  props: {},
  data() {
    return {
      description: '',
    }
  },
  methods: {
    onAdd() {
      if (this.description !== '') {
        this.$emit('addTodo', {
          description: this.description,
          completed: false,
        })
        this.description = ''
      }
    },
    focus() {
      this.$refs.adder.focus()
    },
  },
  mounted() {
    this.focus()
  },
}
</script>

<style></style>
