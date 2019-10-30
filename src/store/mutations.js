// Vuex style reducers, called Mutations.
export const STORAGE_KEY = 'todos-vuejs';
export const types = {
    ADD_TODO: 'addTodo',
    EDIT_TODO: 'editTodo',
    REMOVE_TODO: 'removeTodo'
};
export const mutations = {
    [types.ADD_TODO]: (state, todo) => {
        state.todos = [...state.todos, todo];
    },
    [types.EDIT_TODO]: (state, { todo, text = todo.text, done = todo.done }) => {
        todo.text = text;
        todo.done = done;
    },
    [types.REMOVE_TODO]: (state, todo) => {
        const indexOfTodo = state.todos.indexOf(todo);
        state.todos = [...state.todos.slice(0, indexOfTodo), ...state.todos.slice(indexOfTodo + 1)];
    }
};

/* "scripts": {
    "client-install": "npm install --prefix client",
    "start": "node index.js",
    "server": "nodemon index.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
} */
