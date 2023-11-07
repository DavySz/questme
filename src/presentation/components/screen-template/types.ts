export type TScreenTemplateVariant = "primary" | "secondary" | "tertiary";

export interface IScreenTemplateHeader {
  variant?: TScreenTemplateVariant;
  children?: React.ReactNode;
  goBack?: () => void;
}

export interface IScreenTemplateRoot {
  variant?: TScreenTemplateVariant;
  children: React.ReactNode;
}

export interface IScreenTemplateRootStyles {
  variant?: TScreenTemplateVariant;
  children: React.ReactNode;
}

export interface IChildProps {
  variant: TScreenTemplateVariant;
}

export interface IScreenTemplateBubblesBackground {
  children: React.ReactNode;
  testID: string;
}
