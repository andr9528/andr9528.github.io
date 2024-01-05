import { Language, LocalizationService } from "@/shared/services/localization-service"
import { useEffect, useRef, useState } from "react"
import { Box, Stack } from "@mui/material"
import { Header } from "@/header/header"
import { Router } from "./router"
import { Providers } from "./providers"
import { DocumentRef, PortalDocument, PrinterProvider } from "react-pdf-printer"

export default function App(): JSX.Element {
  const [language, setLanguage] = useState(Language.DANISH) // Initial value doesn't matter, as the language specified in 'LocalizationService' is the one used.

  useEffect(() => {
    LocalizationService.instance.setupStateUpdater(setLanguage)
  }, [])

  return (
    <Providers>
      <Stack height={'100%'} overflow={"hidden"} margin={0}>
        <Header/>        
        <Box paddingX={'10%'} maxWidth={'100%'}>
          <Router/>     
        </Box>
      </Stack>
    </Providers>
  )

  
}
