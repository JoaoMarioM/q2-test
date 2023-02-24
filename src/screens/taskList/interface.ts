export type TaskProps = {
  id: number;
  description: string;
  time: string;
  calendar: string;
  tag: number;
  isCheck: boolean;
  status: string;
};

export type ButtonCheckStyleProps = {
  isCheck: boolean;
} & TagColor;

export type TagColor = {
  colorTag?: string;
};

export type ButtonFilterProps = {
  selected: boolean;
}