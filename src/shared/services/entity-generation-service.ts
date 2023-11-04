import { EmploymentEntity } from "../entities/employment-entity"
import { GeneralInformationEntity } from "../entities/general-information-entity"
import { LocalizationService } from "./localization-service"

export class EntityGenerationService {
    public static instance: EntityGenerationService = new EntityGenerationService()
    private localizationService: LocalizationService

    constructor() {
        this.localizationService = LocalizationService.instance
    }

    public getGeneralInformationEntity(): GeneralInformationEntity {
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

    public getEmploymentEntities(): EmploymentEntity[] {
        return [
            {
                jobTitle: this.localizationService.getEntityEmploymentText("jobTitleApps4All"),                 
                startDate: new Date(2020, 9, 1),
                endDate: new Date(2020, 11, 31),
                employer: 'Apps4All',
                city: 'Svendborg',
                workDescription: this.localizationService.getEntityEmploymentText("workDescriptionApps4All")
            },
            {
                jobTitle: this.localizationService.getEntityEmploymentText("jobTitleTv2"),                 
                startDate: new Date(2022, 3, 1),
                endDate: new Date(2023, 11, 31),
                employer: 'Tv2 Danmark',
                city: 'Odense',
                workDescription: this.localizationService.getEntityEmploymentText("workDescriptionTv2")
            }
        ].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()).reverse()
    }
}