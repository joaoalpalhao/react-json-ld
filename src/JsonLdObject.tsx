import { Component } from 'react';
import { isAllowedChildren, getChildrenJSON } from './utils';
import invariant from 'tiny-warning';

class JsonLdObject extends Component<JsonLdObjectProps> {
  constructor(props: JsonLdObjectProps) {
    super(props);
    const allowedChildren: string[] = ['JsonLdItem', 'JsonLdCollection', 'JsonLdArray', 'JsonLdObject'];
    invariant(isAllowedChildren(props.children, allowedChildren), `Invalid children. Only allowed ${JSON.stringify(allowedChildren)}.`);
  }

  getJSON(): object {
    const { children } = this.props;
    return getChildrenJSON(children);
  }

  render(): null {
    return null;
  }
}

type JsonLdObjectProps = {
  children: JSX.Element | JSX.Element[] | null;
}

export default JsonLdObject;