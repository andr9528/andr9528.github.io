export enum ExceptionType {
    UNEXPECTED_UNDEFINED = 'Unexpected Undefined'
}

export abstract class Exception extends Error {
    private readonly type: ExceptionType
    constructor(type: ExceptionType, message: string) {
        super(message);
        this.type = type
    }

    public getType(): ExceptionType {
        return this.type
    }
}