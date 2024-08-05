import { EntityGeneralInformationLocalizationKeys } from "../localization/general-information-localization"

export interface GeneralInformationEntity {
    firstName: string
    middleName: string
    lastName: string
    phoneNumber: number
    email: string
    dateOfBirth: Date
    city: string
    countryKey: EntityGeneralInformationLocalizationKeys
    address: string
    postalNumber: number
}
