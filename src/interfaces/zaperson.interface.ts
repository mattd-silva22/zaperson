import { TPhoneInfo } from "../types/phoneNumberInfo.type";

export interface IZaperson {
  parse(number: string | number): string;
  humanize(number: string | number): string;
  info(number: string | number): TPhoneInfo;
  validate(number: string | number): boolean;
}
