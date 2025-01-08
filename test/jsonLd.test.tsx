import React from 'react';
import { render } from '@testing-library/react';
import JsonLd, { JsonLdItem, JsonLdCollection, JsonLdArray, JsonLdElement, JsonLdObject } from '../src';

describe('it', () => {
  it('render json ld with one item', () => {
    const { container } = render(
      <JsonLd context="http://schema.org">
        <JsonLdItem jsonKey="@type" jsonValue="Person" />
      </JsonLd>
    );
    expect(
      container
    ).toMatchInlineSnapshot(`
      <div>
        <script
          type="application/ld+json"
        >
          {"@context":"http://schema.org","@type":"Person"}
        </script>
      </div>
    `);
  });

  it('render json ld with indentation', () => {
    const { container } = render(
      <JsonLd context="http://schema.org" indentation={2}>
        <JsonLdItem jsonKey="@type" jsonValue="Person" />
      </JsonLd>
    );
    expect(
      container
    ).toMatchInlineSnapshot(`
      <div>
        <script
          type="application/ld+json"
        >
          {
        "@context": "http://schema.org",
        "@type": "Person"
      }
        </script>
      </div>
    `);
  });

  it('render json ld with an array', () => {
    const { container } = render(
      <JsonLd context="http://schema.org">
        <JsonLdCollection jsonKey="itemListElement">
          <JsonLdArray>
            <JsonLdElement jsonValue="Test1" />
            <JsonLdElement jsonValue="Test2" />
            <JsonLdElement jsonValue="Test3" />
          </JsonLdArray>
        </JsonLdCollection>
      </JsonLd>
    );
    expect(
      container
    ).toMatchInlineSnapshot(`
      <div>
        <script
          type="application/ld+json"
        >
          {"@context":"http://schema.org","itemListElement":["Test1","Test2","Test3"]}
        </script>
      </div>
    `);
  });

  it('render json ld with an object', () => {
    const { container } = render(
      <JsonLd context="http://schema.org">
        <JsonLdCollection jsonKey="address">
          <JsonLdObject>
            <JsonLdItem jsonKey="@type" jsonValue="PostalAddress" />
            <JsonLdItem jsonKey="addressLocality" jsonValue="Seattle" />
            <JsonLdItem jsonKey="addressRegion" jsonValue="WA" />
            <JsonLdItem jsonKey="postalCode" jsonValue="98052" />
            <JsonLdItem jsonKey="streetAddress" jsonValue="20341 Whitworth Institute 405 N. Whitworth" />
          </JsonLdObject>
        </JsonLdCollection>
      </JsonLd>
    );
    expect(
      container
    ).toMatchInlineSnapshot(`
      <div>
        <script
          type="application/ld+json"
        >
          {"@context":"http://schema.org","address":{"@type":"PostalAddress","addressLocality":"Seattle","addressRegion":"WA","postalCode":"98052","streetAddress":"20341 Whitworth Institute 405 N. Whitworth"}}
        </script>
      </div>
    `);
  });

  it('render json ld with an null child', () => {
    const data = null;
    const { container } = render(
      <JsonLd context="http://schema.org">
        {data && (
          <JsonLdCollection jsonKey="address">
            <JsonLdObject>
              <JsonLdItem jsonKey="@type" jsonValue="PostalAddress" />
              <JsonLdItem jsonKey="addressLocality" jsonValue="Seattle" />
              <JsonLdItem jsonKey="addressRegion" jsonValue="WA" />
              <JsonLdItem jsonKey="postalCode" jsonValue="98052" />
              <JsonLdItem
                jsonKey="streetAddress"
                jsonValue="20341 Whitworth Institute 405 N. Whitworth"
              />
            </JsonLdObject>
          </JsonLdCollection>
        )}
      </JsonLd>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          type="application/ld+json"
        >
          {"@context":"http://schema.org"}
        </script>
      </div>
    `);
  });
});
