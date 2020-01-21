<template>
  <Layout>
    <div class="content">
      <h1>{{ $page.sitePage.title }}</h1>
      <div v-html="$page.sitePage.content" />
    </div>
  </Layout>
</template>

<page-query>
query SitePage($id: ID!) {
  sitePage: sitePage(id: $id) {
    title
    content
  }
}
</page-query>
