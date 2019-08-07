import { LoggerService, LogLevel } from './logger.service';
export declare class ConsoleLoggerService extends LoggerService {
    trace(message: string): void;
    debug(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
    fatal(message: string): void;
    log(level: LogLevel, message: string): void;
}
