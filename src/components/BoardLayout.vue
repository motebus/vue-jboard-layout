<template>
  <div ref="container" :style="container">
    <board-item
      v-for="data in itemData"
      :key="data.id"
      :page="data.page"
      :size="data.size"
      :params="data.params"
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
        let { page, params, data, ...size } = item;
        return { page, params, size, id };
      });
      this.itemData = data;
    }
  }
};
</script>
