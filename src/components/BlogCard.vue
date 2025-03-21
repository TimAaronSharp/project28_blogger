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
//NOTE useRoute is from Vue. We use it in order to access different pages of our application (ie. clicking on a profile img to go to that user's profile page). Setting it to a variable like this allows us to access data inside it, such as params that we can use elsewhere (ie. route.params.profileId (profileId is a param) would allow us to get that piece of data. We would set up how that works in router.js)
const route = useRoute()
//NOTE defineProps is how we have data passed down from a parent page/component to a child page/component. blogProp is the key, and we must tell it the type of data (in this case a Blog object defined in models/Blog.js). required: true means this prop must be passed down to this component in order for the component to work (will get clarity on this to be certain)
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
  <div class="card my-2">
    <div class="row">
      <div class="col-8">
        <div>
          <div @click="setActiveBlog()" class="card-body" data-bs-toggle="modal" data-bs-target="#blogModalId"
            role="button">
            <h5 class="card-title">{{
              blogProp.title }}</h5>
            <p class="card-text blog-overflow">{{
              blogProp.body }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-4 d-flex">
        <img @click="setActiveBlog()" class="card-img-start img-fluid rounded-end dis-block" :src="blogProp.imgUrl"
          alt="Card image cap" data-bs-toggle="modal" data-bs-target="#blogModalId" role="button">
      </div>
      <div class="row justify-content-end">
        <div class="col-1">
          <!--NOTE This v-if checks if "account" is true, account being a computed variable from AppState.account. This checks AppState.account to see if it's value is truthy/falsy. If falsy it will not render that element and anything inside it. Since account is computed, we will be updated if it changes and render if it becomes truthy (In our app the account gathering/auth is handled elsewhere already from the template that started our app. AppState.account starts out as null, which is falsy, and when the code that the bcw create template made gets the account info and stores it in AppState.account the computed will see the change to an object, which is truthy, and render the element) -->
          <div v-if="account">
            <!--NOTE v-if checks the name in the route variable we set to see if it matches "Profile", which we set up in router.js. If it does it renders the element(s) -->
            <div v-if="route.name != 'Profile'">
              <!--NOTE RouterLink is what we use to mount a different page to the DOM by using a URL route. The name: in the object must match the name of the route we want to go to in router.js. If we want to be able to access params from the route we must set up params:. profileId is the key (which must match the param in the path in router.js) and the value is the param we wish to send-->
              <RouterLink :to="{ name: 'Profile', params: { profileId: props.blogProp.creatorId } }">
                <img :src="props.blogProp.creator.picture" alt="IOU one non-broken image" class="profile-img">
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--NOTE This is a modal we are using to display a selected blog (AppState.activeBlog). We put it outside of the rest of the HTML elements so that styling won't affect it and cause issues. -->
  <BlogModal />
</template>

<!--NOTE scoped here means that any styles defined here will only work in this component -->
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