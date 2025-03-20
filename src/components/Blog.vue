<script setup>
import { AppState } from '@/AppState.js';
import { Blog } from '@/models/Blog.js';
// import { computed } from 'vue';


defineProps({
  blogProp: { type: Blog, required: true }
})

</script>


<template>

  <div class="card my-2 h-50 blog-overflow">
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