import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new  Vuex.Store({
    state: {
        count: 0,
        todos: [
            {id: 1, text: 'xxx', done: true},
            {id: 2, text: 'yyy', done: false},
        ]
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        incrementBy(state, payload) {
            state.count += payload.amount;
        }
    },
    getters: {
        count: state => {
            return state.count;
        },
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        },
        countDoneTodos: (state, getters) => {
            return getters.doneTodos.length;
        },
        getTodoById: state => (id) => {
            return state.todos.find(todo => todo.id === id);
}
    }
});

store.commit('increment');
store.commit('incrementBy', {amount: 20});

export default store;