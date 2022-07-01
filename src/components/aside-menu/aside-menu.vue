<style scoped lang="scss" src="./aside-menu.scss"></style>
<script lang="ts" src="./aside-menu.ts"></script>
<template>
  <div class="[ flex flex-col justify-between items-center ][ h-full w-64 ]">
    <div class="[ flex flex-col justify-center ]">
      <div class="[ leading-5 ][ py-1 ]">
        <img src="@/assets/twitter/twitter_logo.jpg" alt="logo" class="[ h-8 w-8 ]">
      </div>

      <a href="#" class="[ no-underline ][ text-black p-3 text-xl font-bold ]">Home</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">Explore</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">Notifications</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">Messages</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">Bookmarks</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">Lists</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">Profile</a>
      <a href="#" class="[ no-underline ][ text-black p-3 text-xl ]">More</a>

      <div class="[ py-4 ]">
        <a href="#" class="[ cursor-pointer no-underline ][ text-white bg-twitterblue ][ px-8 h-12 w-12 ][ border rounded-full ]">
          <div class="[ flex ][ font-bold text-base ][ leading-5 text-center ][ p-2 ]">Tweet</div>
        </a>
      </div>
      <!-- <b-button rounded class="[ w-5 ]">Tweet</b-button> -->
    </div>
    <div class="[ flex flex-row items-center ][ my-3 p-3 ][ rounded-full ]">
      <div class="[ leading-5 ][ py-1 ][ border rounded-full]">
        <img src="@/assets/twitter/twitter_logo.jpg" alt="logo" class="[ h-10 w-10 ]">
      </div>
      <div class="[ flex flex-col ][ mx-3 ]">
        <p>Shemar Jones</p>
        <p>@Vul_K_No</p>
      </div>
      <div class="[ flex items-end flex-grow ]">
        <p class="[ m-3 ][ text-xl ]">...
          <!-- <circle cx="5" cy="12" r="2"></circle>
          <circle cx="12" cy="12" r="2"></circle>
          <circle cx="19" cy="12" r="2"></circle> -->
        </p>
      </div>
    </div>
  </div>
</template>