<template>
  <div ref="container" :style="container">
    <board-item
      v-for="data in itemData"
      :key="data.id"
      :name="data.name"
      :size="data.size"
      :app="data.app"
    ></board-item>
  </div>
</template>

<script>
import BoardItem from "./BoardItem.vue";

export default {
  name: "board-layout",
  components: {
    BoardItem
  },
  props: ["value"],
  data() {
    return {
      container: {
        display: "grid",
        position: "absolute",
        height: "98%",
        width: "100%",
        "min-width": "95%",
        "min-height": "95%"
      },
      itemData: []
    };
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        let { layout, grid } = this.value;
        this.dealLayout(layout);
        this.dealGrid(grid);
      }
    }
  },
  methods: {
    dealLayout(layout) {
      let { col, row } = layout;
      this.container["grid-template-columns"] = `${"auto ".repeat(col)}`;
      this.container["grid-template-rows"] = `${"auto".repeat(row)}`;
    },

    dealGrid(grid) {
      let data = grid.map((item, id) => {
        let { name, app, data, ...size } = item;
        return { name, app, data ,size, id };
      });
      this.itemData = data;
    }
  }
};
</script>
