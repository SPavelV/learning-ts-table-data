import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData): string;
}

export interface OutTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutTarget) {}
}
