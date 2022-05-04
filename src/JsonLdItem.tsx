import { Component } from 'react';

class JsonLdItem extends Component<JsonLdItemProps> {
  getJSON(): object {
    const { jsonKey, jsonValue } = this.props;
    return { [jsonKey]: jsonValue };
  }

  render(): null {
    return null;
  }
}

type JsonLdItemProps = {
  jsonKey: string | number;
  jsonValue: string | number;
}

export default JsonLdItem;