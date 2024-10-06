<template>
  <div
    class="relative overflow-hidden rounded-lg w-full h-[300px] max-w-full cursor-pointer"
    @click="openModal(photo)"
  >
    <div
      class="absolute inset-0 bg-black bg-opacity-30 transition-all duration-300 ease-in-out hover:bg-opacity-50 z-10"
    ></div>
    <img
      :src="photo.urls.thumb"
      :alt="photo.description || 'Photo'"
      class="w-full h-full object-cover object-center z-0"
    />
    <div class="absolute bottom-2 left-2 z-20 text-white text-shadow p-3">
      <h3 class="font-medium text-base">{{ photo.user.name }}</h3>
      <p class="text-sm">{{ photo.user.location || "Unknown location" }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  photo: {
    type: Object,
    required: true,
  },
  openModal: {
    type: Function,
    required: true,
  },
});
</script>
