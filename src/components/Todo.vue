<template>
    <div>
        <v-hover v-slot:default="{ hover }">
            <v-card
            :elevation="hover ? 8 : 2"
            class="ma-2">
            <v-container>
                <v-row>
                    <v-col>
                    <v-card-title class="py-0">
                        <p>Todo 5</p>
                        <v-spacer></v-spacer>
                        <v-checkbox v-model="done"></v-checkbox>
                    </v-card-title>
                    </v-col>
                    <v-card-text class="py-0">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus deserunt repellat voluptatum, maxime cumque laborum nisi quibusdam, cupiditate numquam praesentium totam odit quis unde placeat quam dolor neque! At!</p>
                    </v-card-text>
                </v-row>
            </v-container>
            </v-card>
        </v-hover>
    </div>
</template>

<script>
export default {

    data: () => ({
        done: false,
    })
    
}
</script>

<style lang="scss" scoped>

</style>