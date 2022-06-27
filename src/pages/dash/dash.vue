<style scoped lang="scss" src="./dash.scss"></style>
<script lang="ts" src="./dash.ts"></script>
<template>
  <div class="[ dash ][ w-full ]">
    <div class="[ flex flex-row justify-between ]">
      <h1>Home</h1>
      <i></i>
    </div>
    <form class="[  ]">
      <div class="[  ]">
        <img src="#" alt="user_profile_pic" class="[ rounded-full h-16 w-16 ][ flex items-center justify-center ]">
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