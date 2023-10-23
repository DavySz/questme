export type TButtonVariant = "primary" | "secondary" | "tertiary";

export interface IButtonRoot {
  variant?: TButtonVariant;
  children: React.ReactNode;
  full?: boolean;
}

export interface IButtonText {
  variant?: TButtonVariant;
  children: React.ReactNode;
}

export interface IRootStyle {
  variant: TButtonVariant;
  full: boolean;
}

export interface IChildProps {
  variant: TButtonVariant;
}
