import React, { Component } from 'react';
import { isAllowedChildren, isEmptyChildren, getChildJSON } from './utils';
import invariant from 'tiny-warning';

class JsonLdCollection extends Component<JsonLdCollectionProps> {
  constructor(props: JsonLdCollectionProps) {
    super(props);
    const allowedChildren: string[] = ['JsonLdArray', 'JsonLdObject'];
    invariant(
      isAllowedChildren(props.children, allowedChildren),
      `Invalid children. Only allowed ${JSON.stringify(allowedChildren)}.`
    );
  }

  getJSON(): object {
    const { children, jsonKey } = this.props;
    if (children === null || isEmptyChildren(children)) return {};
    return { [jsonKey]: getChildJSON(React.Children.only(children)) };
  }

  render(): null {
    return null;
  }
}

type JsonLdCollectionProps = {
  jsonKey: string | number;
  children: JSX.Element | null;
};

export default JsonLdCollection;
