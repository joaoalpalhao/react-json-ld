import React, { Component } from 'react';
import { isAllowedChildren, isEmptyChildren, getChildJSON } from './utils';
import invariant from 'tiny-warning';

class JsonLdArray extends Component<JsonLdArrayProps> {
  constructor(props: JsonLdArrayProps) {
    super(props);
    const allowedChildren: string[] = ['JsonLdItem', 'JsonLdElement', 'JsonLdCollection', 'JsonLdArray', 'JsonLdObject'];
    invariant(isAllowedChildren(props.children, allowedChildren), `Invalid children. Only allowed ${JSON.stringify(allowedChildren)}.`);
  }

  getJSON(): object[] {
    const { children } = this.props;
    if (isEmptyChildren(children)) return [];
    return React.Children.map(children, (child: JSX.Element) => getChildJSON(child));
  }

  render(): null {
    return null;
  }
}

type JsonLdArrayProps = {
  children: JSX.Element | JSX.Element[];
}

export default JsonLdArray;