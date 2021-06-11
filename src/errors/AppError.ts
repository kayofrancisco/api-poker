export class AppError {
  public readonly messages: string[];
  public readonly codigoStatus: number;

  constructor(messages: string[], codigoStatus = 400) {
    this.messages = messages;
    this.codigoStatus = codigoStatus;
  }
}
