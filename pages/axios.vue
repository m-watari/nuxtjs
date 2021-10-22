<template>
  <v-row>
    <v-col class="text-center">
      <blockquote class="blockquote">
        &#8220;axios&#8221;<br>
        <v-ul>
            <v-li v-for="todo in todos" :key=todo.id>
                {{ todo.title }}
            </v-li>
        </v-ul>
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            todos: []
        }
    },
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(response => this.todos = response.data);
    }
}
</script>
