import CompetitionModel from "./CompetitionModel";

export default class ParticipantModel {

  private _id: number = 0;
  private _fio: string = "";
  private _weight: number = 0;
  private _instituteCourseGroup: string = "";

  private _participation: CompetitionModel[] = [];

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get fio(): string {
    return this._fio;
  }

  set fio(value: string) {
    this._fio = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get instituteCourseGroup(): string {
    return this._instituteCourseGroup;
  }

  set instituteCourseGroup(value: string) {
    this._instituteCourseGroup = value;
  }

  get participation(): CompetitionModel[] {
    return this._participation;
  }

  set participation(value: CompetitionModel[]) {
    this._participation = value;
  }
}
