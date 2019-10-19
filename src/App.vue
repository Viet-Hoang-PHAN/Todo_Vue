<template>
  <v-app>
    <Header/>
    <v-container fluid class="pt-12">
      <v-row class="justify-center">
        <v-col cols="10">
          <Todo v-for="i in 5" :key="i" class="py-1"/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Todo from './components/Todo'

export default {
  name: 'App',
  components: {
    Header,
    Todo,
  },
  data: () => ({
    //
  }),
};
</script>
