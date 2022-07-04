<template>
  <div>
    <div class="view" v-if="!editing">
      <input
        v-model="editedTodo.completed"
        class="toggle"
        type="checkbox"
      />
      <label @dblclick="onDoubleClick">{{
        editedTodo.description
      }}</label>
      <button class="destroy" @click="removeTodo()"></button>
    </div>
    <input
      v-if="editing"
      v-model="editedTodo.description"
      class="edited"
      type="text"
      @blur="onEditEnd"
      @keyup.enter="onEditEnd"
      @keyup.esc="onEditCanceled"
    />
    <!-- <input class="toggle" type="checkbox" v-model="isCompleted" />
    <template v-if="!editing">
      <span @dblclick="onDoubleClick"> {{ todo.description }}</span>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </template>
    <template v-else>
      <input
        type="text"
        :value="todo.description"
        @blur="onEditEnd"
        @keydown.enter="onEditEnd"
      />
    </template> -->
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      editing: false,
      originalDescription: '',
      editedTodo: {},
    }
  },
  created() {
    this.editedTodo = this.todo
  },

  watch: {
    'editedTodo.completed'(_, oldValue) {
      if (oldValue !== undefined) {
        console.log('WATCH:::::!!!!!!')
        this.$emit('updateTodo', this.editedTodo)
      }
    },
  },

  methods: {
    onSelect(e) {
      this.$emit(e)
    },
    onDoubleClick() {
      this.editing = true
      this.originalDescription = this.editedTodo.description
    },
    onEditCanceled() {},
    onEditEnd() {
      this.editing = false
      this.originalDescription = ''
      this.$emit('updateTodo', this.editedTodo)
    },
    onToggle() {
      this.$emit('updateTodo', this.editedTodo)
    },
    removeTodo() {
      this.$emit('removeTodo', this.editedTodo)
    },
  },
}
</script>

<style scoped>
.edited {
  width: 480px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 44px;
  padding-left: 20px;
  padding-right: -65px;
  display: block;
  line-height: 1.2;
  font-size: 24px;
  border-width: 1px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  background: transparent;
}
</style>
