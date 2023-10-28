"use client"
import { Language, LocalizationService } from "@/shared/services/localization-service"
import { Header } from "./header/header"
import { useEffect, useState } from "react"

export default function Page(): JSX.Element {
  const [language, setLanguage] = useState(Language.ENGLISH)
  useEffect(() => {
    LocalizationService.instance.setupLocalizationService(setLanguage)
  }, [])
  
  return (
    <>
      <Header/>
    </>
  )
}
