Vue.component('todo-item', {
  template: '\
    <li>\
      <button type="button" v-on:click="$emit(\'remove\')" class="btn btn-outline-danger mr-2">X</button>\
      {{ title }}\
    </li>\
  ',
  props: ['title']
});

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = '';
    }
  }
});