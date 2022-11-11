<template>
  <div :class="gClass('#payment-methods-wrapper')">
    <div :class="gClass('#payment-methods-container')">

      <payment-method-select-op :active="true">
        <template v-slot:label>Cartão crédito</template>
      </payment-method-select-op>

      <payment-method-select-op :active="false">
        <template v-slot:label>Pix</template>
      </payment-method-select-op>

      <payment-method-select-op :active="false">
        <template v-slot:label>Boleto</template>
      </payment-method-select-op>

    </div>
  </div>

</template>
<script>
import PaymentMethodSelectOp from "@/modules/main/pages/checkout/layout/paymentMethodSelectOp";
export default {
  components: {PaymentMethodSelectOp}
}
</script>