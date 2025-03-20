<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const blog = computed(() => AppState.activeBlog)



</script>


<template>
  <div v-if="blog" class="modal" tabindex="-1" id="blogModalId">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <img :src="blog.imgUrl" :alt="`Image for ${blog.title}`"> -->
          <h5 class="modal-title">{{ blog.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
</style>