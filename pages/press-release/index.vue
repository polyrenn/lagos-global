<template>
  <div>
    <div class="page-wrapper">

      <!-- Main Header -->
      <Header />
      <!-- End Main Header -->

      <!--Search Popup-->
      <SearchPopup />

      <div>
        <!--End Banner Section -->

        <!--Facts Section-->
        <div v-if="loading" class="preloader2">
          <div class="icon" />
        </div>
        <section v-else class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="edu-header1 text-center">
              All Press Releases
            </div>
            <div v-if="posts.length > 0" class="row mt-5">
              <div v-for="item in posts" :key="item.id" class="col-sm-6 h-100 p-3">
                <div class="p-2">
                  <a style="color: inherit" :href="getLink(item)" :target="item.is_external ? '_blank' : undefined" :rel="item.is_external ? 'noopener noreferrer' : undefined">
                    <div class="story-board h-100">
                      <img :src="getImage(item)" class="img-fluid" style="height: 300px; width: 100%">
                      <div class="story-board-category font-weight-bold mt-2">
                        {{ item.title }}
                      </div>
                      <div>{{item.location}}</div>
                      <div>{{formatDate(item.created_at)}} | {{item.author}}</div>
                      <div v-if="item.content" class="story-board-content" style="color: #0A2C36">
                        {{ truncateText(item.content.toString().replace(/<[^>]*>/g, ''), 100, '...') }}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
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
import { ref, onMounted } from 'vue';
import localPosts from '~/data/new-posts.json';
import incentiveImage from '~/assets/images/incentive.png';

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

const posts = ref<Post[]>([]);
const loading = ref(true);

const fetchPosts = () => {
  posts.value = localPosts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  loading.value = false;
};

const getLink = (item: Post): string => {
  if (item.is_external && item.link) {
    return item.link;
  }
  return `/press-release/${item.slug}`;
};

const getImage = (item: Post): string => {
  if (item.id?.toString().startsWith('local-')) {
    return incentiveImage;
  }
  if(item.image) {
      return `https://api.lagosglobal.org/api/v1/media/${item.image}`;
  }
  return ''; // Return a fallback or empty string if no image is available
};

const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const truncateText = (text: string, length: number, suffix: string): string => {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  }
  return text;
};

onMounted(() => {
  fetchPosts();
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    (preloader as HTMLElement).style.display = 'none';
  }
});
</script>

<style>

</style>
