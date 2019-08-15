import React from "react"
import { css } from "@emotion/core"
import {
  Alert,
  ColorSwatch,
  ColorRow,
  Palette,
  normalizeThemeUIColors,
  filterStyles,
  Typography,
  Audio,
  Video,
  Download,
} from "@lekoarts/gatsby-theme-specimens"
import Layout from "../components/layout"
import { colors, styles, theme, fontSizes, fonts } from "../../theme"
import FontFamily from "../../../../themes/gatsby-theme-specimens/src/components/fontFamily"

const Index = () => (
  <Layout>
    <main
      css={css`
        max-width: 1200px;
        margin: 3rem auto;
        padding: 1.5rem;
      `}
    >
      <h1>Specimens for Design Systems</h1>
      <p>React component utilities to build your design system!</p>
      <h2>Alerts</h2>
      <Alert type="success">Make it so! Make it so! Make it so! Make it so! Make it so!</Alert>
      <Alert type="hint">Neutral Hint</Alert>
      <Alert type="warning">Gentle warning :)</Alert>
      <Alert type="info">Super helpful information goes here</Alert>
      <Alert type="danger">nooooooooo, not this way</Alert>
      <h2>Color Swatches</h2>
      <ColorSwatch color="#2d3748" name="Blueish" />
      <ColorSwatch color="#fff" />
      <ColorSwatch color="#667eea" name="Swift" />
      <h2>Color Rows</h2>
      <ColorRow color="#000" name="Blackness" prefix="Dark - " />
      <h2>Palette: Color Swatches</h2>
      <Palette colors={normalizeThemeUIColors({ colors })} single minimal mode="swatch" />
      <h2>Palette: Color Rows</h2>
      <Palette colors={normalizeThemeUIColors({ colors: colors.indigo })} prefix="Indigo - " />
      <h2>Typography: Headings</h2>
      <Typography
        styles={filterStyles({ input: styles, allowed: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`] })}
        theme={theme}
      />
      <h2>Typography: Scale</h2>
      <Typography styles={fontSizes} />
      <h2>Typography: Font Families</h2>
      <FontFamily fonts={fonts} />
      <h2>Audio</h2>
      <Audio
        src="sounds/through_the_gate.mp3"
        name="Through the Gate"
        desc="Hundreds of years in the future, in a colonized Solar System, police detective Josephus Miller, born on Ceres in the asteroid belt, is sent to find a missing young woman, Juliette 'Julie' Andromeda Mao. James Holden, Executive Officer of the ice hauler Canterbury, is involved in a tragic incident that threatens to destabilize the uneasy peace between Earth, Mars and the Belt."
      />
      <Audio src="sounds/through_the_gate.mp3" />
      <h2>Video</h2>
      <Video name="LekoArts Intro" src="videos/intro.mp4" poster="videos/intro_poster.jpg" />
      <h2>Download</h2>
      <Download
        name="Gatsby Themes Wallpaper"
        notes="Use for Social Media previews"
        src="downloads/gatsby-themes-wallpaper.jpg"
      />
      <Download name="Logo" bg="black" src="downloads/logo.png" />
    </main>
  </Layout>
)

export default Index
