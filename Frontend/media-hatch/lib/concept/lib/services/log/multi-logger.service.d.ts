import { InjectionToken } from '@angular/core';
import { LoggerService, LogLevel } from './logger.service';
export declare const MULTI_LOGGER_SERVICES: InjectionToken<LoggerService[]>;
/**
 * @requires MULTI_LOGGER_SERVICES
 */
export declare class MultiLoggerService extends LoggerService {
    private loggerServices;
    constructor(loggerServices: LoggerService[]);
    trace(message: string): void;
    debug(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
    fatal(message: string): void;
    log(level: LogLevel, message: string): void;
}
