<template>
  <section>
    <ul class="toc">
      <li
        v-for="link of links"
        :key="link.id"
        :class="`link--level${link.depth} ${
          activeLink && activeLink.id === link.id ? 'link--active' : ''
        }`"
        class="py-2 text-xs truncate"
      >
        <a :href="`#${link.id}`">{{ link.text }}</a>
      </li>
    </ul>
  </section>
</template>
<script lang="ts">
export default {
  props: {
    toc: {
      type: Array,
      required: true,
    },
    levels: {
      type: Array,
      default: () => [2, 3],
    },
  },
  data() {
    return {
      pos: 0,
      links: [],
      activeLink: undefined,
    }
  },
  watch: {
    pos(value) {
      this.links = this.links.map((link, key) => {
        const title = document.getElementById(link.id)
        return {
          ...link,
          active: this.linkActive(title),
        }
      })
    },
    toc(value) {
      this.links = value.filter((l) => this.levels.includes(l.depth))
    },
    links(value) {
      this.activeLink = value.filter((l) => l.active).pop()
    },
  },
  mounted() {
    this.links = this.toc.filter((l) => this.levels.includes(l.depth))
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    linkActive(el) {
      let top = el.offsetTop
      const height = el.offsetHeight
      while (el.offsetParent) {
        el = el.offsetParent
        top += el.offsetTop
      }
      return top - height < window.pageYOffset + 80
    },
    handleScroll() {
      this.pos = window.pageYOffset + 80
    },
  },
}
</script>
<style lang="scss" scoped>
section {
  @apply hidden;
  @apply lg:flex;
  @apply flex-col;
}

li {
  @apply ml-2;
  @apply text-sm;
}

.toc a {
  @apply text-darkPurple;
  @apply pl-2;
}

.toc a:hover {
  @apply text-blue-500;
}

.link--level3 {
  @apply pl-3;
}

li.link--active {
  @apply border-l-4 border-blue-500;

  a {
    @apply font-bold;
    @apply text-blue-500;
  }
}
body.dark {
  .toc a {
    @apply text-gray-100;
  }

  .toc a:hover {
    @apply text-bbbpink;
  }

  li.link--active {
    @apply border-bbbpink;

    a {
      @apply text-bbbpink;
    }
  }
}
</style>
