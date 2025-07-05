<template>
  <div>
    <div class="page-wrapper">

      <!-- Main Header -->
      <Header />
      <!-- End Main Header -->

      <!--Search Popup-->
      <SearchPopup />

      <div v-if="loading" class="preloader2">
          <div class="icon" />
      </div>
      <div v-else-if="post">
        <section class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="d-flex align-items-center justify-content-center">
              <div class="py-2 px-3 text-white" style="width: fit-content; background-color: #2D3D67; border-radius: 20px">
                Press Release
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-center mt-5 text-capitalize" style="color: #0A467C; font-size: ">
              <div>
                {{ post.author }}
              </div>
              <div class="pl-2">
                |   {{ formatDate(post.created_at) }}
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-center w-100 mt-3">
              <div class="edu-header1 text-center w-75 text-center">
                {{ post.title }}
              </div>
            </div>
            <div class="mt-5 pdf-container">
              <ClientOnly>
                <vue-pdf-embed :source="pdfSource" />
              </ClientOnly>
            </div>
          </div>
        </section>
      </div>
      <div style="height: 300px; align-items: center; justify-content: center; display: flex" v-if="!loading && !post">
         No Post Found
      </div>
    </div>

    <!--End pagewrapper-->

    <!-- Main Footer -->
    <Footer />

    <!--Scroll to top-->
    <ScrollTop />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import localPosts from '~/data/new-posts.json';
import VuePdfEmbed from 'vue-pdf-embed';

// Define an interface for the post objects to ensure type safety
interface Post {
  id: string | number;
  title: string;
  image: string;
  location?: string;
  created_at: string;
  author: string;
  content: string;
  link?: string;
  is_external?: boolean;
  slug?: string;
}

const route = useRoute();
const post = ref<Post | null>(null);
const loading = ref(true);

const fetchPost = () => {
  const slug = route.params.id;
  const foundPost = localPosts.find(p => p.slug === slug);
  post.value = foundPost || null;
  loading.value = false;
};

const pdfSource = computed(() => {
  if (post.value && post.value.link) {
    return post.value.link;
  }
  return '';
});

const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

onMounted(() => {
  fetchPost();
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    (preloader as HTMLElement).style.display = 'none';
  }
});
</script>

<style>
.pdf-container {
  width: 100%;
  max-width: 800px; /* Adjust max-width as needed */
  margin: 0 auto;
}
</style>
