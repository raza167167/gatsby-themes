/** @jsx jsx */
import { Themed, jsx } from "theme-ui"

const Footer = () => (
  <footer
    sx={{ pt: 2, my: 4, color: `secondary`, borderTopColor: `muted`, borderTopStyle: `solid`, borderTopWidth: `1px` }}
  >
    <Themed.p>
      Created with{` `}
      <Themed.a href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-styleguide">
        @lekoarts/gatsby-theme-styleguide
      </Themed.a>
      .
    </Themed.p>
  </footer>
)

export default Footer
