import { Localization } from "@/shared/localization/localization"

export abstract class BaseEntityLocalizationSerive {
    protected readonly getCurrentLocalization: () => Localization

    constructor(getCurrentLocalizationFunction: () => Localization) {
        this.getCurrentLocalization = getCurrentLocalizationFunction
    }
}