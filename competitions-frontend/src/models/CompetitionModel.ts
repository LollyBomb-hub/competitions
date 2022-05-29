export default class CompetitionModel {

  private _name: string;
  private _f1: boolean;
  private _f2: boolean;

  constructor(name: string, f1: boolean, f2: boolean) {
    this._name = name;
    this._f1 = f1;
    this._f2 = f2;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get f1(): boolean {
    return this._f1;
  }

  set f1(value: boolean) {
    this._f1 = value;
  }

  get f2(): boolean {
    return this._f2;
  }

  set f2(value: boolean) {
    this._f2 = value;
  }
}
