import React from "react"
import { Global } from "@emotion/core"
import { css, Styled } from "theme-ui"
import Footer from "./footer"
import SEO from "./seo"

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => (
  <Styled.root>
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          fontSize: `18px`,
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `background`,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
        },
        "@media(max-width: 600px)": {
          html: {
            fontSize: `16px`,
          },
        },
      })}
    />
    <SEO />
    <div css={css({ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0, width: `100%`, height: `100%` })}>
      {children}
      <Footer />
    </div>
  </Styled.root>
)

export default Layout
