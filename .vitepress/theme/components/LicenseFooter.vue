<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()

const licenses = {
  zig: {
    name: 'Zig Docs',
    url: 'https://zig.org/',
    license: 'MIT',
    licenseUrl: 'https://opensource.org/license/mit'
  },
}
</script>

<template>
  <div v-if="frontmatter.source && licenses[frontmatter.source]" class="license-footer">
    <hr />
    <p>
      Portions of this page are derived from
      <a :href="licenses[frontmatter.source].url" target="_blank">{{ licenses[frontmatter.source].name }}</a>.<br>
      Content is available under the
      <a :href="licenses[frontmatter.source].licenseUrl" target="_blank">{{ licenses[frontmatter.source].license }}</a> license.
    </p>
    <p>Copyright © 2025-present <a href="https://github.com/dluague" target="_blank">Darwin Luague</a></p>
  </div>
</template>

<style scoped>
.license-footer {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.license-footer hr {
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  margin-bottom: 1rem;
}
.license-footer a {
  color: var(--vp-c-brand-1);
}
</style>
