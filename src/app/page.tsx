"use client"
import { Language, LocalizationService } from "@/shared/services/localization-service"
import { Header } from "./header/header"
import { useEffect, useState } from "react"
import { CenteredBox } from "@/shared/components/centered-box"
import { NavigationService, PageType } from "@/shared/services/navigation-service"
import { About } from "./about/about"
import { CV } from "./cv/cv"
import { Stack } from "@mui/material"
import { usePDF } from "react-to-pdf"
import { PrintingService } from "@/shared/services/printing-service"

export default function Page(): JSX.Element {
  const [language, setLanguage] = useState(Language.ENGLISH)
  const [currentPage, setCurrentPage] = useState(PageType.CV)
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  useEffect(() => {
    LocalizationService.instance.setupStateUpdater(setLanguage)
    NavigationService.instance.setupStateUpdater(setCurrentPage)
    PrintingService.instance.setupPrintingService(toPDF)
  }, [toPDF])
  
  return (
    <Stack height={'100%'} overflow={"hidden"} margin={0}>
      <Header/>
      <div ref={targetRef}>
        {getCurrentPageComponent()}        
      </div>
    </Stack>
  )

  function getCurrentPageComponent(): JSX.Element {
    switch (currentPage) {
      case PageType.ABOUT: return (<About/>)
      case PageType.CV: return (<CV />)
    }
  }
}
