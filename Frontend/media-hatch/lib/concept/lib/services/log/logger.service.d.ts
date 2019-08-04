export declare const enum LogLevel {
    Trace = "Trace",
    Debug = "Debug",
    Info = "Info",
    Warning = "Warning",
    Error = "Error",
    Fatal = "Fatal"
}
export declare abstract class LoggerService {
    abstract trace(message: string): void;
    abstract debug(message: string): void;
    abstract info(message: string): void;
    abstract warning(message: string): void;
    abstract error(message: string): void;
    abstract fatal(message: string): void;
    abstract log(level: LogLevel, message: string): void;
}
