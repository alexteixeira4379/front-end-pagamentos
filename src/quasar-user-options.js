
import './styles/quasar.scss'
import iconSet from 'quasar/icon-set/material-icons'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import lang from 'quasar/lang/pt-BR.js'
import '@quasar/extras/material-icons/material-icons.css'
import { Notify } from 'quasar'
// To be used on app.use(Quasar, { ... })
export default {
  animations: 'all',
  config: {
  },
  plugins: {
    Notify
  },
  lang: lang,
  iconSet: iconSet
}