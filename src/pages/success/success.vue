<style scoped lang="scss" src="./success.scss"></style>
<script lang="ts" src="./success.ts"></script>
<template>
  <div class="[ w-full ][ flex flex-col justify-center items-center ]">
    <h1 class="[  ]">Payment Successful</h1>
    <div>
      <div class="checked">
        <img src="@/assets/twitter/check_mark.png" alt="check mark" class="[ w-full ]" style="height:80%;">
      </div>
      <div class="[ flex flex-col justify-center items-center ][ text-sm ]">
        <p>Your payment has benn processed.</p>
        <p>Details of transaction are included below.</p>
      </div>
    </div>
    <div class="[ flex flex-col justify-center items-center ][ w-full ]">
      <div class="[ font-bold ][ pt-6 pb-6 ]">
        Transaction Number: ##########
      </div>
      <div class="[ flex flex-row justify-between items-center ][ w-full ]">
        <h3 class="[ pl-12 ]">TOTAL AMOUNT PAID</h3>
        <p class="[ pr-12 ]">$45.25</p>
      </div>
      <div class="[ flex flex-row justify-between items-center ][ w-full ][ pt-4 pb-4 ]">
        <h3 class="[ pl-12 ]">PAYED BY</h3>
        <p class="[ pr-12 ]">John Doe</p>
      </div>
      <div class="[ flex flex-row justify-between items-center ][ w-full ]">
        <h3 class="[ pl-12 ]">TRANSACTION DATE</h3>
        <p class="[ pr-12 ]">29 Sept, 2022 - 3:45 AM</p>
      </div>
    </div>
  </div>

</template>