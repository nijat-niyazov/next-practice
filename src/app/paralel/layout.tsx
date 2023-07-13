import { ReactNode } from 'react';

const ParalelLayout = (props: {
  leftRoute: ReactNode;
  rightRoute: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="flex gap-2">
      {props.leftRoute}
      {/* // ? They must be same with folder name  */}
      {props.children}
      {/* // ? Children all nested pages  */}
      {props.rightRoute}
      {/* // ? They must be same with folder name  */}
    </div>
  );
};

export default ParalelLayout;
