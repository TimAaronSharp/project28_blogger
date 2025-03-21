<script setup>
import { AppState } from '@/AppState.js';
import Blog from '@/components/BlogCard.vue';
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const profile = computed(() => AppState.activeProfile)
const route = useRoute()

onMounted(() => {
  getProfileById()
})

watch(route, () => {
  getProfileById()
})

async function getProfileById() {
  try {
    // debugger

    const profileId = route.params.profileId
    await profilesService.getProfileById(profileId)
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div></div>
  <section v-if="profile" class="container">
    <div class="row text-center justify-content-center">
      <div class="col-4">
        <div class="text-center">
          <img :src="profile.picture" alt="" class="profile-img img-fluid">
          <p class="fs-2">{{ profile.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.profile-img {
  height: 40dvh;
  aspect-ratio: 1/1;
  width: 100%;
  object-fit: cover;

}
</style>