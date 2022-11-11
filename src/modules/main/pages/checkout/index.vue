<template>
  <wrapper>
    <page-header/>
    <wizard class="q-mb-lg" />
    <order-summary v-if="showMobileLayout" />
    <card-checkout-wrapper />
  </wrapper>
</template>
<style lang="scss">
  @import './styles/index';
</style>
<script>
import Wrapper from "@/modules/main/pages/checkout/layout/wrapper";
import PageHeader from "@/modules/main/pages/checkout/layout/pageHeader";
import Wizard from "@/modules/main/pages/checkout/layout/wizard";
import OrderSummary from "@/modules/main/pages/checkout/layout/orderSummary";
import CardCheckoutWrapper from "@/modules/main/pages/checkout/layout/cardCheckoutWrapper";
export default {
  components: {CardCheckoutWrapper, OrderSummary, Wizard, PageHeader, Wrapper}
}
</script>