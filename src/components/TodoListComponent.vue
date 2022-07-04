<template>
  <div id="app" class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todo-adder @addTodo="onAddTodo" />
    </header>
    <div class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <todo-list
        :todos="todos"
        v-if="todos.length > 0"
        @updateTodo="onUpdateTodo"
        @removeTodo="onRemoveTodo"
      />
    </div>
    <footer class="footer" v-if="todos.length > 0">
      <span class="todo-count">
        <strong v-text="active.length"></strong>
        {{ active.length === 1 ? 'item' : 'items' }} left
      </span>
      <todo-filters />
      <button class="clear-completed" @click="onClearCompleted">
        Clear completed
      </button>
    </footer>
  </div>
</template>

<script>
import TodoAdder from './TodoAdder.vue'
import TodoFilters from './TodoFilters.vue'
import TodoList from './TodoList.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { TodoFilters, TodoAdder, TodoList },
  name: 'TodoListComponent',
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    ...mapGetters(['active']),
  },
  methods: {
    ...mapActions([
      'addTodo',
      'updateTodo',
      'removeTodo',
      'clearCompletedTodos',
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
    onClearCompleted() {
      console.log('onClearCompleted')
      this.clearCompletedTodos()
    },
  },
}
</script>

<style scoped>
.clear-completed,
html .clear-completed:active {
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
}

.clear-completed:hover {
  text-decoration: underline;
}
</style>
