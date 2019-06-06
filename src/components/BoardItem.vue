<template>
  <vue-friendly-iframe class="frame" :style="item" :src="frameSrc"></vue-friendly-iframe>
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
    name: String,
    app: Object,
    data: Object,
    size: Object
  },
  data() {
    return {
      frameSrc: "#",
      item: {}
    };
  },
  watch: {
    name: {
      immediate: true,
      handler() {
        this.dealUrl();
      }
    },
    app: {
      immediate: true,
      handler() {
        this.dealUrl();
      }
    },
    data: {
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
      if (!this.name) return "#";

      let url = URI(this.name).search(this.app);
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
