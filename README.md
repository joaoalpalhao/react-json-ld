# react-json-ld

Build your JSON-LD in a markup style.

## Installation

To get started, install `react-json-ld` using the commands bellow:

```bash
npm i react-json-ld # or yarn add react-json-ld
```

## Usage

The **demo** bellow shows how to use all the components.

```jsx
import JsonLd, {
  JsonLdItem,
  JsonLdCollection,
  JsonLdObject,
  JsonLdArray,
  JsonLdElement
} from "react-json-ld";

export function GraceHopper() {
  return (
    <JsonLd context="https://schema.org/" indentation={2}>
      <JsonLdItem jsonKey="@type" jsonValue="Person" />
      <JsonLdItem jsonKey="name" jsonValue="Grace Hopper" />
      <JsonLdItem jsonKey="alternateName" jsonValue="Grace Brewster Murray Hopper" />
      <JsonLdCollection jsonKey="alumniOf">
        <JsonLdObject>
          <JsonLdItem jsonKey="@type" jsonValue="CollegeOrUniversity" />
          <JsonLdCollection jsonKey="name">
            <JsonLdArray>
              <JsonLdElement jsonValue="Yale University" />
              <JsonLdElement jsonValue="Vassar College" />
            </JsonLdArray>
          </JsonLdCollection>
        </JsonLdObject>
      </JsonLdCollection>
      <JsonLdCollection jsonKey="knowsAbout">
        <JsonLdArray>
          <JsonLdElement jsonValue="Compilers" />
          <JsonLdElement jsonValue="Computer Science" />
        </JsonLdArray>
      </JsonLdCollection>
    </JsonLd>
  );
}
```

This will **output**:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Grace Hopper",
    "alternateName": "Grace Brewster Murray Hopper",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": [
        "Yale University",
        "Vassar College"
      ]
    },
    "knowsAbout": [
      "Compilers",
      "Computer Science"
    ]
  }
</script>
```

You can use map functions to create more complex schemas and update them as you need.

Made with ❤️ by [@joao_alpalhao](https://twitter.com/joao_alpalhao)