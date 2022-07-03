<template>
  <div id="app" class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todo-adder @addTodo="onAddTodo" />
    </header>
    <div class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <todo-list :todos="todos" v-if="todos.length > 0" />
    </div>
    <footer class="footer" v-if="todos.length > 0">
      <span class="todo-count">
        <strong></strong>
      </span>
      <todo-filters />
      <button class="clear-completed">Clear completed</button>
    </footer>
  </div>
</template>

<script>
import TodoAdder from './TodoAdder.vue'
import TodoFilters from './TodoFilters.vue'
import TodoList from './TodoList.vue'
export default {
  components: { TodoFilters, TodoAdder, TodoList },
  name: 'TodoListComponent',
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onAddTodo(todo) {
      this.$emit('addTodo', todo)
    },
  },
}
</script>

<style></style>
