export interface IRoute {
  name: string;
  component: () => React.ReactNode;
}
