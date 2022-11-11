import * as yup from "yup";
import {rules} from "@/shared/form-presets";

/**
 *
 * @param { Array } names
 * @returns {*}
 */
export function getMappedFields( names ){

    let object = {}
    names.map( (name) => {
        if(rules[name]){
            object[name] = rules[name]
        }
    })

    return object
}

/**
 * build yup object form
 *
 * @param fields
 * @returns {*}
 */
export function build( fields ){
    return yup.object( fields )
}

export function formChanged( initialValues, values ){
    let result = false

    Object.keys(initialValues).forEach( name => {
        let initialValue = initialValues[name] || undefined,
            newValue = values[name] || undefined

        if(initialValue !== newValue){
            result = true
        }
    })
    return result
}