export declare enum NotifyKind {
    Info = 0,
    Warning = 1,
    Error = 2,
    Success = 3
}
export declare abstract class NotifyService {
    /**
     * Notify a message for the specified type if the service is defined
     * @param notifyService service use for notification if defined
     * @param message message
     * @param kind kind of notification
     */
    static notify(notifyService: NotifyService | null | undefined, message: string, kind: NotifyKind): void;
    constructor();
    /**
     * Notify a message
     * @param message message to notiy
     * @param kind kind of notification
     */
    abstract notify(message: string, kind: NotifyKind): void;
}
