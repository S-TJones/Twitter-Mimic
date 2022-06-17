<style scoped lang="scss" src="./landing.scss"></style>
<script lang="ts" src="./landing.ts"></script>
<template>
  <div class="[ landing flex flex-col ]">
    <div id="top-half" class="[ flex flex-row flex-1 ]">
      <div id="left" class="[ w-full ]">
        <div id="image" class="[ w-full h-full ][ bg-cover bg-no-repeat bg-center ][ overflow-hidden ]"></div>
      </div>
      
      <div id="right" class="[ flex justify-center flex-col p-4 ]">
        <div class="[  ]">
          <img src="@/assets/twitter/twitter_logo.jpg" alt="twitter logo" class="[ h-12 w-12 ]">
        </div>
        <div>
          <p class="[ my-12 text-6xl font-bold ]">Happening Now</p>
          <p class="[ text-3xl leading-9 mb-8 font-bold ]">Join Twitter today.</p>
        </div>
        <div class="[ flex flex-col ]">
          <a href="#" class="[ no-underline px-4 py-2 rounded-3xl border border-twittergray text-center w-64 mb-2 ]">Sign up with Google</a>
          <a href="#" class="[ no-underline px-4 py-2 rounded-3xl border border-twittergray text-center w-64 ]">Sign up with Apple</a>
          <div class="[ flex flex-row p-2 items-center ]">
            <div class="[ separator ]"></div>
            <p class="[ px-2 ]">or</p>
            <div class="[ separator ]"></div>
          </div>
          <a href="#" class="[ no-underline text-white bg-twitterblue py-3 rounded-3xl w-64 inline-block font-bold leading-5 text-sm px-4 text-center mb-2 ]">Sign up with phone or email</a>
          <p id="legal-stuff" class="[ leading-3 text-xs mb-5 ]">
            By signing up, you agree to the <a href="#" class="[ no-underline text-twitterblue ]">Terms of Service</a> and <a href="#" class="[ no-underline text-twitterblue ]">Privacy Policy</a>, including <a href="#" class="[ no-underline text-twitterblue ]">Cookie Use</a>.
          </p>
        </div>
        <div class="[ mt-10 ]">
          <p class="[ font-medium mb-5 leading-5 text-base ]">Already have an account?</p>
          <button class="[ py-1 px-2 text-twitterblue bg-white border-twitterblue no-underline border text-center w-64 rounded-3xl ]">Sign In</button>
        </div>
      </div>
    </div>
    <div id="bottom-half" class="[ flex flex-col ]">
      <nav class="[ flex items-stretch flex-wrap flex-row justify-center flex-shrink-0 py-3 px-4 ]">
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">About</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Help Center</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Terms of Service</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Privacy Policy</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Cookie Policy</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Accessibility</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Ads Info</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Blog</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Status</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Careers</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Brand Resources</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Advertising</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Marketing</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Twitter for Business</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Developers</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Directory</a>
        <a href="#" class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">Settings</a>
        <p class="[ text-sm text-typography-light no-underline pr-4 ][ whitespace-no-wrap leading-4 my-1 ]">&copy; 2022 Twitter, Inc.</p>
      </nav>
      
      <!--<p class="[ text-center ]">© 2022 Twitter, Inc.</p>-->
    </div>
  </div>
</template>