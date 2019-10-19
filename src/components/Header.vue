<template>
  <div>
    <v-app-bar
      color="light-blue darken-4 white-text"
      dark
      max-width="100%"
      fixed
    >

      <v-toolbar-title>Todo List</v-toolbar-title>

      <v-spacer></v-spacer>

      <ButtonForm/>

    </v-app-bar>
  </div>
</template>

<script>
import ButtonForm from "./ButtonForm"
export default {
  components: {
    ButtonForm
  },

  data: () => ({
    dialog: false
  })
}
</script>

<style lang="scss" scoped>

</style>