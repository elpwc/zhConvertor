/**
 * @author wniko
 */

import table1 from './data/table1';
import table2 from './data/table2';

export enum ConvertType {
  dont = 0,
  s2t = 1,
  t2s = 2,
}

export default class zhConvertor {
  /**
   * Convert SimpCh to TradCh
   * @param text
   * @return
   */
  public static s2t = (text: string): string => {
    let tmptext: string = text;
    const result: string[] = Array(text.length);

    table2.forEach((couple: [string, string]) => {
      for (let i = 0; i < tmptext.length - 1; i++) {
        if (tmptext.substring(i, i + 2) === couple[1] && !result?.[i]) {
          result[i] = couple[0].charAt(0);
          result[i + 1] = couple[0].charAt(1);
        }
      }
    });

    table1.forEach((couple: [string, string]) => {
      for (let i = 0; i < tmptext.length; i++) {
        if (tmptext.substring(i, i + 1) === couple[1] && !result?.[i]) {
          result[i] = couple[0].charAt(0);
        }
      }
    });

    for (let i = 0; i < result.length; i++) {
      if (!result[i]) {
        result[i] = tmptext.charAt(i);
      }
    }

    return result.join('');
  };

  /**
   * Convert TradCh to SimpCh
   * @param text
   * @returns
   */
  public static t2s = (text: string): string => {
    let resText = text;
    table1.forEach(charSet => {
      resText = resText.replace(new RegExp(charSet[0], 'g'), charSet[1]);
    });
    return resText;
  };

  /**
   * Convert TC to SC or SC to TC
   * @param text
   * @param convertType 0: don't convert, 1: C->T, 2: T->C
   * @returns
   */
  public static convert = (text: string, convertType: ConvertType): string => {
    switch (convertType) {
      case ConvertType.dont:
        return text;
      case ConvertType.s2t:
        return this.s2t(text);
      case ConvertType.t2s:
        return this.t2s(text);
      default:
        return text;
    }
  };
}
