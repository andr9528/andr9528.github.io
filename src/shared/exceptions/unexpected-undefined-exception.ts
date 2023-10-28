import { Exception, ExceptionType } from "./exception";

export class UnexpectedUndefinedException extends Exception {
    /**
     *
     */
    constructor(message: string) {
        super(ExceptionType.UNEXPECTED_UNDEFINED, message);
        
    }
}