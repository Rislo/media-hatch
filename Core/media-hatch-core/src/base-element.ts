import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject()
export abstract class BaseElement {
  constructor(type: string) {
    this.type = type;
  }

  @JsonProperty('type')
  public type: string = undefined;

  public get className(): string[] {
    let classNames = [];
    let obj = Object.getPrototypeOf(this);
    let className: string;

    while ((className = obj.constructor.name) !== 'Object') {
      classNames.push(className);
      obj = Object.getPrototypeOf(obj);
    }

    return classNames;
  }
}
