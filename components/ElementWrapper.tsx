'use client';
import { FC, ReactNode } from "react";

interface ElementWrapperProps {
  elementType: 'div' | 'span' | 'h1' | 'button';
  children: ReactNode;
  className?: string;
  onclick?: () => void;
}

const ElementWrapper: FC<ElementWrapperProps> = ({ elementType, children, className, onclick }) => {
  const Element = elementType as keyof JSX.IntrinsicElements;
  return <Element className={className} onClick={e => onclick!()}>
    {children}
  </Element>
}

export default ElementWrapper