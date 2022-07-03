<template>
  <todo-list-component
    :todos="todos"
    @addTodo="onAddTodo"
    @updateTodo="onUpdateTodo"
    @removeTodo="onRemoveTodo"
  />
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
    ...mapActions([
      'setTodos',
      'addTodo',
      'updateTodo',
      'removeTodo',
    ]),
    onAddTodo(todo) {
      console.log('onAddTodo', todo)
      this.addTodo(todo)
    },
    onUpdateTodo(todo) {
      console.log('onUpdateTodo', todo)
      this.updateTodo(todo)
    },
    onRemoveTodo(todo) {
      console.log('onRemoveTodo', todo)
      this.removeTodo(todo)
    },
  },
  created() {
    this.setTodos()
  },
}
</script>
