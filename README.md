# dson-loader

a webpack loader to load JSON with JavaScript comments.

## install

install from github

## how to use

```js
{
  module: {
    rules: [
      {
        test: /\.dson$/,
        use: [
          {
            loader: "dson-loader",
            options: {
              comment: false,
            },
          },
        ],
      },
    ];
  }
}
```
