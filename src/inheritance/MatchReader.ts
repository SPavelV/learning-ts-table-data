import { ScvFileReader } from './ScvFileReader';
import { dateStringDate } from './util';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends ScvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // 'H', 'A', 'D'
      row[6],
    ];
  }
}
