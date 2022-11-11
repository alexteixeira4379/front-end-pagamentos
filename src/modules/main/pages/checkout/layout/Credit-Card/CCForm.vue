<template>
  <div v-if="showDesktopLayout" class="card-input-wrapper">
    <div class="card-data">
      <div class="input-group">
        <div class="card-input-label proximanova-regular-normal-slate-gray-16px">Número do cartão*</div>
        <div class="card-input">
          <div class="input-text proximanova-regular-normal-tuatara-16px">1234 1234 1234</div>
        </div>
      </div>
      <div class="input-group">
        <div class="card-input-label proximanova-regular-normal-slate-gray-16px">
          Nome impresso no cartão*
        </div>
        <div class="card-input">
          <div class="input-text proximanova-regular-normal-tuatara-16px">
            Eustáquio da Silva Malandro
          </div>
        </div>
      </div>
      <div class="input-group-side-by-side">
        <div class="input-group-1">
          <div class="card-input-label proximanova-regular-normal-slate-gray-16px">Validade*</div>
          <div class="card-input"><div class="input-placeholder">MM/AA</div></div>
        </div>
        <div class="input-group-1">
          <div class="card-input-label proximanova-regular-normal-slate-gray-16px">Código segurança*</div>
          <div class="card-input">
            <div class="input-text proximanova-regular-normal-tuatara-16px">607</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-button-wrapper">
      <div class="card-buttons">
        <div class="bt-alternative">
          <div class="group-696">
            <div class="group-698">
              <img class="arrow_back_ios" src="/pages/checkout/img/arrow-back-ios@2x.svg" alt="arrow_back_ios" />
              <div class="label-2 valign-text-middle">Voltar</div>
            </div>
          </div>
        </div>
        <div class="bt-primary">
          <div class="label-3 valign-text-middle poppins-medium-white-14px">Pagar</div>
        </div>
      </div>
      <div class="card-footer-text">
        <p class="card-footer-label valign-text-middle">Não se preocupe, nosso site é seguro!</p>
        <img class="icon-lock" src="/pages/checkout/img/lock-1@2x.svg" alt="icon-lock" />
      </div>
    </div>
  </div>
  <div v-if="showMobileLayout" class="card-input-wrapper-1">
    <div class="card-data-1">
      <div class="input-group-2">
        <div class="card-input-label-1 proximanova-regular-normal-slate-gray-16px">
          Número do cartão*
        </div>
        <div class="card-input-1">
          <div class="input-text-1 proximanova-regular-normal-tuatara-16px">1234 1234 1234</div>
        </div>
      </div>
      <div class="input-group-2">
        <div class="card-input-label-1 proximanova-regular-normal-slate-gray-16px">
          Nome impresso no cartão*
        </div>
        <div class="card-input-1">
          <div class="input-text-1 proximanova-regular-normal-tuatara-16px">
            Eustáquio da Silva Malandro
          </div>
        </div>
      </div>
      <div class="input-group-side-by-side-1">
        <div class="input-group-3">
          <div class="card-input-label-1 proximanova-regular-normal-slate-gray-16px">Validade*</div>
          <div class="card-input-1"><div class="input-placeholder-1">MM/AA</div></div>
        </div>
        <div class="input-group-3">
          <div class="card-input-label-1 proximanova-regular-normal-slate-gray-16px">
            Código segurança*
          </div>
          <div class="card-input-1">
            <div class="input-text-1 proximanova-regular-normal-tuatara-16px">607</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-button-wrapper-1">
      <div class="card-buttons-1">
        <div class="bt-alternative-1">
          <div class="group-696-1">
            <div class="group-698-1">
              <img class="arrow_back_ios-1" src="/pages/checkout/img/arrow-back-ios-1@2x.svg" alt="arrow_back_ios" />
              <div class="label-6 valign-text-middle">Voltar</div>
            </div>
          </div>
        </div>
        <div class="bt-primary-1">
          <div class="label-7 valign-text-middle poppins-medium-white-14px">Pagar</div>
        </div>
      </div>
      <div class="card-footer-text-1">
        <p class="card-footer-label-1 valign-text-middle">Não se preocupe, nosso site é seguro!</p>
        <img class="lock" src="/pages/checkout/img/lock@2x.svg" alt="lock" />
      </div>
    </div>
  </div>
</template>