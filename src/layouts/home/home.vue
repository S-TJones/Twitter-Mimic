<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
<template>

<div class="[ home ][ flex flex-row ]" style="background-color: white;">
  <aside class="[ w-1/4 h-full ][ border border-twittergray ][ flex justify-center items-center ]">
    <AsideMenu customProp="" />
  </aside>
  
  <!-- Body -->
  <div class="[ flex flex-row ][ max-w-full w-full ]">

    <transition name="fade">
      <router-view />
    </transition>

    <div class="[ w-1/3 h-full ][ border border-twittergray ][ flex flex-col ]">
      <div class="[ p-4 ]">
        <h3>Trends for you</h3>
        <div class="trend [ flex flex-row ][ p-4 ]">
          <div class="[ flex flex-col ]">
            <p>Only on Twitter · Trending</p>
            <p class="[ bold ]">WhatsApp</p>
            <p>209K Tweets</p>
          </div>
          <div>...</div>
        </div>
        <div class="trend [ flex flex-row ][ p-4 ]">
          <div class="[ flex flex-col ]">
            <p>Gaming · Trending</p>
            <p class="[ bold ]">#CallOfDuty</p>
            <p>4,158 Tweets</p>
          </div>
          <div>...</div>
        </div>
        <div class="trend [ flex flex-row ][ p-4 ]">
          <div class="[ flex flex-col ]">
            <p>Trending in Jamaica</p>
            <p class="[ bold ]">Portmore</p>
            <p></p>
          </div>
          <div>...</div>
        </div>
        <a href="#" class="[ no-underline ][ p-4 ]">Show more</a>
      </div>
      <div class="[ p-4 ]">
        <h3>Who to follow</h3>
        <!--  -->
        <div class="follow [ flex flex-row justify-between ][ py-4 ]">
          <div>
            <img src="@/assets/twitter/twitter_logo.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ flex items-center justify-center ]" style="border-radius: 50%;">
          </div>
          <div class="[ flex flex-col ]">
            <p>Steam Support</p>
            <p>@Steam_Support</p>
          </div>
          <div class="[ ml-auto ]">
            <button>Follow</button>
          </div>
        </div>
        <!--  -->
        <div class="follow [ flex flex-row ][ py-4 ]">
          <div>
            <img src="@/assets/twitter/twitter_logo.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ flex items-center justify-center ]" style="border-radius: 50%;">
          </div>
          <div class="[ flex flex-col ]">
            <p>Disney</p>
            <p>@Disney</p>
          </div>
          <div class="[ ml-auto ]">
            <button>Follow</button>
          </div>
        </div>
        <!--  -->
        <div class="follow [ flex flex-row justify-between ][ py-4 ]">
          <div>
            <img src="@/assets/twitter/twitter_logo.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ flex items-center justify-center ]" style="border-radius: 50%;">
          </div>
          <div class="[ flex flex-col ]">
            <p>Elon Musk</p>
            <p>@elonmusk</p>
          </div>
          <div class="[ ml-auto ]">
            <button>Follow</button>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>

</template>