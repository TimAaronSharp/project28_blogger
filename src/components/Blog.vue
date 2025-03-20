<script setup>
import { AppState } from '@/AppState.js';
import { Blog } from '@/models/Blog.js';
import BlogModal from './BlogModal.vue';
import { blogsService } from '@/services/BlogsService.js';
// import { computed } from 'vue';


const props = defineProps({
  blogProp: { type: Blog, required: true }
})

function setActiveBlog() {
  blogsService.setActiveBlog(props.blogProp)
}

</script>


<template>

  <div @click="setActiveBlog()" data-bs-toggle="modal" data-bs-target="#blogModalId" role="button"
    class="card my-2 h-50 blog-overflow">
    <div class="row">
      <div class="col-8">
        <div>
          <div class="card-body">
            <h5 class="card-title">{{ blogProp.title }}</h5>
            <p class="card-text">{{ blogProp.body }} </p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <img class="card-img-start img-fluid rounded-end" :src="blogProp.imgUrl" alt="Card image cap">
      </div>
    </div>
  </div>
  <BlogModal />
</template>


<style lang="scss" scoped>
img {
  height: 40dvh;
  width: 100%;
  object-fit: cover;
}

.blog-overflow {
  overflow: hidden;
  white-space-collapse: collapse;
  text-overflow: ellipsis;
}

.max-text-width {
  max-width: 50%;
}
</style>