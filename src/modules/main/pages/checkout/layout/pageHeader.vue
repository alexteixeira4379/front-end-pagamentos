<template>
  <div :class="gClass('#header-wrapper')">
    <img v-if="showMobileLayout" class="logo-wrapper-1" src="/pages/checkout/img/logo-wrapper@2x.svg" alt="logo-wrapper" />
    <img v-if="showDesktopLayout" class="logo-wrapper" src="/pages/checkout/img/logo-wrapper-1@2x.svg" alt="logo-wrapper" />
    <q-btn outline color="white"  label="Sair" icon-right="close" size=".7em" rounded  />
  </div>
</template>
