<template>
  <div
    class="flex flex-col items-center justify-center min-h-[400px] mt-[-80px]"
  >
    <div
      v-if="photoStore.loading && photoStore.searchQuery"
      class="w-full max-w-[890px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-[35px] gap-y-[25px] p-5"
    >
      <Skeleton v-for="n in 10" :key="`skeleton-${n}`" />
    </div>
    <div
      v-else
      class="w-full max-w-[890px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-[35px] gap-y-[25px] p-5"
    >
      <PhotoCard
        v-for="photo in filteredPhotos"
        :key="photo.id"
        :photo="photo"
        :openModal="showModal"
      />
    </div>
    <Modal
      v-if="photoStore.selectedPhoto"
      @close="closeModal"
      :photo="photoStore.selectedPhoto"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { usePhotoStore } from "../stores/photoStore";
import PhotoCard from "./PhotoCard.vue";
import Skeleton from "./Skeleton.vue";
import Modal from "./Modal.vue";

const photoStore = usePhotoStore();

const filteredPhotos = computed(() => {
  return photoStore.photos;
});

const showModal = (photo: any) => {
  photoStore.selectPhoto(photo);
};

const closeModal = () => {
  photoStore.clearSelectedPhoto();
};
</script>
