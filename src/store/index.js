import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios-instance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    active(state) {
      return state.todos.filter((todo) => todo.completed === false)
    },
    completed(state) {
      return state.todos.filter((todo) => todo.completed === true)
    },
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    },
    ADD_TODO(state, todo) {
      state.todos.unshift(todo)
    },
    UPDATE_TODO(state, updatedTodo) {
      const index = state.todos.findIndex(
        (todo) => todo.id === updatedTodo.id,
      )
      if (index !== -1) {
        state.todos.splice(index, 1, updatedTodo)
      }
    },
    REMOVE_TODO(state, removedTodo) {
      const index = state.todos.findIndex(
        (todo) => todo.id === removedTodo.id,
      )
      if (index !== -1) {
        state.todos.splice(index, 1)
      }
    },
  },
  actions: {
    async setTodos({ commit }) {
      try {
        const res = await axios.get('/todos')
        const todos = res.data
        commit('SET_TODOS', todos)
      } catch (error) {
        throw new Error(error)
      }
    },
    async addTodo({ commit }, newTodo) {
      try {
        console.log('STORE::addTodo', newTodo)
        const res = await axios.post('/todos', newTodo)
        const todo = res.data
        commit('ADD_TODO', todo)
      } catch (error) {
        throw new Error(error)
      }
    },
    async updateTodo({ commit }, updatedTodo) {
      try {
        const { id } = updatedTodo
        console.log('STORE::updateTodo****', updatedTodo)
        const res = await axios.put(`/todos/${id}`, updatedTodo)
        const todo = res.data
        commit('UPDATE_TODO', todo)
      } catch (error) {
        throw new Error(error)
      }
    },
    async removeTodo({ commit }, removedTodo) {
      try {
        const { id } = removedTodo
        console.log('STORE::removeTodo', removedTodo)
        await axios.delete(`/todos/${id}`, removedTodo)
        commit('REMOVE_TODO', removedTodo)
      } catch (error) {
        throw new Error(error)
      }
    },
  },
  modules: {},
})
