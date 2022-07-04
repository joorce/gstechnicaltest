<template>
  <todo-list-component :todos="todos" />
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
    ...mapActions(['setTodos']),
  },

  created() {
    this.setTodos()
  },
}
</script>
