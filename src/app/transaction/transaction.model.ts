export class Transaction {
  public id: string;
  public value: number;
  public description: String;
  public date: Date;
  public tags: Array<String>;
  public accountId: number;
}
