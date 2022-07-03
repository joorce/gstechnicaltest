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
  },
  modules: {},
})
