<template>
  <blockquote v-if="canonicalUrl">
    This post originally appeared on
    <a :href="canonicalUrl" target="_blank">{{ canonicalRoot }}</a>.
  </blockquote>
</template>
<script>
export default {
  props: {
    canonicalUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    canonicalRoot() {
      return this.canonicalUrl ? this.canonicalUrl.split("/")[2] : "";
    },
  },
};
</script>