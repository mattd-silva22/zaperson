import { EDDD } from "./ddd.enum";
import { TDDDInfo } from "./dddInfo.type";


export type TPhoneInfo = {
  number: string;
  formattedNumber: string;
  ddi: string;
  ddd: EDDD;
  location: TDDDInfo;
};
