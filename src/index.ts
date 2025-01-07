import { TPhoneInfo } from "./types/phoneNumberInfo.type";
import { TConfig } from "./types/validatorRules.type";
import { TDDDInfo } from "./types/dddInfo.type";
import { dddInfo } from "./data/ddd";
import { IZaperson } from "./interfaces/zaperson.interface";

export default class Zaperson implements IZaperson {
  private config: TConfig | undefined;
  private dddDatabase: TDDDInfo[];
  constructor(config?: TConfig) {
    this.config = config;
    this.dddDatabase = dddInfo as TDDDInfo[];
  }

  public parse(number: string | number): string {
    const strigNumber = number.toString();
    let parsedNumber = strigNumber.replace(/\D/g, "");
    let hasDDI: boolean = false;
    const numberLen = parsedNumber.length;

    if (!numberLen) {
      throw new Error("Number string is empty");
    }

    if (numberLen < 10) {
      throw new Error(
        "Number string length is invalid. DDD may be not include"
      );
    }

    if (numberLen > 13) {
      throw new Error("Number string length is too long");
    }

    if (
      (numberLen === 12 || numberLen === 13) &&
      !parsedNumber.startsWith("55")
    ) {
      throw new Error("Number string is not a Brazilian number");
    }

    if (
      (numberLen === 12 || numberLen === 13) &&
      parsedNumber.startsWith("55")
    ) {
      hasDDI = true;
    }

    if (!hasDDI) {
      parsedNumber = `55${parsedNumber}`;
    }

    if (this.config?.validateDDD) {
      const ddd = this.getDDD(parsedNumber);
      if (!this.isValidDDD(ddd)) {
        throw new Error("Invalid DDD code");
      }
    }

    return parsedNumber;
  }

  public humanize(number: string | number): string {
    const parsedNumber = this.parse(number);

    const ddi = this.getDDI(parsedNumber);
    const ddd = this.getDDD(parsedNumber);
    const prefix = parsedNumber.slice(4, 9);
    const lineNumber = parsedNumber.slice(9);

    return `+${ddi} ${ddd} ${prefix}-${lineNumber}`;
  }

  public info(number: string | number): TPhoneInfo {
    const parsedNumber = this.parse(number);
    const ddd = this.getDDD(parsedNumber);

    const dddData = this.dddDatabase.find((dddInfo) => dddInfo.ddd === ddd);

    if (!dddData) {
      throw new Error("DDD not found in database");
    }

    return {
      number: parsedNumber,
      formattedNumber: this.humanize(parsedNumber),
      ddi: this.getDDI(parsedNumber),
      ddd: dddData.ddd,
      location: dddData as TDDDInfo,
    } as TPhoneInfo;
  }

  public validate(number: string | number): boolean {
    try {
      this.parse(number);
      return true;
    } catch (error) {
      return false;
    }
  }

  private isValidDDD(ddd: string): boolean {
    const dddData = this.dddDatabase.find((dddInfo) => dddInfo.ddd === ddd);
    return !!dddData;
  }

  private getDDD(number: string): string {
    return number.slice(2, 4);
  }

  private getDDI(number: string): string {
    return number.slice(0, 2);
  }
}
