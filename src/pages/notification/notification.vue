<style scoped lang="scss" src="./notification.scss"></style>
<script lang="ts" src="./notification.ts"></script>
<template>
  <div class="[ notification ][ w-full ]">
    <div>
      <div class="[ h-12 w-full ][ flex flex-row justify-between items-center ][ px-4 mx-auto ]">
        <p class="[ text-base ]">Notifications</p>
        <i class="[ h-8 w-12 ]"></i>
      </div>
  
      <div>
        <b-table :data="data" :hoverable="true">
          <b-table-column field="text" width="40" v-slot="content">
            {{ content.row.text }}
          </b-table-column>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    const data = [
      { 'text': 'There was a login to your account @Vul_K_No from a new device on Jun 28, 2022. Review it now.' },
      { 'text': 'There was a login to your account @Vul_K_No from a new device on Jun 28, 2022. Review it now.' },
      { 'text': 'There was an attempt to log in to your account @Vul_K_No on Jun 28, 2022 that seems suspicious. Review it now.' },
      { 'text': 'It\'s your Twitter anniversary! Celebrate with a special Tweet created just for you' },
      { 'text': 'There was an attempt to log in to your account @Vul_K_No on Jun 21, 2022 that seems suspicious. Review it now.' },
    ];

    return {
      data,
      isEmpty: false,
    };
  }
};
</script>