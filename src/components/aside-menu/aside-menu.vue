<style scoped lang="scss" src="./aside-menu.scss"></style>
<script lang="ts" src="./aside-menu.ts"></script>
<template>
  <div class="[ aside-menu ][]">
    <div>
      <img src="@/assets/twitter/twitter_logo.jpg" alt="logo" srcset="">
    </div>
    <div class="[ flex flex-col items-center ]">
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl font-bold ]">Home</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">Explore</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">Notifications</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">Messages</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">Bookmarks</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">Lists</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">Profile</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">More</a>
      <b-button rounded>Tweet</b-button>
    </div>
  </div>
</template>