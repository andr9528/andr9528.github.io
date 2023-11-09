import { EmploymentEntity } from "../entities/employment-entity"
import { GeneralInformationEntity } from "../entities/general-information-entity"
import { EntityEmploymentLocalizationKeys } from "../localization/employment-localization"
import { LocalizationService } from "./localization-service"
import { EntityGeneralInformationLocalizationKeys } from '../localization/general-information-localization';
import { SkillEntity, SkillLevel } from "../entities/skill-entity";

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
            countryKey: this.getEntityGeneralInformationLocalizationKey("country"),
            address: 'Duftrankevej 17 2. mf',
            postalNumber: 5200
        }
    }

    private getEntityGeneralInformationLocalizationKey(key: EntityGeneralInformationLocalizationKeys): EntityGeneralInformationLocalizationKeys {
        return key
    }

    public getEmploymentEntities(): EmploymentEntity[] {
        return [
            {
                jobTitleKey: this.getEntityEmploymentLocalizationKey("jobTitleApps4All"),
                startDate: new Date(2020, 9, 1),
                endDate: new Date(2020, 11, 31),
                employer: 'Apps4All',
                city: 'Svendborg',
                workDescriptionKey: this.getEntityEmploymentLocalizationKey("workDescriptionApps4All")
            },
            {
                jobTitleKey: this.getEntityEmploymentLocalizationKey("jobTitleTv2"),                 
                startDate: new Date(2022, 3, 1),
                endDate: new Date(2023, 11, 31),
                employer: 'Tv2 Danmark',
                city: 'Odense',
                workDescriptionKey: this.getEntityEmploymentLocalizationKey("workDescriptionTv2")
            }
        ].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()).reverse()
    }

    private getEntityEmploymentLocalizationKey(key: EntityEmploymentLocalizationKeys): EntityEmploymentLocalizationKeys {
        return key
    }

    public getSkillsEntities(): SkillEntity[] {
        return [
            {
                name: 'C#',
                level: SkillLevel.Experienced,
                importance: 100
            },
            {
                name: 'Typescript',
                level: SkillLevel.Skillfull,
                importance: 90
            },
            {
                name: 'Scrum',
                level: SkillLevel.Skillfull,
                importance: 80
            },
            {
                name: 'Git',
                level: SkillLevel.Skillfull,
                importance: 85
            },
            {
                name: 'Entity Framework Core',
                level: SkillLevel.Skillfull,
                importance: 84
            },
            {
                name: 'Java',
                level: SkillLevel.Novice,
                importance: 20
            },
            {
                name: 'Python',
                level: SkillLevel.Novice,
                importance: 19
            },
        ].sort(this.sortSkill.bind(this)).reverse()
    }

    private sortSkill(a: SkillEntity, b: SkillEntity): number {
        if (a.level > b.level) {
            return 1
        } else if (a.level < b.level) {
            return -1
        }

        if (a.importance > b.importance) {
            return 1
        } else if (a.importance < b.importance) {
            return -1
        }
        return 0
    }
}