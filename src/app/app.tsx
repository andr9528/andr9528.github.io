import { Language, LocalizationService } from "@/shared/services/localization-service"
import { useEffect, useState } from "react"
import { Stack } from "@mui/material"
import { Router } from "./router"
import { Providers } from "./providers"

export default function App(): JSX.Element {
  const [language, setLanguage] = useState(Language.DANISH) // Initial value doesn't matter, as the language specified in 'LocalizationService' is the one used.

  useEffect(() => {
    LocalizationService.instance.setupStateUpdater(setLanguage)
  }, [])

  return (
    <Providers>
      <Router/>     
    </Providers>
  )
}
