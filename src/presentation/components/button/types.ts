export type TButtonVariant = "primary" | "secondary" | "tertiary";

export interface IRoot {
  variant?: TButtonVariant;
}

export interface IRootStyle {
  variant: TButtonVariant;
}
