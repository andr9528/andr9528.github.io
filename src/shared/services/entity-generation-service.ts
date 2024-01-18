import { EmploymentEntity } from "../entities/employment-entity"
import { GeneralInformationEntity } from "../entities/general-information-entity"
import { ComponentEmploymentLocalizationKeys, EntityEmploymentLocalizationKeys } from "../localization/employment-localization"
import { LocalizationService } from "./localization-service"
import { EntityGeneralInformationLocalizationKeys } from '../localization/general-information-localization';
import { SkillEntity, SkillLevel } from "../entities/skill-entity";
import { LinkEntity } from "../entities/link-entity";
import { EntityLinksLocalizationKeys } from "../localization/links-localization";
import { ReferenceEntity } from "../entities/reference-entity";
import { EntityReferencesLocalizationKeys } from "../localization/references-localization";
import { LanguageEntity, LanguageLevel } from "../entities/language-entity";
import { EntityLanguageLocalizationKeys } from "../localization/language-localization";
import { Importance, Periode } from "../entities/common";
import { EducationEntity } from "../entities/education-entity";
import { EntityEducationLocalizationKeys } from "../localization/education-localization";

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
        const entities: EmploymentEntity[] = [
            {
                jobTitleKey: this.getEntityEmploymentLocalizationKey("jobTitleApps4All"),
                startDate: new Date(2020, 9, 1),
                endDate: new Date(2020, 11, 31),
                employerKey: this.getEntityEmploymentLocalizationKey("employerApps4All"),
                city: 'Svendborg',
                workDescriptionKey: this.getEntityEmploymentLocalizationKey("workDescriptionApps4All"),
                joiningWordKey: this.getComponentEmploymentLocalizationKey("joiningWord1")
            },
            {
                jobTitleKey: this.getEntityEmploymentLocalizationKey("jobTitleTv2"),                 
                startDate: new Date(2022, 3, 1),
                endDate: new Date(2023, 11, 31),
                employerKey: this.getEntityEmploymentLocalizationKey("employerTv2"),
                city: 'Odense',
                workDescriptionKey: this.getEntityEmploymentLocalizationKey("workDescriptionTv2"),
                joiningWordKey: this.getComponentEmploymentLocalizationKey("joiningWord1")
            },
            {
                jobTitleKey: this.getEntityEmploymentLocalizationKey("jobTitleOwn"),                 
                startDate: new Date(2024, 0, 1),
                employerKey: this.getEntityEmploymentLocalizationKey("employerOwn"),
                city: 'Odense',
                workDescriptionKey: this.getEntityEmploymentLocalizationKey("workDescriptionOwn"),
                joiningWordKey: this.getComponentEmploymentLocalizationKey("joiningWord2")
            }

        ]

        return entities.sort((a, b) => this.sortPeriode(a, b)).reverse()
    }

    private sortPeriode(a: Periode, b: Periode): number {
        return a.startDate.getTime() - b.startDate.getTime()
    }

    private getEntityEmploymentLocalizationKey(key: EntityEmploymentLocalizationKeys): EntityEmploymentLocalizationKeys {
        return key
    }

    private getComponentEmploymentLocalizationKey(key: ComponentEmploymentLocalizationKeys): ComponentEmploymentLocalizationKeys {
        return key
    }

    public getSkillsEntities(): SkillEntity[] {
        const entities: SkillEntity[] = [
            {
                name: 'C#',
                level: SkillLevel.Experienced,
                importance: 100
            },
            {
                name: 'Typescript',
                level: SkillLevel.Skillful,
                importance: 90
            },
            {
                name: 'Scrum',
                level: SkillLevel.Skillful,
                importance: 80
            },
            {
                name: 'Git',
                level: SkillLevel.Skillful,
                importance: 85
            },
            {
                name: 'Entity Framework Core',
                level: SkillLevel.Skillful,
                importance: 84
            },
            {
                name: 'C++',
                level: SkillLevel.Novice,
                importance: 25
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
            {
                name: 'SQL',
                level: SkillLevel.Beginner,
                importance: 30
            },
            {
                name: 'Angular',
                level: SkillLevel.Novice,
                importance: 24
            },
            {
                name: 'Xamarin Forms',
                level: SkillLevel.Beginner,
                importance: 40
            },
            
        ]

        return entities.sort((a,b) => this.sortSkill(a, b)).reverse()
    }

    private sortSkill(a: SkillEntity, b: SkillEntity): number {
        if (a.level > b.level) {
            return 1
        } else if (a.level < b.level) {
            return -1
        }

        return this.sortImportance(a, b)
    }

    private sortImportance(a: Importance, b: Importance) {
        if (a.importance > b.importance) {
            return 1
        } else if (a.importance < b.importance) {
            return -1
        }
        return 0
    }

    public getLinkEntities(): LinkEntity[] {
        const entities: LinkEntity[] =  [
            {
                titleKey: this.getEntityLinkLocalizationKey("titleGitHub"),
                address: 'https://github.com/andr9528',
                remarkKey: this.getEntityLinkLocalizationKey("remarkGitHub"),
                importance: 100
            },
            {
                titleKey: this.getEntityLinkLocalizationKey("titleLinkedIn"),
                address: 'https://www.linkedin.com/in/andr%C3%A9-steenhoff-madsen-65a22698/',
                remarkKey: this.getEntityLinkLocalizationKey("remarkLinkedIn"),
                importance: 80
            },
            {
                titleKey: this.getEntityLinkLocalizationKey("titlePersonalPage"),
                address: 'https://andr9528.github.io/',
                remarkKey: this.getEntityLinkLocalizationKey("remarkPersonalPage"),
                importance: 90
            },
        ]

        return entities.sort((a, b) => this.sortImportance(a, b)).reverse()
    }

    private getEntityLinkLocalizationKey(key: EntityLinksLocalizationKeys): EntityLinksLocalizationKeys {
        return key
    }

    public getReferencesEntities(): ReferenceEntity[] {
        const entities: ReferenceEntity[] = [
            {
                name: 'Henrik Dudek',
                companyNameKey: this.getEntityReferenceLocalizationKey("companyNameTv2"),
                email: 'hedu@tv2.dk',                
                importance: 100,
            }
        ]

        return entities.sort((a, b) => this.sortImportance(a, b)).reverse()
    }
    
    private getEntityReferenceLocalizationKey(key: EntityReferencesLocalizationKeys): EntityReferencesLocalizationKeys {
        return key
    }

    public getLanguageEntities(): LanguageEntity[] {
        const entities: LanguageEntity[] = [
            {
                nameKey: this.getEntityLanguageLocalizationKey("danishLanguage"),
                level: LanguageLevel.NATIVE_SPEAKER,
                importance: 20
            },
            {
                nameKey: this.getEntityLanguageLocalizationKey("englishLanguage"),
                level: LanguageLevel.HIGHLY_PROFICIENT,
                importance: 16
            },
            {
                nameKey: this.getEntityLanguageLocalizationKey("germanLanguage"),
                level: LanguageLevel.WORKING_KNOWLEDGE,
                importance: 4
            }
        ]
        
        return entities.sort((a, b) => this.sortLanguage(a, b)).reverse()
    }

    private getEntityLanguageLocalizationKey(key: EntityLanguageLocalizationKeys): EntityLanguageLocalizationKeys {
        return key
    }

    private sortLanguage(a: LanguageEntity, b: LanguageEntity): number {
        if (a.level > b.level) {
            return 1
        } else if (a.level < b.level) {
            return -1
        }

        return this.sortImportance(a, b)
    }

    public getEducationEntities(): EducationEntity[] {
        const entities: EducationEntity[] = [
            {
                city: 'Odense',
                schoolName: 'University College Lillebælt',
                descriptionKey: this.getEntityEducationLocalizationKey("descriptionBachelor"),
                gradeKey: this.getEntityEducationLocalizationKey("gradeBachelor"),
                startDate: new Date(2019, 1, 1),
                endDate: new Date(2020, 5, 19)
            },
            {
                city: 'Odense',
                schoolName: 'University College Lillebælt',
                descriptionKey: this.getEntityEducationLocalizationKey("descriptionSoftware"),
                gradeKey: this.getEntityEducationLocalizationKey("gradeSoftware"),
                startDate: new Date(2016, 8, 1),
                endDate: new Date(2019, 0, 31)
            },
            {
                city: 'Svendborg',
                schoolName: 'Svendborg Erhversskole',
                descriptionKey: this.getEntityEducationLocalizationKey("descriptionHtx"),
                gradeKey: this.getEntityEducationLocalizationKey("gradeHtx"),
                startDate: new Date(2013, 8, 1),
                endDate: new Date(2016, 5, 17)
            }                        
        ]
        return entities.sort((a, b) => this.sortPeriode(a, b)).reverse()
    }

    private getEntityEducationLocalizationKey(key: EntityEducationLocalizationKeys): EntityEducationLocalizationKeys {
        return key
    }
}