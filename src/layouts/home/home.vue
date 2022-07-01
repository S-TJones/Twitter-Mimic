<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
<template>

<div class="[ home ][ flex flex-row ]">
  <aside class="[ w-1/4 h-full ][ border border-twittergray ][ flex justify-center items-center ]">
    <AsideMenu customProp="" />
  </aside>
  
  <!-- Body -->
  <div class="[ flex flex-row ][ max-w-full w-full ]">

    <transition name="fade">
      <router-view />
    </transition>

    <div class="[ w-1/3 h-full ][ border border-twittergray ][ flex flex-col ]">
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