<style scoped lang="scss" src="./landing.scss"></style>
<script lang="ts" src="./landing.ts"></script>
<template>
  <div class="[ landing ]">
    <div id="top-half" class="[ grid grid-cols-12 gap-0 ]">
      <div id="left" class="[ col-span-7 ]">
        <img src="@/assets/twitter/twitter_landing.png" class="[ h-full ]">
      </div>
      <div id="right" class="[ col-span-5 ]">
        <div>
          <img src="@/assets/twitter/twitter_logo.jpg" alt="twitter logo" class="[ h-10 w-10 ]">
          <h1>Happening Now</h1>
          <h4>Join Twitter today.</h4>
        </div>
        <div class="[  ]">
          <a href="#" class="[ no-underline p-4 rounded-3xl ]">Sign up with Google</a>
          <a href="#" class="[ no-underline p-4 rounded-3xl ]">Sign up with Apple</a>
          <div class="[ flex flex-row p-2 items-center ]">
            <div class="[ border-black border-2 w-24 min-w-0 ]"></div>
            <p class="[ px-2 ]">or</p>
            <div class="[ border-black border-2 w-24 min-w-0 ]"></div>
          </div>
          <a href="#" class="[ no-underline text-white bg-twitterblue p-4 rounded-3xl w-auto inline-block ]">Sign up with phone or email</a>
          <p>
            By signing up, you agree to the <a href="#" class="[ no-underline ]">Terms of Service</a> and <a href="#" class="[ no-underline ]">Privacy Policy</a>, including <a href="#" class="[ no-underline ]">Cookie Use</a>.
          </p>
        </div>
        <div>
          <p class="[ font-medium ]">Already have an account?</p>
          <button class="[ py-1 px-2 text-twitterblue bg-white border-twitterblue no-underline ]">Sign In</button>
        </div>
      </div>
    </div>
    <div id="bottom-half" class="[ flex flex-col ]">
      <div class="[ flex items-center flex-wrap justify-items-center mx-8 ]">
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">About</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Help Center</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Terms of Service</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Privacy Policy</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Cookie Policy</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Accessibility</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Ads Info</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Blog</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Status</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Careers</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Brand Resources</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Advertising</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Marketing</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Twitter for Business</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Developers</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Directory</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">Settings</a>
        <p class="[ text-sm text-typography-light no-underline pr-2 ][ whitespace-no-wrap ]">&copy; 2022 Twitter, Inc.</p>
      </div>
      
      <!--<p class="[ text-center ]">© 2022 Twitter, Inc.</p>-->
    </div>
  </div>
</template>