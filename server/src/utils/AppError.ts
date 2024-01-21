export class AppError extends Error {
  errorCode: string | number;
  statusCode: number;
  constructor(errorCode: string, message: string, statusCode: number) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}
