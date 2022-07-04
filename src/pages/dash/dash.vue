<style scoped lang="scss" src="./dash.scss"></style>
<script lang="ts" src="./dash.ts"></script>
<template>
  <div class="[ dash ][ w-full ]">
    <div class="[ h-12 w-full ][ flex flex-row justify-between items-center ][ px-4 mx-auto ]">
      <p class="[ text-base ]">Home</p>
      <i class="[ h-8 w-12 ]"></i>
    </div>
    <form class="[ pt-1 ][ w-full ]">
      <div class="[  ]">
        <img src="@/assets/twitter/twitter_logo.jpg" alt="user_profile_pic" class="[ rounded-full h-16 w-16 ][ flex items-center justify-center ]">
      </div>
      <div class="[  ]">
        <textarea name="tpost" id="tpost" cols="30" rows="3" placeholder="What's happening?" class="[ w-full ]"></textarea>
        <div class="[  ]">
          <div class="[ flex flex-row justify-evenly ]">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <!-- Switch this button with a Buefy button -->
          <button type="submit">Tweet</button>
        </div>
      </div>
    </form>
    <hr>
    <div class="[ my-1 ]"></div>
    <!--  -->
    <div class="post [ w-full max-w-xl ][ mx-auto ][ text-sm ][ border ]">
      <div class="[ px-4 ][ w-full ]">
        <div class="[ flex flex-col flex-shrink flex-grow ]">
          <div class="[ flex flex-col ]">
            <div class="[ pt-3 ][ mb-1 ]"></div>
            <div class="[ flex flex-row ]">
              <div class="[ mr-3 ][ flex-shrink-0 flex justify-center ]">
                <img src="@/assets/twitter/twitter_logo.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ flex items-center justify-center ]" style="border-radius: 50%;">
              </div>
              <div class="[ pb-3 ][ flex flex-col justify-center ]">
                <div class="[ mb-1 ][ flex flex-row justify-between items-start ]">
                  <div>Marvel Entertainment <i></i> @Marvel · 23h</div>
                  <div class="[ ml-5 ][ h-5 ][ flex justify-center items-center text-center ]">...</div>
                </div>
                <div>
                  <div class="post-text">
                    In 5 days, witness the power of #Thor. <br>
                    Experience the cinematic event, Marvel Studios’ #ThorLoveAndThunder, only in theaters this Friday! Get tickets now: http://fandango.com/ThorLoveAndThunder
                  </div>
                  <div class="post-image [ mt-3 ]">
                    <div><img src="" alt="" class="[  ]"></div>
                    <div>From Thor</div>
                  </div>
                  <div class="post-buttons [ flex flex-row justify-between ][ mt-3 ]">
                    <div class="[ flex justify-start ]">
                      <i></i>
                      <p class="[ px-3 ]">33</p>
                    </div>
                    <div class="[ flex justify-start ]">
                      <i></i>
                      <p class="[ px-3 ]">247</p>
                    </div>
                    <div class="[ flex justify-start ]">
                      <i></i>
                      <p class="[ px-3 ]">2465</p>
                    </div>
                    <div class="[ flex justify-start ]"><i></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="post [ w-full max-w-xl ][ mx-auto ][ text-sm ][ border ]">
      <div class="[ px-4 ][ w-full ]">
        <div class="[ flex flex-col flex-shrink flex-grow ]">
          <div class="[ flex flex-col ]">
            <div class="[ pt-3 ][ mb-1 ]"></div>
            <div class="[ flex flex-row ]">
              <div class="[ mr-3 ][ flex-shrink-0 flex justify-center ]">
                <img src="@/assets/twitter/twitter_logo.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ flex items-center justify-center ]" style="border-radius: 50%;">
              </div>
              <div class="[ pb-3 ][ flex flex-col justify-center ]">
                <div class="[ mb-1 ][ flex flex-row justify-between items-start ]">
                  <div>Marques Brownlee <i></i> @MKBHD · 13h</div>
                  <div class="[ ml-5 ][ h-5 ][ flex justify-center items-center text-center ]">...</div>
                </div>
                <div>
                  <div class="post-text">
                    Yes yes you should definitely take lots of videos of these fireworks. You will definitely watch the videos later
                  </div>
                  <div class="post-image [ mt-3 ]">
                    <div><img src="@/assets/twitter/twitter_logo.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ flex items-center justify-center ]" style="border-radius: 50%;"></div>
                    <div></div>
                  </div>
                  <div class="post-buttons [ flex flex-row justify-between ][ mt-3 ]">
                    <div class="[ flex justify-start ]">
                      <i></i>
                      <p class="[ px-3 ]">{{temp}}343</p>
                    </div>
                    <div class="[ flex justify-start ]">
                      <i></i>
                      <p class="[ px-3 ]">1984</p>
                    </div>
                    <div class="[ flex justify-start ]">
                      <i></i>
                      <p class="[ px-3 ]">37.8K</p>
                    </div>
                    <div class="[ flex justify-start ]"><i></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>