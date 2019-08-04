export declare abstract class ConceptError implements Error {
    name: string;
    message: string;
    stack?: string;
    /**
     *  ctor for a concept error
     */
    constructor(message?: string);
}
