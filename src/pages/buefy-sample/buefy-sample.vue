<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { RequireVue } from '@/modules/core/constants';

const {
  BDropdown,
  BDropdownItem,
  // tslint:disable-next-line:no-var-requires
} = require('buefy/dist/components/dropdown') as RequireVue;
// tslint:disable-next-line:no-var-requires
const { BIcon } = require('buefy/dist/components/icon') as RequireVue;

@Component({ components: { BDropdown, BDropdownItem, BIcon } })
export default class extends Vue {}
</script>

<template>
  <div class="[ text-center ]">
    <b-dropdown aria-role="list">
      <template #trigger="{ active }">
          <b-button class="[ border-0 shadow-none  ]"
            label="Click me!"
            :icon-right="active ? 'chevron-up' : 'chevron-down'" />
      </template>

      <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
    </b-dropdown>
    <b-button type="is-danger"
        icon-left="trash">
        Delete, does it wrap
    </b-button>
    <b-button tag="router-link"
      to="/landing"
      type="is-link"
      rounded>
      To Twitter
  </b-button>
  <b-field label="Select a color">
    <b-colorpicker class="[ c-picker ]" value="#7957d5" />
  </b-field>
  </div>
</template>

<style lang="scss">
.c-picker .dropdown-menu {
  width: 500px;
  & .colorpicker-content {
    height: 500px !important;
  }
}
</style>