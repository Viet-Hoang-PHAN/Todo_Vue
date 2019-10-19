<template>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="66%"
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color="light-blue darken-1 white--text">Add Todo
        <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <p>ADD NEW TODO</p>
        </v-card-title>
      <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="todo.title"
            label="Title"
            required
            filled
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
          <v-textarea
            v-model="todo.content"
            label="Content"
            required
            filled
          ></v-textarea>
        </v-col>
        <v-col>
          <v-btn @click="create">SAVE</v-btn>
          <v-btn @click="close">CANCEL</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </v-card>
    </v-dialog>
  </div>
</template>

<script>
import api from '../api/api'
export default {
    data: () => ({
      dialog: false,
      todo: {
        title: '',
        content: '',
        done: false
      }
    }),
    methods: {
      close: function () {
        this.dialog = false
      },
      create: function () {
        api.createTodo(this.todo)
      }
    }
}
</script>

<style lang="stylus" scoped>

</style>