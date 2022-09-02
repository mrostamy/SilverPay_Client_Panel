import { bankNames } from "../../data/enums/bank_name_enums";
import { factorTypes } from "../../data/enums/factor_types_enums.";


declare global {
    interface Number {

        toBankName(): string;
        toFactorType(): string;
    }
}

Number.prototype.toBankName = function (this: number): string {

    let bankCode=this;

    switch (bankCode) {
        case bankNames.mellat:
            return 'mellat';

        case bankNames.melli:
            return 'melli';

        case bankNames.saderat:
            return 'saderat';

        case bankNames.shahr:
            return 'shahr';
        default:
            return ''

    }
}

Number.prototype.toFactorType = function (this: number): string {

    let factorCode = this;


    switch (factorCode) {
        case factorTypes.factor:
            return 'factor';

        case factorTypes.easyPay:
            return 'easyPay';

        case factorTypes.support:
            return 'support';
        default:
            return ''

    }
}