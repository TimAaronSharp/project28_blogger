<script setup>
import { AppState } from '@/AppState.js';
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import BlogCard from '@/components/BlogCard.vue';
//NOTE Computed variables are variables that have an observer watching them and will update us in realtime if they change. You cannot alter a computed through this variable (blogs). You would need a "ref() for that."
const blogs = computed(() => AppState.blogs)

//NOTE onMounted will run anything inside it when the page/component is mounted ("accessed"? Not 100% certain if this is accurate terminology) to the DOM
onMounted(() => {
  getAllBlogs()
})


async function getAllBlogs() {
  try {
    await blogsService.getAllBlogs()
  }
  catch (error) {
    Pop.error(error);
  }
}


</script>

<template>
  <div class="container">
    <div class="row">
      <!--NOTE v-for iterates over "blogs" (which is the computed AppState.blogs[] so we have reactive access to it), refers to each object it finds in the array as "blog", and binds itself to each ":key" to be able to keep track of it (:key should be unique, so the blog's id is ideal for this). Vue then creates an HTML element (starting at the element the v-for is on) and **everything** inside (nested) that element for each "blog" in "blogs". In this case was have a "BlogCard" component inside.-->
      <div v-for="blog in blogs" :key="blog.id" class="col-12">
        <!--NOTE :blogProp="blog" is how we send a prop to the child (BlogProp) component. This creates a "prop" which is data that can be sent to the component. The ="blog" is the data we are sending, which in this case is a "blog" object from the "blogs" array. The :blogProp is the key that it will be referred to by in the "BlogCard" component. This key must match it's counterpart in the "defineProps" section we set up in "BlogCard" -->
        <BlogCard :blogProp="blog" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>