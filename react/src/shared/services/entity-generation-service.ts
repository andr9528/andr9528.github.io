import { EmploymentEntity } from "../entities/employment-entity"
import { GeneralInformationEntity } from "../entities/general-information-entity"
import { ComponentEmploymentLocalizationKeys, EntityEmploymentLocalizationKeys } from "../localization/employment-localization"
import { LocalizationService } from "./localization-service"
import { EntityGeneralInformationLocalizationKeys } from '../localization/general-information-localization';
import { SkillEntity, SkillLevel, SkillName } from "../entities/skill-entity";
import { LinkEntity } from "../entities/link-entity";
import { EntityLinksLocalizationKeys } from "../localization/links-localization";
import { ReferenceEntity } from "../entities/reference-entity";
import { EntityReferencesLocalizationKeys } from "../localization/references-localization";
import { LanguageEntity, LanguageLevel } from "../entities/language-entity";
import { EntityLanguageLocalizationKeys } from "../localization/language-localization";
import { Importance, Periode } from "../entities/common";
import { EducationEntity } from "../entities/education-entity";
import { EntityEducationLocalizationKeys } from "../localization/education-localization";
import { ProjectEntity } from '../entities/project-entity';
import { EntityProjectLocalizationKeys } from "../localization/project-localization";

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
                jobTitleKey: this.getEntityEmploymentLocalizationKey("jobTitleFashionheroInternship"),                 
                startDate: new Date(2024, 4, 6),
                endDate: new Date(2024, 4, 31),
                employerKey: this.getEntityEmploymentLocalizationKey("employerFashionheroInternship"),
                city: 'Odense',
                workDescriptionKey: this.getEntityEmploymentLocalizationKey("workDescriptionFashionheroInternship"),
                joiningWordKey: this.getComponentEmploymentLocalizationKey("joiningWord1")
            },
            {
                jobTitleKey: this.getEntityEmploymentLocalizationKey("jobTitleNoergaardMikkelsenInternship"),
                employerKey: this.getEntityEmploymentLocalizationKey("employerNoergaardMikkelsenInternship"),
                workDescriptionKey: this.getEntityEmploymentLocalizationKey("workDescriptionNoergaardMikkelsenInternship"),
                joiningWordKey: this.getComponentEmploymentLocalizationKey("joiningWord1"),
                startDate: new Date(2025, 2, 17),
                endDate: new Date(2025, 3, 11),
                city: 'Odense'
            },
            {
                jobTitleKey: this.getEntityEmploymentLocalizationKey("jobTitleFlowpointInternship"),
                employerKey: this.getEntityEmploymentLocalizationKey("employerFlowpointInternship"),
                workDescriptionKey: this.getEntityEmploymentLocalizationKey("workDescriptionFlowpointInternship"),
                joiningWordKey: this.getComponentEmploymentLocalizationKey("joiningWord1"),
                startDate: new Date(2025, 4, 26),
                endDate: new Date(2025, 5, 22),
                city: 'Odense'
            },
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
                name: SkillName.C_SHARP,
                level: SkillLevel.Experienced,
                importance: 100
            },
            {
                name: SkillName.TYPESCRIPT,
                level: SkillLevel.Skillful,
                importance: 90
            },
            {
                name: SkillName.SCRUM,
                level: SkillLevel.Skillful,
                importance: 80
            },
            {
                name: SkillName.GIT,
                level: SkillLevel.Skillful,
                importance: 85
            },
            {
                name: SkillName.ENTITY_FRAMEWORK_CORE,
                level: SkillLevel.Skillful,
                importance: 84
            },
            {
                name: SkillName.C_PLUS_PLUS,
                level: SkillLevel.Novice,
                importance: 25
            },
            {
                name: SkillName.JAVA,
                level: SkillLevel.Novice,
                importance: 20
            },
            {
                name: SkillName.PYTHON,
                level: SkillLevel.Novice,
                importance: 19
            },
            {
                name: SkillName.SQL,
                level: SkillLevel.Beginner,
                importance: 30
            },
            {
                name: SkillName.ANGULAR,
                level: SkillLevel.Novice,
                importance: 24
            },
            {
                name: SkillName.XAMARIN_FORMS,
                level: SkillLevel.Beginner,
                importance: 40
            },
            {
                name: SkillName.ELASTICSEARCH,
                level: SkillLevel.Novice,
                importance: 15
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

    public getProjectEntities(): ProjectEntity[] {
        const entities: ProjectEntity[] = [
            {
                titleKey: this.getEntityProjectLocationKey("trackerTitle"),
                descriptionKey: this.getEntityProjectLocationKey("trackerDescription"),
                importance: 100
            },
            {
                titleKey: this.getEntityProjectLocationKey("towerDefenceDevTitle"),
                descriptionKey: this.getEntityProjectLocationKey("towerDefenceDevDescription"),
                importance: 90
            },
            {
                titleKey: this.getEntityProjectLocationKey("oniModdingTitle"),
                descriptionKey: this.getEntityProjectLocationKey("oniModdingDescription"),
                importance: 80
            },
        ]

        return entities.sort((a, b) => this.sortImportance(a, b)).reverse()
    }

    private getEntityProjectLocationKey(key: EntityProjectLocalizationKeys): EntityProjectLocalizationKeys {
        return key
    }
}