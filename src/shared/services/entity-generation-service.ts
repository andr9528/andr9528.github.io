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
            firstName: 'André',
            middleName: 'Steenhoff',
            lastName: 'Madsen',
            phoneNumber: 22287257,
            email: 'andre@steenhoff.dk',
            dateOfBirth: new Date(1996,1,3),
            city: 'Odense V',
            country: this.localizationService.getEntityGeneralInformationText("country"),
            address: 'Duftrankevej 17 2. mf',
            postalNumber: 5200
        }
    }
}