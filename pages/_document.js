import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import color from "css-color-function";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>
            {`
           :root {
            --a: #35ce93;
            --b: ${color.convert("color(#35ce93 hue(226))")};
            --c: ${color.convert("color(#35ce93 hue(263))")};
            --gray-muted: #D5D8DC;
            --white: #FEFEFE;
            --black: #0f0f0f;
            --fonts: -apple-system,
                      BlinkMacSystemFont,
                      Roboto,
                      Oxygen-Sans,
                      Ubuntu,
                      Cantarell,
                      sans-serif;
            --font-size: 18px;
            --width: 45rem;
            --width-s: 30rem;
          }
          *, *::after, *::before {
            box-sizing: inherit;
            margin: 0;
            padding: 0;
          }
          html {
            box-sizing: border-box;
            font-family: var(--fonts);
            font-size: var(--font-size);
            transition: background-color 1s, color 1s;
            background-color: var(--white);
            color: var(--black);
          }
          .Grid {
            font-size: 0;
            padding: 0;
            margin: 0;
          }
          .Grid--withGutter {
            padding: 10px;
          }
          .Grid-item {
            font-size: 1rem;
            display: inline-block;
          }
          .Grid--withGutter>.Grid-item {
            padding: 10px;
          }
          @supports (display: flex) {
            .Grid {
              font-size: 1rem;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
            }
            .Grid-item {
              min-height: 100%;
              display: flex;
              flex-direction: column;
            }
          }
          @supports (display: grid) {
            .Grid {
              font-size: 1rem;
              display: grid;
              grid-template-columns: repeat(12, 1fr);
            }
            .Grid--withGutter {
              grid-column-gap: 20px;
              grid-row-gap: 20px;
            }
            .Grid--withGutter>.Grid-item {
              padding: 0;
            }
            .Grid-item {
              display: flex;
              flex-direction: column;
            }
          }
          .u-size1of12 {
            width: 8.33333%;
          }
          .u-size2of12 {
            width: 16.66667%;
          }
          .u-size3of12 {
            width: 25%;
          }
          .u-size4of12 {
            width: 33.33333%;
          }
          .u-size5of12 {
            width: 41.66667%;
          }
          .u-size6of12 {
            width: 50%;
          }
          .u-size7of12 {
            width: 58.33333%;
          }
          .u-size8of12 {
            width: 66.66667%;
          }
          .u-size9of12 {
            width: 75%;
          }
          .u-size10of12 {
            width: 83.33333%;
          }
          .u-size11of12 {
            width: 91.66667%;
          }
          .u-size12of12 {
            width: 100%;
          }
          @media screen and (min-width: 640px) {
            .u-sm-size1of12 {
              width: 8.33333%;
            }
            .u-sm-size2of12 {
              width: 16.66667%;
            }
            .u-sm-size3of12 {
              width: 25%;
            }
            .u-sm-size4of12 {
              width: 33.33333%;
            }
            .u-sm-size5of12 {
              width: 41.66667%;
            }
            .u-sm-size6of12 {
              width: 50%;
            }
            .u-sm-size7of12 {
              width: 58.33333%;
            }
            .u-sm-size8of12 {
              width: 66.66667%;
            }
            .u-sm-size9of12 {
              width: 75%;
            }
            .u-sm-size10of12 {
              width: 83.33333%;
            }
            .u-sm-size11of12 {
              width: 91.66667%;
            }
            .u-sm-size12of12 {
              width: 100%;
            }
          }
          @media screen and (min-width: 960px) {
            .u-md-size1of12 {
              width: 8.33333%;
            }
            .u-md-size2of12 {
              width: 16.66667%;
            }
            .u-md-size3of12 {
              width: 25%;
            }
            .u-md-size4of12 {
              width: 33.33333%;
            }
            .u-md-size5of12 {
              width: 41.66667%;
            }
            .u-md-size6of12 {
              width: 50%;
            }
            .u-md-size7of12 {
              width: 58.33333%;
            }
            .u-md-size8of12 {
              width: 66.66667%;
            }
            .u-md-size9of12 {
              width: 75%;
            }
            .u-md-size10of12 {
              width: 83.33333%;
            }
            .u-md-size11of12 {
              width: 91.66667%;
            }
            .u-md-size12of12 {
              width: 100%;
            }
          }
          @media screen and (min-width: 1280px) {
            .u-lg-size1of12 {
              width: 8.33333%;
            }
            .u-lg-size2of12 {
              width: 16.66667%;
            }
            .u-lg-size3of12 {
              width: 25%;
            }
            .u-lg-size4of12 {
              width: 33.33333%;
            }
            .u-lg-size5of12 {
              width: 41.66667%;
            }
            .u-lg-size6of12 {
              width: 50%;
            }
            .u-lg-size7of12 {
              width: 58.33333%;
            }
            .u-lg-size8of12 {
              width: 66.66667%;
            }
            .u-lg-size9of12 {
              width: 75%;
            }
            .u-lg-size10of12 {
              width: 83.33333%;
            }
            .u-lg-size11of12 {
              width: 91.66667%;
            }
            .u-lg-size12of12 {
              width: 100%;
            }
          }
          @media screen and (min-width: 1440px) {
            .u-xl-size1of12 {
              width: 8.33333%;
            }
            .u-xl-size2of12 {
              width: 16.66667%;
            }
            .u-xl-size3of12 {
              width: 25%;
            }
            .u-xl-size4of12 {
              width: 33.33333%;
            }
            .u-xl-size5of12 {
              width: 41.66667%;
            }
            .u-xl-size6of12 {
              width: 50%;
            }
            .u-xl-size7of12 {
              width: 58.33333%;
            }
            .u-xl-size8of12 {
              width: 66.66667%;
            }
            .u-xl-size9of12 {
              width: 75%;
            }
            .u-xl-size10of12 {
              width: 83.33333%;
            }
            .u-xl-size11of12 {
              width: 91.66667%;
            }
            .u-xl-size12of12 {
              width: 100%;
            }
          }
          @supports (display: grid) {
            .u-size1of12 {
              width: auto;
              grid-column: span 1;
            }
            .u-size2of12 {
              width: auto;
              grid-column: span 2;
            }
            .u-size3of12 {
              width: auto;
              grid-column: span 3;
            }
            .u-size4of12 {
              width: auto;
              grid-column: span 4;
            }
            .u-size5of12 {
              width: auto;
              grid-column: span 5;
            }
            .u-size6of12 {
              width: auto;
              grid-column: span 6;
            }
            .u-size7of12 {
              width: auto;
              grid-column: span 7;
            }
            .u-size8of12 {
              width: auto;
              grid-column: span 8;
            }
            .u-size9of12 {
              width: auto;
              grid-column: span 9;
            }
            .u-size10of12 {
              width: auto;
              grid-column: span 10;
            }
            .u-size11of12 {
              width: auto;
              grid-column: span 11;
            }
            .u-size12of12 {
              width: auto;
              grid-column: span 12;
            }
            @media screen and (min-width: 640px) {
              .u-sm-size1of12 {
                width: auto;
                grid-column: span 1;
              }
              .u-sm-size2of12 {
                width: auto;
                grid-column: span 2;
              }
              .u-sm-size3of12 {
                width: auto;
                grid-column: span 3;
              }
              .u-sm-size4of12 {
                width: auto;
                grid-column: span 4;
              }
              .u-sm-size5of12 {
                width: auto;
                grid-column: span 5;
              }
              .u-sm-size6of12 {
                width: auto;
                grid-column: span 6;
              }
              .u-sm-size7of12 {
                width: auto;
                grid-column: span 7;
              }
              .u-sm-size8of12 {
                width: auto;
                grid-column: span 8;
              }
              .u-sm-size9of12 {
                width: auto;
                grid-column: span 9;
              }
              .u-sm-size10of12 {
                width: auto;
                grid-column: span 10;
              }
              .u-sm-size11of12 {
                width: auto;
                grid-column: span 11;
              }
              .u-sm-size12of12 {
                width: auto;
                grid-column: span 12;
              }
            }
            @media screen and (min-width: 960px) {
              .u-md-size1of12 {
                width: auto;
                grid-column: span 1;
              }
              .u-md-size2of12 {
                width: auto;
                grid-column: span 2;
              }
              .u-md-size3of12 {
                width: auto;
                grid-column: span 3;
              }
              .u-md-size4of12 {
                width: auto;
                grid-column: span 4;
              }
              .u-md-size5of12 {
                width: auto;
                grid-column: span 5;
              }
              .u-md-size6of12 {
                width: auto;
                grid-column: span 6;
              }
              .u-md-size7of12 {
                width: auto;
                grid-column: span 7;
              }
              .u-md-size8of12 {
                width: auto;
                grid-column: span 8;
              }
              .u-md-size9of12 {
                width: auto;
                grid-column: span 9;
              }
              .u-md-size10of12 {
                width: auto;
                grid-column: span 10;
              }
              .u-md-size11of12 {
                width: auto;
                grid-column: span 11;
              }
              .u-md-size12of12 {
                width: auto;
                grid-column: span 12;
              }
            }
            @media screen and (min-width: 1280px) {
              .u-lg-size1of12 {
                width: auto;
                grid-column: span 1;
              }
              .u-lg-size2of12 {
                width: auto;
                grid-column: span 2;
              }
              .u-lg-size3of12 {
                width: auto;
                grid-column: span 3;
              }
              .u-lg-size4of12 {
                width: auto;
                grid-column: span 4;
              }
              .u-lg-size5of12 {
                width: auto;
                grid-column: span 5;
              }
              .u-lg-size6of12 {
                width: auto;
                grid-column: span 6;
              }
              .u-lg-size7of12 {
                width: auto;
                grid-column: span 7;
              }
              .u-lg-size8of12 {
                width: auto;
                grid-column: span 8;
              }
              .u-lg-size9of12 {
                width: auto;
                grid-column: span 9;
              }
              .u-lg-size10of12 {
                width: auto;
                grid-column: span 10;
              }
              .u-lg-size11of12 {
                width: auto;
                grid-column: span 11;
              }
              .u-lg-size12of12 {
                width: auto;
                grid-column: span 12;
              }
            }
            @media screen and (min-width: 1440px) {
              .u-xl-size1of12 {
                width: auto;
                grid-column: span 1;
              }
              .u-xl-size2of12 {
                width: auto;
                grid-column: span 2;
              }
              .u-xl-size3of12 {
                width: auto;
                grid-column: span 3;
              }
              .u-xl-size4of12 {
                width: auto;
                grid-column: span 4;
              }
              .u-xl-size5of12 {
                width: auto;
                grid-column: span 5;
              }
              .u-xl-size6of12 {
                width: auto;
                grid-column: span 6;
              }
              .u-xl-size7of12 {
                width: auto;
                grid-column: span 7;
              }
              .u-xl-size8of12 {
                width: auto;
                grid-column: span 8;
              }
              .u-xl-size9of12 {
                width: auto;
                grid-column: span 9;
              }
              .u-xl-size10of12 {
                width: auto;
                grid-column: span 10;
              }
              .u-xl-size11of12 {
                width: auto;
                grid-column: span 11;
              }
              .u-xl-size12of12 {
                width: auto;
                grid-column: span 12;
              }
            }
          }
          
          `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
