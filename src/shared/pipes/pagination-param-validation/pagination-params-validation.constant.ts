export const TAKE_MAX_EXCEEDED: (maxNumber: number) => string
  = maxNumber => `Take parameter can't be more than ${maxNumber}`;
export const TAKE_LESS_THAN_ZERO: string
  = `Take parameter can't be less than zero`;

export const SKIP_LESS_THAN_ZERO: string
  = `Skip parameter can't be less than zero`;
