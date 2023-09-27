import { RouteComponentProps, RouteProps } from 'react-router-dom';

export interface DefaultLayoutComponentsInterface {
  content?: React.ElementType;
}

export interface DefaultLayoutInterface extends RouteProps {
  layoutComponents?: {
    content: (p: RouteComponentProps) => React.ReactElement;
  };
}
