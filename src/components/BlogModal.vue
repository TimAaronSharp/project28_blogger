<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const blog = computed(() => AppState.activeBlog)



</script>


<template>
  <div class="modal" tabindex="-1" id="blogModalId">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ blog.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{ blog.body }}</p>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>