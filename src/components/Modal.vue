<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[1000]"
    @click.self="close"
  >
    <button
      class="absolute top-4 right-4 bg-none border-none text-2xl text-white cursor-pointer z-[1100]"
      @click="close"
    >
      ✖
    </button>
    <div
      class="bg-white rounded-lg max-w-[1200px] w-[1000px] h-auto overflow-hidden flex flex-col items-center"
    >
      <img
        :src="photo.urls.full"
        :alt="photo.description || 'Photo'"
        class="w-full h-[650px] object-cover rounded-t-lg"
      />
      <div class="w-full bg-white p-6 md:p-10">
        <h3 class="text-xl text-[#263452] font-bold">{{ photo.user.name }}</h3>
        <p class="text-[#263452]">
          {{ photo.user.location || "Unknown location" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  photo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>
