import { ConceptError } from './concept-error';
export declare class ModelError extends ConceptError {
    name: string;
    message: string;
    stack?: string;
    /**
     * ctor for a model error
     */
    constructor(message?: string);
}
