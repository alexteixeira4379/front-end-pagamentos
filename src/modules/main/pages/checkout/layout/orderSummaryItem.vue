<template>
  <div :class="{'item-wrapper': showDesktopLayout, 'item-wrapper-2': showMobileLayout}">
    <div class="valign-text-middle"
         :class="{'label': showDesktopLayout, 'label-4': showMobileLayout}">
      <slot name="label"></slot>
    </div>
    <div class="valign-text-middle"
         :class="{'item-price': showDesktopLayout, 'item-price-2': showDesktopLayout}"
    ><slot name="price"></slot></div>
  </div>
</template>
