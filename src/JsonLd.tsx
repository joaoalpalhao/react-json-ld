import React, { Component } from 'react';
import { isAllowedChildren, getChildrenJSON } from './utils';
import invariant from 'tiny-warning';

class JsonLd extends Component<JsonLdProps> {
  constructor(props: JsonLdProps) {
    super(props);
    const allowedChildren: string[] = ['JsonLdItem', 'JsonLdCollection', 'JsonLdArray', 'JsonLdObject'];
    invariant(isAllowedChildren(props.children, allowedChildren), `Invalid children. Only allowed ${JSON.stringify(allowedChildren)}.`);
  }

  render(): JSX.Element {
    const { context, indentation } = this.props;
    const jsonObj = Object.assign(
      { '@context': context },
      getChildrenJSON(this.props.children)
    );
    const json = JSON.stringify(jsonObj, null, indentation ?? undefined);
    return <script type="application/ld+json">{json}</script>;
  }
}

type JsonLdProps = {
  indentation?: number;
  context: string | number;
  children: JSX.Element | JSX.Element[] | null;
};

export default JsonLd;