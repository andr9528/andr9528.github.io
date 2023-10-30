"use client"
import { Language, LocalizationService } from "@/shared/services/localization-service"
import { Header } from "./header/header"
import { useEffect, useState } from "react"
import { CenteredBox } from "@/shared/components/centered-box"

export default function Page(): JSX.Element {
  const [language, setLanguage] = useState(Language.ENGLISH)
  useEffect(() => {
    LocalizationService.instance.setupLocalizationService(setLanguage)
  }, [])
  
  return (
    <CenteredBox height={'100%'} overflow={"hidden"} margin={0}>
      <Header/>
    </CenteredBox>
  )
}
