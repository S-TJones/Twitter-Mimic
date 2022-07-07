<style scoped lang="scss" src="./trending.scss"></style>
<script lang="ts" src="./trending.ts"></script>
<template>
  <div class="[ trending ]">
    <div class="[ h-full ][ border-l border-twittergray ][ flex flex-col items-center ][ text-black ]">
      <div class="[ p-4 mr-3 ]">
        <div class="[ mb-3 ][ flex flex-row items-center ]" style="height: 53px;min-height: 32px;width: 350px;">
          <form action="#">
            <div class="[ bg-twittergrey ][ rounded-lg ][ flex flex-row ]">
              <i class="[ pl-3 ][ w-8 h-8 ]"></i>
              <input type="text" name="search" id="search" class="[  ]">
            </div>
          </form>
        </div>
      </div>
      <!--  -->
      <div class="[ mb-4 ][ bg-twittergrey ][ rounded-2xl ]" style="width: 350px;">
        <div class="[ flex flex-row  flex-shrink-0 items-center ][ px-4 py-3 ]">
          <h2>
            <div class="[ text-xl leading-6 font-extrabold ]">Trends for you</div>
          </h2>
        </div>
        <!-- Trend Section | START -->

        <div class="trend [ py-3 px-4 ]" >
          <div class="[ flex flex-col ]">
            <div class="[ flex flex-row justify-between items-center ]">
              <p class="[ text-base ]">Only on Twitter · Trending</p>
              <div class="[ h-full ][ flex items-center ]">...</div>
            </div>
            <p class="[ font-bold ][ leading-5 ]">WhatsApp</p>
            <p class="[ text-xs ][ mt-1 ][ leading-4 ]">209K Tweets</p>
          </div>
        </div>
        <!-- V-For Loop | Test -->
        <div class="trend [ py-3 px-4 ]" v-for="trend in getTrends()">
          <div class="[ flex flex-col ]">
            <div class="[ flex flex-row justify-between items-center ]">
              <p class="[ text-base text-twittergreyt ]">{{ trend.location }}</p>
              <div class="[ h-full ][ flex items-center ]">...</div>
            </div>
            <p class="[ font-bold ][ leading-5 ]">{{ trend.name }}</p>
            <p class="[ text-xs text-twittergreyt ][ mt-1 ][ leading-4 ]">{{ trend.tweet_count }} Tweets</p>
          </div>
        </div>
        <!-- Trend Section | END -->
        <div class="[ p-4 ]">
          <a href="#" class="[ no-underline ]">Show more</a>
        </div>
      </div>
      <!--  -->
      <div class="[ mb-4 ][ bg-twittergrey ][ rounded-2xl ]" style="width: 350px;">
        <div class="[ flex flex-row  flex-shrink-0 items-center ][ px-4 py-3 ]">
          <h2>
            <div class="[ text-xl leading-6 font-extrabold ]">Who to follow</div>
          </h2>
        </div>
        <!--  -->
        <div class="follow [ flex flex-row justify-between ][ p-4 ]">
          <div>
            <img src="@/assets/twitter/twitter_logo.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ mr-3 ][ flex items-center justify-center ]" style="border-radius: 50%;">
          </div>
          <div class="[ flex flex-col ]">
            <p class="[ font-bold ]">Steam Support 
              <b-icon
                icon="certificate"
                size="is-small">
              </b-icon>
            </p>
            <p class="[ text-twittergreyt ]">@Steam_Support</p>
          </div>
          <div class="[ ml-auto ][ flex items-center ]">
            <button class="[ bg-black text-white ][ px-4 py-1 ml-3 ][ font-bold ][ rounded-3xl ]">Follow</button>
          </div>
        </div>
        <!--  -->
        <div class="follow [ flex flex-row ][ p-4 ]">
          <div>
            <img src="@/assets/twitter/twitter_logo.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ mr-3 ][ flex items-center justify-center ]" style="border-radius: 50%;">
          </div>
          <div class="[ flex flex-col ]">
            <p class="[ font-bold ]">Disney</p>
            <p class="[ text-twittergreyt ]">@Disney</p>
          </div>
          <div class="[ ml-auto ][ flex items-center ]">
            <button class="[ bg-black text-white ][ px-4 py-1 ml-3 ][ font-bold ][ rounded-3xl ]">Follow</button>
          </div>
        </div>
        <!--  -->
        <div class="follow [ flex flex-row justify-between ][ p-4 ]">
          <div>
            <img src="@/assets/twitter/twitter_logo.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ mr-3 ][ flex items-center justify-center ]" style="border-radius: 50%;">
          </div>
          <div class="[ flex flex-col ]">
            <p class="[ font-bold ]">Elon Musk</p>
            <p class="[ text-twittergreyt ]">@elonmusk</p>
          </div>
          <div class="[ ml-auto ][ flex items-center ]">
            <button class="[ bg-black text-white ][ px-4 py-1 ml-3 ][ font-bold ][ rounded-3xl ]">Follow</button>
          </div>
        </div>
        <div class="[ p-4 ]">
          <a href="#" class="[ no-underline ]">Show more</a>
        </div>
      </div>

    </div>
  </div>
</template>