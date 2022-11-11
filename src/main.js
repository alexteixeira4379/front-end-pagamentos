
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import i18n from '@/i18n'
import moment from 'moment'

moment.locale('pt-br');


import Jquery from 'jquery'
/**
 * set jquery function
 * @type {(function(*=): *)|*}
 */
window.$ =  Jquery


window.vueTest = createApp(App)
    .use(store)
    .use(Quasar, quasarUserOptions)
    .use(router)
    .use(i18n)
    .use({
        install(app){
            app.mixin({
                data() {
                    return {
                        showDesktopLayout: true,
                        showMobileLayout: false,
                    };
                },
                methods: {
                  checkWindowSize(){
                      this.showDesktopLayout  = document.body.offsetWidth > 1378
                      this.showMobileLayout  = !this.showDesktopLayout
                  },
                  gClass(classes){
                      return classes.toString().split(' ').map((c) => {
                          if(c.substring(0,1) === '#'){
                              if(this.showDesktopLayout){
                                  return c.substring(1)
                              } else {
                                  return c.substring(1) + '-1'
                              }
                          } else {
                              return c
                          }
                      }).join(' ')
                  }
                },
                created() {
                    this.checkWindowSize()
                    window.addEventListener('resize', () => {
                        this.checkWindowSize()
                    })
                }
            });

        }
    })
    .mount('#app')