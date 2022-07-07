<style scoped lang="scss" src="./aside-menu.scss"></style>
<script lang="ts" src="./aside-menu.ts"></script>
<template>
  <div class="[ sticky top-0 ][ flex flex-col justify-between items-center ][ h-screen w-64 ]">
    <div class="[ flex flex-col justify-center items-start ]">
      <div class="[ leading-5 ][ py-1 ][ w-full ]">
        <img src="@/assets/twitter/twitter_logo.jpg" alt="logo" class="[  ]" style="width: 40px;height: 40px;">
      </div>

      <a href="#" class="[ no-underline ][ py-1 w-full ][ text-black text-xl ]">
        <div class="[ flex flex-row items-center ][ p-3 ][ rounded-full ]">
          <b-icon icon="houseuser" size="is-small"></b-icon>
          <div class="[ mr-4 ml-5 ][ leading-6 text-xl ][ font-bold ]">Home</div>
        </div>
      </a>
      <a href="#" class="[ no-underline ][ py-1 w-full ][ text-black text-xl ]">
        <div class="[ flex flex-row items-center ][ p-3 ][ rounded-full ]">
          <b-icon icon="hashtag" size="is-small"></b-icon>
          <div class="[ mr-4 ml-5 ][ leading-6 text-xl ]">Explore</div>
        </div>
      </a>
      <a href="#" class="[ no-underline ][ py-1 w-full ][ text-black text-xl ]">
        <div class="[ flex flex-row items-center ][ p-3 ][ rounded-full ]">
          <b-icon icon="bell" size="is-small"></b-icon>
          <div class="[ mr-4 ml-5 ][ leading-6 text-xl ]">Notifications</div>
        </div>
      </a>
      <a href="#" class="[ no-underline ][ py-1 w-full ][ text-black text-xl ]">
        <div class="[ flex flex-row items-center ][ p-3 ][ rounded-full ]">
          <b-icon icon="envelope" size="is-small"></b-icon>
          <div class="[ mr-4 ml-5 ][ leading-6 text-xl ]">Messages</div>
        </div>
      </a>
      <a href="#" class="[ no-underline ][ py-1 w-full ][ text-black text-xl ]">
        <div class="[ flex flex-row items-center ][ p-3 ][ rounded-full ]">
          <b-icon icon="bookmark" size="is-small"></b-icon>
          <div class="[ mr-4 ml-5 ][ leading-6 text-xl ]">BookMarks</div>
        </div>
      </a>
      <a href="#" class="[ no-underline ][ py-1 w-full ][ text-black text-xl ]">
        <div class="[ flex flex-row items-center ][ p-3 ][ rounded-full ]">
          <b-icon icon="list" size="is-small"></b-icon>
          <div class="[ mr-4 ml-5 ][ leading-6 text-xl ]">Lists</div>
        </div>
      </a>
      <a href="#" class="[ no-underline ][ py-1 w-full ][ text-black text-xl ]">
        <div class="[ flex flex-row items-center ][ p-3 ][ rounded-full ]">
          <b-icon icon="user" size="is-small"></b-icon>
          <div class="[ mr-4 ml-5 ][ leading-6 text-xl ]">Profile</div>
        </div>
      </a>
      <a href="#" class="[ no-underline ][ py-1 w-full ][ text-black text-xl ]">
        <div class="[ flex flex-row items-center ][ p-3 ][ rounded-full ]">
          <b-icon icon="ellipsish" size="is-small"></b-icon>
          <div class="[ mr-4 ml-5 ][ leading-6 text-xl ]">More</div>
        </div>
      </a>
      <!--  -->
      <!-- <div class="[ py-4 ]">
        <a href="#" class="[ cursor-pointer no-underline ][ text-white bg-twitterblue ][ px-8 h-12 w-12 ][ border rounded-full ]">
          <div class="[ flex ][ font-bold text-base ][ leading-5 text-center ][ p-2 ]">Tweet</div>
        </a>
      </div> -->
      <b-button rounded class="[ w-full my-4 ][ font-bold text-base ][ text-white bg-twitterblue ]" style="height: 52px;">Tweet</b-button>
    </div>
    <div class="[ flex flex-row items-center ][ my-3 px-3 ][ rounded-full ][ cursor-pointer hover:bg-twittergrey ]">
      <div class="[ leading-5 ][ py-1 ]">
        <img src="@/assets/twitter/twitter_logo.jpg" alt="logo" class="[ h-10 w-10 ]" style="border-radius: 50%;">
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