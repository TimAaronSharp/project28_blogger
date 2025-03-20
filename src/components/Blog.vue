<script setup>
import { AppState } from '@/AppState.js';
import { Blog } from '@/models/Blog.js';
import BlogModal from './BlogModal.vue';
import { blogsService } from '@/services/BlogsService.js';
import { computed } from 'vue';
import { logger } from '@/utils/Logger.js';
// import { computed } from 'vue';

const account = computed(() => AppState.account)

const props = defineProps({
  blogProp: { type: Blog, required: true }
})

function setActiveBlog() {
  blogsService.setActiveBlog(props.blogProp)
}

</script>


<template>
  <div @click="setActiveBlog()" class="card my-2">
    <div class="row">
      <div class="col-8">
        <div>
          <div class="card-body">
            <h5 class="card-title" data-bs-toggle="modal" data-bs-target="#blogModalId" role="button">{{ blogProp.title
            }}</h5>
            <p class="card-text blog-overflow" data-bs-toggle="modal" data-bs-target="#blogModalId" role="button">{{
              blogProp.body }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-4 d-flex">
        <img class="card-img-start img-fluid rounded-end dis-block" :src="blogProp.imgUrl" alt="Card image cap"
          data-bs-toggle="modal" data-bs-target="#blogModalId" role="button">
        <div class="row">
          <div class="col-12">
            <div v-if="account">
              <img :src="account.picture" alt="IOU one non-broken image" class="profile-img">
            </div>
          </div>
        </div>
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

.dis-block {
  display: block;
}

.profile-img {
  height: 3em;
  object-fit: cover;
  border-radius: 50%;
  aspect-ratio: 1/1;
}

// .blog-body-width {
//   width: 600px;
// }

.blog-overflow {
  max-height: 40dvh;
  overflow: hidden;
  white-space-collapse: collapse;
  text-overflow: ellipsis;
}

.max-text-width {
  max-width: 50%;
}
</style>