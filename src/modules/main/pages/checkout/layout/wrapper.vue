<template>
  <div class="container-center-horizontal">
    <div :class="{
      'full-project screen':showMobileLayout,
      'carcaca-do-checkout-sem-forma-de-pagamento screen': showDesktopLayout
    }">
      <div class="frame-924" v-if="showMobileLayout">
        <slot></slot>
      </div>
      <slot v-if="showDesktopLayout"></slot>
    </div>
  </div>
</template>
