/**
 * Created by zeilush on 6/24/17.
 */
export class Marker {
  private _lat = 0
  private _lng = 0
  private _label: string
  private _title: string

  constructor(lat: number, lng: number, label: string, title: string) {
    this._lat = lat;
    this._lng = lng;
    this._label = label;
    this._title = title;
  }

  get lat(): number {
    return this._lat;
  }

  set lat(value: number) {
    this._lat = value;
  }

  get lng(): number {
    return this._lng;
  }

  set lng(value: number) {
    this._lng = value;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
