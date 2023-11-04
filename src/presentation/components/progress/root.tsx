import { cloneElementWithProps } from "@presentation/utils/clone-element";
import { IChildProps, IProgressRoot } from "./types";
import { Container } from "./styles";

export const ProgressRoot = ({
  children,
  objective,
  progress,
}: IProgressRoot): ReturnType<React.FC<IProgressRoot>> => {
  const childrenWithProps = cloneElementWithProps<IChildProps>({
    children,
    props: {
      objective,
      progress,
    },
  });

  return <Container>{childrenWithProps}</Container>;
};
