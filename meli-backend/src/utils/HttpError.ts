export class HttpError extends Error {
  status = 400;

  constructor(status: number, message: string) {
    super(message);

    this.status = status;

    Object.setPrototypeOf(this, HttpError.prototype);
  }

  getErrorMessage() {
    return 'Something went wrong: ' + this.message;
  }
}