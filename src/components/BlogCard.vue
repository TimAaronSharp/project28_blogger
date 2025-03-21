<script setup>
import { AppState } from '@/AppState.js';
import { Blog } from '@/models/Blog.js';
import BlogModal from './BlogModal.vue';
import { blogsService } from '@/services/BlogsService.js';
import { computed, onMounted } from 'vue';
import { logger } from '@/utils/Logger.js';
import { useRoute } from 'vue-router';
// import { computed } from 'vue';

const account = computed(() => AppState.account)
const route = useRoute()
const props = defineProps({
  blogProp: { type: Blog, required: true }
})

function setActiveBlog() {
  blogsService.setActiveBlog(props.blogProp)
}

// function showAccount() {
//   logger.log(account.value)
// }

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
      </div>
      <div class="row justify-content-end">
        <div class="col-1">
          <div v-if="account">
            <div v-if="route.name != 'Profile'">
              <RouterLink :to="{ name: 'Profile', params: { profileId: props.blogProp.creatorId } }">
                <img :src="props.blogProp.creator.picture" alt="IOU one non-broken image" class="profile-img">
              </RouterLink>
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