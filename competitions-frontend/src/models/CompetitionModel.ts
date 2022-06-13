export default class CompetitionModel {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _id: number = -1;
  private _name: string;
  private _countFiftyThree: number = 0;
  private _countFiftyEight: number = 0;
  private _countSixtyFour: number = 0;
  private _countSeventyOne: number = 0;
  private _countSeventyNine: number = 0;
  private _countEightyEight: number = 0;
  private _countNinetyEight: number = 0;
  private _countNinetyEightPlus: number = 0;
  private _countHundred: number = 0;
  private _countHundredAndOne: number = 0;
  private _countHundredAndTwo: number = 0;
  private _countHundredAndThree: number = 0;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get countFiftyThree(): number {
    return this._countFiftyThree;
  }

  set countFiftyThree(value: number) {
    this._countFiftyThree = value;
  }

  get countFiftyEight(): number {
    return this._countFiftyEight;
  }

  set countFiftyEight(value: number) {
    this._countFiftyEight = value;
  }

  get countSixtyFour(): number {
    return this._countSixtyFour;
  }

  set countSixtyFour(value: number) {
    this._countSixtyFour = value;
  }

  get countSeventyOne(): number {
    return this._countSeventyOne;
  }

  set countSeventyOne(value: number) {
    this._countSeventyOne = value;
  }

  get countSeventyNine(): number {
    return this._countSeventyNine;
  }

  set countSeventyNine(value: number) {
    this._countSeventyNine = value;
  }

  get countEightyEight(): number {
    return this._countEightyEight;
  }

  set countEightyEight(value: number) {
    this._countEightyEight = value;
  }

  get countNinetyEight(): number {
    return this._countNinetyEight;
  }

  set countNinetyEight(value: number) {
    this._countNinetyEight = value;
  }

  get countNinetyEightPlus(): number {
    return this._countNinetyEightPlus;
  }

  set countNinetyEightPlus(value: number) {
    this._countNinetyEightPlus = value;
  }

  get countHundred(): number {
    return this._countHundred;
  }

  set countHundred(value: number) {
    this._countHundred = value;
  }

  get countHundredAndOne(): number {
    return this._countHundredAndOne;
  }

  set countHundredAndOne(value: number) {
    this._countHundredAndOne = value;
  }

  get countHundredAndTwo(): number {
    return this._countHundredAndTwo;
  }

  set countHundredAndTwo(value: number) {
    this._countHundredAndTwo = value;
  }

  get countHundredAndThree(): number {
    return this._countHundredAndThree;
  }

  set countHundredAndThree(value: number) {
    this._countHundredAndThree = value;
  }
}
