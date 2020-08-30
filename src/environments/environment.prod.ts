import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  backendUrl: 'http://localhost:8080',
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR
};
