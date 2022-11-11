<template>
  <div :class="gClass('#container-wrapper')">
    <div :class="gClass('#card-header')" class="card-header">
      <p :class="gClass('#title')" >Informe os dados do pagamento</p>
    </div>
    <div  :class="gClass('#container')">
      <div :class="gClass('#content-wrapper')">
        <payment-method-select />
        <div :class="gClass('#payment-method-content')">
          <CCCard/>
          <CCForm />
        </div>
      </div>
      <div class="order-summary-wrapper" v-if="showDesktopLayout">
        <OrderSummary />
      </div>
    </div>
  </div>
</template>
<script>
import CCCard from "@/modules/main/pages/checkout/layout/Credit-Card/CCCard";
import CCForm from "@/modules/main/pages/checkout/layout/Credit-Card/CCForm";
import PaymentMethodSelect from "@/modules/main/pages/checkout/layout/paymentMethodSelect";
import OrderSummary from "@/modules/main/pages/checkout/layout/orderSummary";
export default {
  components: {OrderSummary, PaymentMethodSelect, CCForm, CCCard}
}
</script>