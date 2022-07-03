<template>
  <todo-list-component :todos="completed" />
</template>

<script>
import TodoListComponent from '@/components/TodoListComponent.vue'
import { mapGetters /*, mapActions*/ } from 'vuex'

export default {
  name: 'CompletedView',

  components: { TodoListComponent },
  computed: {
    ...mapGetters(['completed']),
  },
}
</script>
