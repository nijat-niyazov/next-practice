import { ReactNode } from 'react';

const ParalelLayout = (props: {
  leftRoute: ReactNode;
  rightRoute: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="flex gap-2">
      {props.leftRoute}
      {props.children}
      {props.rightRoute}
    </div>
  );
};

export default ParalelLayout;
