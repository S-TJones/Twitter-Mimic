<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
<template>

<div class="[ home ][ grid ]">
  <aside class="[  ]"></aside>
  
  <!-- Body -->
  <div class="[ flex flex-row ]">
    <transition name="fade">
      <router-view />
    </transition>

    <div class="trending [ flex flex-col ]">
      <div>
        <h3>Trends for you</h3>
      </div>
      <div>
        <h3>Who to follow</h3>
      </div>
    </div>

  </div>
</div>

</template>