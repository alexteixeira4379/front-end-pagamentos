import { orderBy } from 'lodash'

/**
 * export list of uf states of brazilian
 *
 * @returns {Object[]}
 * @constructor
 */
export const brUFs = () => {
    let ufs = {
        '35':"SP",'12':"AC", '27':"AL", '13':"AM", '16':"AP", '29':"BA", '23':"CE", '53':"DF",
        '32':"ES", '52':"GO", '21':"MA", '31':"MG", '50':"MS", '51':"MT", '15':"PA", '25':"PB", '26':"PE",
        '22':"PI", '41':"PR", '33':"RJ", '24':"RN", '11':"RO", '14':"RR", '43':"RS", '42':"SC", '28':"SE",
        '17':"TO"
    };
    return orderBy(Object.entries(ufs), [1]).map( ((uf) => ({ label: uf[1], value: uf[0]  })) );
}

export const educationLevels = () => {
    let levels = {
        1: "Fundamental - Incompleto", 2: "Fundamental - Completo",
        3: "Médio - Incompleto", 4: "Médio - Completo", 5: "Superior - Incompleto",
        6: "Superior - Completo", 7: "Pós-graduação ( Lato senso ) - Incompleto",
        8: "Pós-graduação ( Lato senso ) - Completo",
        9: "Pós-graduação ( Stricto sensu, nível mestrado ) - Incompleto",
        10: "Pós-graduação ( Stricto sensu, nível mestrado ) - Completo",
        11: "Pós-graduação ( Stricto sensu, nível doutor ) - Incompleto",
        12: "Pós-graduação ( Stricto sensu, nível doutor ) - Completo"
    }
    return Object.entries(levels).map( ((lv) => ({ label: lv[1], value: lv[0]  })) );
}

export const typesAsValues = () => {
    let levels = {
        1: "Influencer", 2: "Parceiro",
    }
    return Object.entries(levels).map( ((lv) => ({ label: lv[1], value: lv[0]  })) );
}
