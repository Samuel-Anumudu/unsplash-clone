<template>
  <div
    class="flex flex-col gap-2.5 rounded-lg w-full bg-gray-200 animate-pulse shadow-md box-border"
  >
    <div class="w-full h-[250px] bg-gray-300 rounded-lg"></div>
    <div class="w-full h-4 bg-gray-300 rounded-md"></div>
    <div class="w-[80%] h-4 bg-gray-300 rounded-md"></div>
  </div>
</template>

<style>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}
</style>
