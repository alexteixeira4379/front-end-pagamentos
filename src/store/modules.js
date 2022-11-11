import request from './requests-store'
import assents from './assents'
import {stores} from '@/modules/main'

export default {
    request,
    assents,
    ...stores
}