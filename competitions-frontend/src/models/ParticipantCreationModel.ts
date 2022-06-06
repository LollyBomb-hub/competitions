export default class ParticipantCreationModel {

  private _name: string = "";
  private _surname: string = "";
  private _lastname: string = "";
  private _weight: number = 0;

  private _institute?: string = undefined;
  private _course?: number = undefined;
  private _group?: string = undefined;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get institute(): string | undefined {
    return this._institute;
  }

  set institute(value: string | undefined) {
    this._institute = value;
  }

  get course(): number | undefined {
    return this._course;
  }

  set course(value: number | undefined) {
    this._course = value;
  }

  get group(): string | undefined {
    return this._group;
  }

  set group(value: string | undefined) {
    this._group = value;
  }
}
