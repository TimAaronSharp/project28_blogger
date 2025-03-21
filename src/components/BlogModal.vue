<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const blog = computed(() => AppState.activeBlog)



</script>
<!--NOTE will create notes later if needed -->

<template>
  <div class="modal" tabindex="-1" id="blogModalId">
    <div class="modal-dialog">
      <div v-if="blog" class="modal-content">
        <div class="modal-header d-block">
          <button type="button" class="d-flex mb-2 btn-close justify-content-end" data-bs-dismiss="modal"
            aria-label="Close"></button>
          <img :src="blog.imgUrl" :alt="`Image for ${blog.title}`" class="img-fluid modal-img rounded-2 mb-2">
          <h5 class="modal-title">{{ blog.title }}</h5>
        </div>
        <div class="modal-body modal-scroll">
          <p>{{ blog.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.modal-scroll {
  height: 80dvh;
  overflow-y: auto;
}

.modal-img {
  max-height: 50dvh;
  aspect-ratio: 1/1;
  width: 100%;
  object-fit: cover;
}
</style>