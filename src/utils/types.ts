// types.ts
export type PasswordOptions = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

export type StrengthResult = {
  strength: number;
  label: string;
  color: string;
};