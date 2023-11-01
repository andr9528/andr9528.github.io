import { Dispatch, SetStateAction } from "react"
import { BaseService } from "./base-service"

export enum PageType {
    ABOUT = 'ABOUT',
    CV = 'CV',
}

export class NavigationService extends BaseService<PageType> {
    public static instance: NavigationService = new NavigationService()
    private currentPage: PageType

    private constructor() {
        super()
        this.currentPage = PageType.CV
    }

    public setupStateUpdater(stateUpdater: Dispatch<SetStateAction<PageType>>): void {
        this.stateUpdater = stateUpdater
        console.info(`Finished setup of ${NavigationService.name}.`)
    }

    public getCurrentPage(): PageType {
        return this.currentPage
    }

    public setCurrentPage(page: PageType): void {
        this.assertStateUpdaterNotUndefined(this.setCurrentPage.name)        
        this.currentPage = page
        this.stateUpdater!(page)
    }
}