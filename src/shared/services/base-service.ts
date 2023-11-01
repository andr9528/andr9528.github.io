import { Dispatch, SetStateAction } from "react"
import { UnexpectedUndefinedException } from "../exceptions/unexpected-undefined-exception"

export abstract class BaseService<T> {
    protected stateUpdater?: Dispatch<SetStateAction<T>>     

    protected assertStateUpdaterNotUndefined(caller: string): void {
        if (!this.stateUpdater) {
            throw new UnexpectedUndefinedException(`Expected 'stateUpdater' to be set durring ${caller}.`)
        }
    }

    public abstract setupStateUpdater(stateUpdater: Dispatch<SetStateAction<T>>): void
}