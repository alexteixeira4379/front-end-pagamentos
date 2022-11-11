<template>
  <div :class="gClass('#wizard-indicator-wrapper')">
    <div :class="gClass('#wizard-container')">
      <div :class="gClass('#wizard-bars-wrapper')">
        <div :class="gClass('#rectangle-2091')"></div>
        <div :class="gClass('#rectangle-2026')"></div>
      </div>
      <div :class="gClass('#wizard-indicator-parent')">
        <div :class="gClass('#wizard-indicator-child')">
          <div :class="gClass('#circle')">
            <div v-if="showDesktopLayout" class="overlap-group"><div class="number-1 proximanova-normal-white-16px">1</div></div>
            <div v-if="showMobileLayout" class="overlap-group-3"><div class="number-3 proximanova-normal-white-16px">1</div></div>
          </div>
          <div :class="gClass('#escolha-o-plano proximanova-regular-normal-shuttle-gray-14px')">Escolha o plano</div>
        </div>
        <div :class="gClass('#wizard-indicator-child')">
          <div :class="gClass('#circle')">
            <div v-if="showDesktopLayout" class="overlap-group-1"><div class="number proximanova-normal-white-16px">2</div></div>
            <div v-if="showMobileLayout"  class="overlap-group-4"><div class="number-2 proximanova-normal-white-16px">2</div></div>
          </div>
          <div :class="gClass('#servios-adicionais proximanova-regular-normal-shuttle-gray-14px')">Serviços adicionais</div>
        </div>
        <div :class="gClass('#wizard-indicator-child')">
          <div :class="gClass('#circle')">
            <div v-if="showDesktopLayout"  class="overlap-group-2"><div class="number proximanova-normal-white-16px">3</div></div>
            <div v-if="showMobileLayout" class="overlap-group-5"><div class="number-2 proximanova-normal-white-16px">3</div></div>
          </div>
          <div :class="gClass('#pagamento proximanova-regular-normal-shuttle-gray-14px')">Pagamento</div>
        </div>
      </div>
    </div>
  </div>
</template>
