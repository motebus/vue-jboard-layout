<template>
  <div id="app">
    <board-layout class="board-grid" v-model="testBoardData"></board-layout>
  </div>
</template>

<script>
import testJson from "./test.json";
import BoardLayout from "@/components/BoardLayout.vue";

export default {
  name: "app",
  components: { BoardLayout },
  computed: {
    testBoardData: {
      get() {
        let { layout, grid } = this.boardData;
        return Object.assign(
          {},
          {
            layout,
            grid
          }
        );
      }
    }
  },
  data() {
    return {
      boardData: testJson
    };
  },
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  min-height: 98%;
  max-width: 100%;
}

html {
  height: 100%;
}

body {
  height: 100%;
}
/* .board-grid {
  grid-column-gap: 50px;
} */
</style>
