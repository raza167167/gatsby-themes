import React from "react"
import { css, Global } from "@emotion/core"
import Helmet from "react-helmet"

const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <html lang="en" />
      <title>Specimens for Design Systems - @lekoarts/gatsby-theme-specimens</title>
      <meta
        name="description"
        content="Leverage the wide variety of powerful React components of '@lekoarts/gatsby-theme-specimens' to build your design system. Display your colors, typography or any other design tokens with ease and focus on the design system itself, not how to showcase it. Works seamlessly with MDX."
      />
      <meta name="image" content="https://themes.lekoarts.de/specimens/banner.jpg" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="lekoarts.de" />
      <meta property="og:url" content="https://themes.lekoarts.de/specimens" />
      <meta property="og:title" content="Specimens for Design Systems - @lekoarts/gatsby-theme-specimens" />
      <meta
        property="og:description"
        content={`Leverage the wide variety of powerful React components of '@lekoarts/gatsby-theme-specimens' to build your design system. Display your colors, typography or any other design tokens with ease and focus on the design system itself, not how to showcase it. Works seamlessly with MDX.`}
      />
      <meta property="og:image" content="https://themes.lekoarts.de/specimens/banner.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@lekoarts_de" />
      <meta name="twitter:title" content="Specimens for Design Systems - @lekoarts/gatsby-theme-specimens" />
      <meta
        name="twitter:description"
        content={`Leverage the wide variety of powerful React components of '@lekoarts/gatsby-theme-specimens' to build your design system. Display your colors, typography or any other design tokens with ease and focus on the design system itself, not how to showcase it. Works seamlessly with MDX.`}
      />
      <meta name="twitter:image" content="https://themes.lekoarts.de/specimens/banner.jpg" />
    </Helmet>
    <Global
      styles={css`
        *::before,
        *::after {
          box-sizing: border-box;
        }
        ::selection {
          color: #fff;
          background-color: #3490dc;
        }
        body {
          border: 0;
          margin: 0;
          padding: 0;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-top: 2rem !important;
          margin-bottom: 1rem !important;
        }
        .sizes-table {
          > div:not(:first-of-type) {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
        }
      `}
    />
    <main
      css={css`
        max-width: 1200px;
        margin: 2rem auto;
        padding: 1.5rem;
      `}
    >
      {children}
    </main>
  </React.Fragment>
)

export default Layout
