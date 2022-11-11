import * as yup from "yup";
import services from "@/shared/http";
import messages from './custom-messages-test'
import { useValidationsBR } from 'validations-br';
import moment from "moment";
import store from "@/store";

yup.addMethod(yup.string, "checkPassword", function (errorMessage) {

    let testPasswordInProgress = null;
    let testable = {}

    return this.test(`test-password-check`, errorMessage, function (value) {
        if( Object.prototype.hasOwnProperty.call(testable, value ) )
            return testable[value]
        if(testPasswordInProgress) return testPasswordInProgress
        if(!value) return null
        const { path, createError } = this;
        testPasswordInProgress = services.account.validatePassword({
            senha: value
        }).then( () => true )
            .catch( () => createError({ path, message: messages.passwordIncorrect }) )
            .finally( () => testPasswordInProgress = null )
        testable[value] = testPasswordInProgress
        return testPasswordInProgress
    });
});

yup.addMethod(yup.string, "emailExists", function (errorMessage) {

    let testEmailInProgress = null;
    let testable = {}

    return this.test(`test-email-exists`, errorMessage, function (value) {
        if( Object.prototype.hasOwnProperty.call(testable, value ) )
            return testable[value]
        if(testEmailInProgress) return testEmailInProgress
        if(!value) return true
        if(!useValidationsBR('email', value))
            return null
        const { path, createError } = this;
        testEmailInProgress = services.validations.email(null,{
            partnerSlug: store.getters['partner/getPartnerSlug'],
            email: value
        }).then( () => true )
            .catch( () => createError({ path, message: messages.emailAlreadyExists }) )
            .finally( () => testEmailInProgress = null )
        testable[value] = testEmailInProgress
        return testEmailInProgress
    });
});

yup.addMethod(yup.string, "slug", function (errorMessage) {

    let testStoreSlugInProgress = null;
    let testable = {}

    return this.test(`test-store-slug`, errorMessage, function (value) {
        if( Object.prototype.hasOwnProperty.call(testable, value ) )
            return testable[value]
        if(testStoreSlugInProgress) return testStoreSlugInProgress
        if(!value) return null
        const { path, createError } = this;

        if(
            value.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/) ||
            /\s/g.test(value) ||
            !(/^[a-zA-Z-1-9]*$/.test(value))
        ){
            return testable[value] = createError({ path, message: messages.onlyLetters })
        }

        testStoreSlugInProgress = services.validations.slug(null,{
            partnerSlug: store.getters['partner/getPartnerSlug'],
            newSlug: value
        }).then( () => true )
            .catch( () => createError({ path, message: messages.storeSlugInvalid }) )
            .finally( () => testStoreSlugInProgress = null )
        testable[value] = testStoreSlugInProgress
        return testStoreSlugInProgress
    });
});

yup.addMethod(yup.string, "phone", function (errorMessage) {

    let testPhoneInProgress = null;
    let testable = {}

    return this.test(`test-phone-check`, errorMessage, function (value) {
        if(!value) return true
        const { path, createError } = this;
        let result = useValidationsBR('phone', value)
        if(result){

            if( Object.prototype.hasOwnProperty.call(testable, value ) ){
                return testable[value]
            }
            if(testPhoneInProgress) {
                return testPhoneInProgress
            }

            testPhoneInProgress = services.validations.phone(null,{
                partnerSlug: store.getters['partner/getPartnerSlug'],
                phone: value
            }).then( () => true )
                .catch( ({ errors }) => createError({ path, message: errors ? errors.phone[0] : messages.phoneIncorrect }) )
                .finally( () => testPhoneInProgress = null )
            testable[value] = testPhoneInProgress

            return testPhoneInProgress

        } else{
            return createError({ path, message: messages.phoneIncorrect })
        }

    });
});


yup.addMethod(yup.string, "cpf", function (errorMessage) {

    let testCpfInProgress = null;
    let testable = {}

    return this.test(`test-cpf-check`, errorMessage, function (value) {
        if(!value) return true
        const { path, createError } = this;
        let result = useValidationsBR('cpf', value)
        if(result){

            if( Object.prototype.hasOwnProperty.call(testable, value ) ){
                return testable[value]
            }
            if(testCpfInProgress) {
                return testCpfInProgress
            }

            testCpfInProgress = services.validations.cpf(null,{
                partnerSlug: store.getters['partner/getPartnerSlug'],
                cpf: value.replace(/[^0-9]/g,'')
            }).then( () => true )
                .catch( ({ errors }) => createError({ path, message: errors ? errors.cpf[0] : messages.cpfIncorrect }) )
                .finally( () => testCpfInProgress = null )
            testable[value] = testCpfInProgress

            return testCpfInProgress

        } else{
            return createError({ path, message: messages.cpfIncorrect })
        }

    });
});

yup.addMethod(yup.string, "cnpj", function (errorMessage) {

    let testCnpjInProgress = null;
    let testable = {}

    return this.test(`test-cnpj-check`, errorMessage, function (value) {
        if(!value) return true
        const { path, createError } = this;
        let result = useValidationsBR('cnpj', value)
        if(result){

            if( Object.prototype.hasOwnProperty.call(testable, value ) ){
                return testable[value]
            }
            if(testCnpjInProgress) {
                return testCnpjInProgress
            }

            testCnpjInProgress = services.validations.cnpj(null,{
                partnerSlug: store.getters['partner/getPartnerSlug'],
                cnpj: value.replace(/[^0-9]/g,'')
            }).then( () => true )
                .catch( ({ errors }) => createError({ path, message: errors ? errors.cnpj[0] : messages.cnpjIncorrect }) )
                .finally( () => testCnpjInProgress = null )
            testable[value] = testCnpjInProgress

            return testCnpjInProgress

        } else{
            return createError({ path, message: messages.cnpjIncorrect })
        }

    });
});


yup.addMethod(yup.string, "minAge", function (errorMessage) {

    return this.test(`test-age-check`, errorMessage, function (value) {

        if(!value) return true
        const { path, createError } = this;

        return moment().diff(moment(value),'years') >= 18 ||
            createError({ path, message: messages.minAge })

    });
});
yup.addMethod(yup.string, "maxAge", function (errorMessage) {

    return this.test(`test-age-check`, errorMessage, function (value) {

        if(!value) return true
        const { path, createError } = this;

        return moment().diff(moment(value),'years') <= 100 ||
            createError({ path, message: messages.maxAge })

    });
});

export default yup