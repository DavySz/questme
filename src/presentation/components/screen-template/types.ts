export type TScreenTemplateVariant = "primary" | "secondary" | "tertiary";
export type TBubbleType = "fill" | "outline";

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
}

export interface IScreenTemplateBubble {
  size: number;
  type: TBubbleType;
}

export interface IScreenTemplateBubbleStyles extends IScreenTemplateBubble {}

export interface ScreenTemplateBubblesBackgroundStyles {
  top: number;
  left: number;
  right: number;
  bottom: number;
}
