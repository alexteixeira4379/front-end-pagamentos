<template>
  <div :class="gClass('#order-summary')">
    <div :class="gClass('#order-summary-title')">
      <div :class="gClass('#title valign-text-middle')">Resumo do pedido</div>
    </div>
    <div :class="gClass('#items-wrapper proximanova-normal-oslo-gray-16px')">
      <order-summary-item>
        <template v-slot:label>Plano Anual</template>
        <template v-slot:price>R$ 599,00</template>
      </order-summary-item>
      <order-summary-item>
        <template v-slot:label>Certificado digital</template>
        <template v-slot:price>R$ 99,00</template>
      </order-summary-item>
    </div>
    <div :class="gClass('#total-wrapper proximanova-normal-haiti-20px')">
      <order-summary-item>
        <template v-slot:label>Total</template>
        <template v-slot:price>R$ 985,00</template>
      </order-summary-item>
    </div>
  </div>
</template>
<script>
import OrderSummaryItem from "@/modules/main/pages/checkout/layout/orderSummaryItem";
export default {
  components: {OrderSummaryItem}
}
</script>