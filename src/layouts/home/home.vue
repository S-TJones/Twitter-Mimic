<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
<template>

<div class="[ home ][ flex flex-col ]" style="background-color: white;">

  <TitleBar customProp="" />

  <div class="[ flex flex-row ]">
    <aside class="[ relative ][ w-1/4 ][ border-r border-twittergray ][ flex justify-center ]">
      <AsideMenu customProp="" />
    </aside>
    
    <!-- Body -->
    <div class="[ flex flex-row ][ max-w-full w-full ]">

      <transition name="fade">
        <router-view />
      </transition>

      <Trending customProp="" />

    </div>
  </div>
</div>

</template>