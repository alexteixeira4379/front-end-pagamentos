<template>
  <div :class="gClass('#card-image-wrapper')">
    <div :class="gClass('#card-image-content')">
      <img :class="gClass('#card-image-logo')" src="/pages/checkout/img/card-image-logo@2x.svg" alt="card-image-logo" />
      <div :class="gClass('#card-image-data')">
        <div :class="gClass('#card-bumber-wrapper')">
          <div :class="{ '#card-number-block': showDesktopLayout, 'card-number-block-4': showMobileLayout }">
            <div :class="gClass('#ellipse')"></div>
            <div :class="gClass('#ellipse')"></div>
            <div :class="gClass('#ellipse')"></div>
            <div :class="gClass('#ellipse')"></div>
          </div>
          <div :class="{ 'card-number-block-1': showDesktopLayout, 'card-number-block-5': showMobileLayout }">
            <div :class="gClass('#ellipse')"></div>
            <div :class="gClass('#ellipse')"></div>
            <div :class="gClass('#ellipse')"></div>
            <div :class="gClass('#ellipse')"></div>
          </div>
          <div :class="{ 'card-number-block-2': showDesktopLayout, 'card-number-block-6': showMobileLayout }">
            <div :class="gClass('#ellipse')"></div>
            <div :class="gClass('#ellipse')"></div>
            <div :class="gClass('#ellipse')"></div>
            <div :class="gClass('#ellipse')"></div>
          </div>
          <div :class="{ 'card-number-block-3': showDesktopLayout, 'card-number-block-7': showMobileLayout }">
            <div :class="gClass('#ellipse')"></div>
            <div :class="gClass('#ellipse')"></div>
            <div :class="gClass('#ellipse')"></div>
            <div :class="gClass('#ellipse')"></div>
          </div>
        </div>
        <div :class="gClass('#card-holder-wrapper')">
          <div :class="gClass('#card-holder-name')" class="valign-text-middle">NOME COMPLETO</div>
          <div :class="gClass('#card-valid-wrapper')">
            <div :class="gClass('#label-valid')" class="valign-text-middle">MÊS/ANO</div>
            <div :class="gClass('#card-expires-wrapper')">
              <div :class="gClass('#card-valid-label valign-text-middle')">Valid<br/>Thru</div>
              <div :class="gClass('#frame-923')">
                <div :class="gClass('#card-expires-month')">
                  <div :class="gClass('#ellipse-8')"></div>
                  <div :class="gClass('#ellipse-8')"></div>
                </div>
                <img
                    :class="gClass('#card-expires-divisor')"
                    class="card-expires-divisor"
                    src="/pages/checkout/img/card-expires-divisor@2x.svg"
                    alt="card-expires-divisor"
                />
                <div :class="gClass('#card-expires-year')">
                  <div :class="gClass('#ellipse-8')"></div>
                  <div :class="gClass('#ellipse-8')"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>