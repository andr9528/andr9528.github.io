import { About } from "@/about/about";
import { CV } from "@/cv/cv";
import { NavigationService, PageType } from "@/shared/services/navigation-service";
import { useEffect, useState } from "react";

export function Router(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(PageType.CV)

  useEffect(() => {
    NavigationService.instance.setupStateUpdater(setCurrentPage)
  }, [])

  return getCurrentPageComponent()

  function getCurrentPageComponent(): JSX.Element {
    switch (currentPage) {
      case PageType.ABOUT: return (<About/>)
      case PageType.CV: return (<CV />)
    }
  }
}

