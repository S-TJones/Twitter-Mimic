<style scoped lang="scss" src="./dash.scss"></style>
<script lang="ts" src="./dash.ts"></script>
<template>
  <div class="[ dash ][ w-full ]">
    <div class="[ h-12 w-full ][ flex flex-row justify-between items-center ][ px-4 mx-auto ]">
      <p class="[ text-base ]">Home</p>
      <i class="[ h-8 w-12 ]"></i>
    </div>
    <form class="[ pt-1 ]">
      <div class="[  ]">
        <img src="@/assets/twitter/twitter_logo.jpg" alt="user_profile_pic" class="[ rounded-full h-16 w-16 ][ flex items-center justify-center ]">
      </div>
      <div class="[  ]">
        <textarea name="tpost" id="tpost" cols="30" rows="3" placeholder="What's happening?"></textarea>
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
  </div>
</template>