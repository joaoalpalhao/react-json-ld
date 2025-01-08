import { Component } from 'react';

class JsonLdElement extends Component<JsonLdElementProps> {
  getJSON(): string | number {
    const { jsonValue } = this.props;
    return jsonValue;
  }

  render(): null {
    return null;
  }
}

type JsonLdElementProps = {
  jsonValue: string | number;
};

export default JsonLdElement;
