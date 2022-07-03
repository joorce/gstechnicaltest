<template>
  <todo-list-component :todos="todos" @addTodo="onAddTodo" />
</template>

<script>
import TodoListComponent from '@/components/TodoListComponent.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomeView',

  components: { TodoListComponent },
  computed: {
    ...mapState(['todos']),
  },
  methods: {
    ...mapActions(['setTodos', 'addTodo', 'updateTodo']),
    onAddTodo(todo) {
      console.log('onAddTodo', todo)
      this.addTodo(todo)
    },
  },
  created() {
    this.setTodos()
  },
}
</script>
