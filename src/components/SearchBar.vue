<template>
  <label
    className="input input-bordered flex items-center gap-2 border-none outline-none focus-within:outline-none rounded-md bg-white text-[#263452]"
    style="box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="15"
      height="15"
      fill="#8f8f8f"
    >
      <path
        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
      />
    </svg>
    <input
      style="padding-left: 16px"
      class="placeholder:text-[#263452] text-[#263452] text-base font-normal leading-normal bg-white outline-none border-none"
      type="text"
      className="grow"
      placeholder="Search for photo"
      v-model="query"
      @keyup.enter="onSearch"
      autofocus
    />
  </label>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits(["search"]);

const query = ref("");

const onSearch = () => {
  if (query.value.trim()) {
    emit("search", query.value);
  }
};
</script>
