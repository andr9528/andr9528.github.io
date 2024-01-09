import { UnexpectedUndefinedException } from "../exceptions/unexpected-undefined-exception";

export class PrintingService {
    public static instance: PrintingService = new PrintingService()
    private printPdfFunction?: () => void

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
}