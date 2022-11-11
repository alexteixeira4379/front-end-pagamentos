<template>
  <div :class="gClass( active ? 'payment-method-item-active':'payment-method-item')">
    <div :class="{
      'pay-method-label valign-text-middle proximanova-normal-shuttle-gray-14px': showDesktopLayout,
      'pay-method-label-1 valign-text-middle proximanova-normal-shuttle-gray-12p': showMobileLayout
    }"><slot name="label"></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>