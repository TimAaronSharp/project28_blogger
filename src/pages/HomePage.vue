<script setup>
import { AppState } from '@/AppState.js';
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const blogs = computed(() => AppState.blogs)

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
  <div>{{ blogs }}</div>
</template>

<style scoped lang="scss"></style>


<!-- "As a user, I can see all the blogs on the home page."

"As a user, I can click on a blog to open it into a modal or a new blog page to read the full content of the blog."
"As a user, I can click on a blog's creator to be taken to the profile page, so that I find more blogs by that user."
"As a logged in user, I can create and delete blogs, so that I can easily create content to share with others." -->