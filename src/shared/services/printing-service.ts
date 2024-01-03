import { UnexpectedUndefinedException } from "../exceptions/unexpected-undefined-exception";

export class PrintingService {
    public static instance: PrintingService = new PrintingService()
    private printPdfFunction?: () => void

    public PrintPdf(): void {
        this.assertPrintPdfFunctionNotUndefined(this.PrintPdf.name)
        this.printPdfFunction!()
    }

    private assertPrintPdfFunctionNotUndefined(caller: string): void {
        if (!this.printPdfFunction) {
            throw new UnexpectedUndefinedException(`Expected 'printPdfFunction' to be set durring ${caller}.`)
        }
    }

    public setupPrintingService(printPdf: () => void) {
        this.printPdfFunction = printPdf
    }
}