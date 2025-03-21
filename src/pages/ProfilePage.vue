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
//NOTE watch is an observer that will watch something and then run a callback function if something changes (not sure if we actually need this here for our purposes to be honest)
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
  <!--NOTE v-if here checks if profile is truthy (profile in this case is computed AppState.activeProfile). If this is not here it will error when the page mounts (function is called onMount) because AppState.activeProfile is still falsy (null) when it mounts (even though it runs the function onMount I believe the template does not wait for the script to finish before rendering the HTML) -->
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