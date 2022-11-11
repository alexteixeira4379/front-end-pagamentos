export { default as labels } from './labels'
export { default as rules } from './rules'
export { default as getStructure } from './structureFields'
export * from './schema'

/**
 * build initial values from schema
 *
 * @param presets
 * @param formSchema
 * @param data
 * @returns {{}}
 */
export function buildInitialValues( presets, formSchema, data ){
    let result = {}
    Object.keys(presets).forEach( ( field => {
        if(data[ presets[field] ]){
            result[field] = data[ presets[field] ]
            if(formSchema[field].type === 'select'){
                formSchema[field].options.forEach( (op) => {
                    if(op.value.toString() === result[field]){
                        result[field] = op
                    }
                })
            }
        }
    }))

    return result
}

export function getFormValuesChanged( presets, initialValues, values ){

    let payload = {}

    Object.keys(presets).forEach( field => {
        if(values[field] === initialValues[field]){
            return
        }
        if(typeof values[field] === 'object' ){
            payload[ presets[field] ] = values[field].value
        }
        else {
            payload[ presets[field] ] = values[field]
        }
    })

    return payload
}