<template>
  <todo-list-component :todos="active" />
</template>

<script>
import TodoListComponent from '@/components/TodoListComponent.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ActiveView',

  components: { TodoListComponent },
  computed: {
    ...mapGetters(['active']),
  },
  methods: {
    ...mapActions(['setTodos']),
  },
  created() {
    this.setTodos()
  },
}
</script>
