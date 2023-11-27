import React, { ReactNode, useMemo } from 'react';

type IProps = {
  children: ReactNode;
  vIf?: boolean;
  active?: number;
};
export default function Toggle(props: IProps) {
  const { children, active, vIf } = props;
  const element = useMemo(() => {
    let match = false;
    let elementDom = null;
    React.Children.forEach(children, (item: any, index) => {
      if (match) {
        return;
      }
      if (typeof active === 'number') {
        if (active === index) {
          match = true;
          elementDom = item;
        }
      } else if (vIf && index === 0) {
        match = true;
        elementDom = item;
      } else if (!vIf && index === 1) {
        match = true;
        elementDom = item;
      }
    });
    return elementDom;
  }, [vIf, children, active]);

  return <>{element ? React.cloneElement(element) : null}</>;
}
