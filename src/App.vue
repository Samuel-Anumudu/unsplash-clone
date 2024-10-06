<template>
  <div>
    <header
      class="flex flex-col items-center justify-center bg-[#dce3ea] h-[250px]"
    >
      <div class="w-full max-w-[980px] px-3">
        <template v-if="!photoStore.searchQuery">
          <SearchBar @search="onSearch" />
        </template>
        <div v-else>
          <p class="text-3xl font-medium text-[#263452]">
            <span v-if="photoStore.loading">
              Searching for
              <span class="text-[#6c7d90]">"{{ photoStore.searchQuery }}"</span>
            </span>
            <span v-else>
              Search Results for
              <span class="text-[#6c7d90]">"{{ photoStore.searchQuery }}"</span>
            </span>
          </p>

          <button
            v-if="!photoStore.loading && photoStore.photos.length > 0"
            @click="clearSearch"
            class="btn bg-[#263452] text-white hover:bg-white hover:text-[#263452] border-none mt-2 cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      </div>
    </header>
    <main class="p-4">
      <PhotoGallery @load-more="onLoadMore" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { usePhotoStore } from "./stores/photoStore";
import SearchBar from "./components/SearchBar.vue";
import PhotoGallery from "./components/PhotoGallery.vue";

const photoStore = usePhotoStore();

const onSearch = (query: string) => {
  photoStore.fetchPhotos(query);
};

const clearSearch = () => {
  photoStore.searchQuery = "";
  photoStore.photos = [];
  photoStore.fetchPhotos();
};

const onLoadMore = () => {
  photoStore.loadMore();
};

onMounted(() => {
  photoStore.fetchPhotos();
});
</script>
