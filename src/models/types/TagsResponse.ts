interface IHighlightsTexts {
  value: string;
  type: 'hit' | 'text';
}
interface IHighlights {
  score: number;
  path: string;
  texts: IHighlightsTexts[];
}
interface ITagsByQueryResponse {
  tags: string[];
  highlights: IHighlights[];
}

export { ITagsByQueryResponse };
