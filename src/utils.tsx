import React from 'react';

/** @private Is a children allowed? */
export const isAllowedChildren = (children: any, allowed: string[]): boolean => {
  let isAllowed: boolean = true;
  React.Children.forEach(children, (child: JSX.Element) => {
    if (child !== null && !allowed.includes(child.type.name)) {
      isAllowed = false;
    }
  });
  return isAllowed;
}

/** @private Does a React component have exactly 0 children? */
export const isEmptyChildren = (children: any): boolean => {
  return React.Children.count(children) === 0;
}

/** @private Gets a children's JSON object */
export const getChildrenJSON = (children: JSX.Element | JSX.Element[] | null
): object => {
  if (children === null || isEmptyChildren(children)) return {};
  const obj = {};
  React.Children.forEach(children, (child: JSX.Element) => {
    Object.assign(obj, getChildJSON(child));
  });
  return obj;
}

/** @private Gets a child's JSON object */
export const getChildJSON = (child: JSX.Element): object => {
  if (child === null) return {};
  const ChildClass = child.type;
  return Object.assign(new ChildClass(child.props).getJSON());
}