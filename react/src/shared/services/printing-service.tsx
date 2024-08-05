import { ReactNode } from "react";
import { UnexpectedUndefinedException } from "../exceptions/unexpected-undefined-exception";
import { IndexProps } from "../props/index-props";
import { ApplicationLanguage, LocalizationService } from "./localization-service";
import { PageBreak } from '@/shared/components/page-break';

export class PrintingService {
    public static instance: PrintingService = new PrintingService()
    private localizationService: LocalizationService
    private printPdfFunction?: () => void

    /**
     *
     */
    constructor() {
        this.localizationService = LocalizationService.instance
    }

    public PrintPdf(): void {
        console.info('Attempting to print PDF...')
        this.assertPrintPdfFunctionNotUndefined(this.PrintPdf.name)
        this.printPdfFunction!()
    }

    private assertPrintPdfFunctionNotUndefined(caller: string): void {
        if (!this.printPdfFunction) {
            throw new UnexpectedUndefinedException(`Expected 'printPdfFunction' to be set before calling ${caller}.`)
        } else {
            console.debug('Print function is set')
        }        
    }

    public setupPrintingService(printPdf: () => void) {
        this.printPdfFunction = printPdf
    }

    public insertNewPageInPrintByProps(props: IndexProps, index: number, language: ApplicationLanguage): ReactNode {
        if (props.index === index && this.localizationService.getCurrentLanguage() === language) {
            return (<PageBreak/>)
        }  

        return (<></>)        
    }

    public insertNewPageInPrintByLanguage(language: ApplicationLanguage): ReactNode {
        if (this.localizationService.getCurrentLanguage() === language) {
            return (<PageBreak/>)
        }  

        return (<></>)
    }
}