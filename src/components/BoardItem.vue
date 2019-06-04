<template>
  <vue-friendly-iframe :style="item" :src="frameSrc" class="frame"></vue-friendly-iframe>
</template>

<script>
import URI from "urijs";
import VueFriendlyIframe from "vue-friendly-iframe";

export default {
  name: "board-item",
  components: {
    VueFriendlyIframe
  },
  props: {
    page: String,
    params: Object,
    size: Object
  },
  data() {
    return {
      frameSrc: "#",
      item: {}
    };
  },
  watch: {
    page: {
      immediate: true,
      handler() {
        this.dealUrl();
      }
    },
    params: {
      immediate: true,
      handler() {
        this.dealUrl();
      }
    },
    size: {
      immediate: true,
      handler() {
        this.dealSize();
      }
    }
  },
  methods: {
    dealUrl() {
      if (!this.page) return "#";

      let url = URI(this.page).search(this.params);
      this.frameSrc = url.toString();
    },

    dealSize() {
      let { x, y, w, h } = this.size;
      let style = {
        "grid-column-start": x + 1,
        "grid-column-end": x + 1 + w,
        "grid-row-start": y + 1,
        "grid-row-end": y + 1 + h,
        height: "100%",
        width: "100%"
      };
      this.item = style;
    }
  }
};
</script>

<style>
.frame iframe {
  height: 100%;
  width: 100%;
}
</style>
