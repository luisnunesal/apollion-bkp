import { RouteProps } from 'react-router-dom';

export interface SideBarLayoutComponentsInterface {
  sidebar?: React.ElementType;
  content?: React.ElementType;
}

export interface SideBarLayoutInterface extends RouteProps {
  layoutComponents: SideBarLayoutComponentsInterface;
}
