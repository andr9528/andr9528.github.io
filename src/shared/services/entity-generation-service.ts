import { GeneralInformation } from "../entities/general-information"
import { LocalizationService } from "./localization-service"

export class EntityGenerationService {
    public static instance: EntityGenerationService = new EntityGenerationService()
    private localizationService: LocalizationService

    constructor() {
        this.localizationService = LocalizationService.instance
    }

    public getGeneralInformation(): GeneralInformation {
        return {
            firstName: this.localizationService.getEntityGeneralInformationText("firstName"),
            middleName: this.localizationService.getEntityGeneralInformationText("middleName"),
            lastName: this.localizationService.getEntityGeneralInformationText("lastName"),
            phoneNumber: this.localizationService.getEntityGeneralInformationText("phoneNumber"),
            email: this.localizationService.getEntityGeneralInformationText("email"),
            dateOfBirth: this.localizationService.getEntityGeneralInformationText("dateOfBirth"),
            city: this.localizationService.getEntityGeneralInformationText("city"),
            country: this.localizationService.getEntityGeneralInformationText("country"),
            address: this.localizationService.getEntityGeneralInformationText("address"),
            postalNumber: this.localizationService.getEntityGeneralInformationText("postalNumber")
        }
    }
}