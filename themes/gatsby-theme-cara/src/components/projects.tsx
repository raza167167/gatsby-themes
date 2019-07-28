/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import ProjectsMDX from "../sections/projects.mdx"

const Projects: React.FC<{ colors: any }> = ({ colors }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={2}
    />
    <Content speed={0.4} offset={1.2} factor={2}>
      <Inner>
        <ProjectsMDX />
      </Inner>
    </Content>
    <Divider speed={0.1} offset={1} factor={2}>
      <UpDown>
        <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
        <SVG icon="upDown" width={8} fill={colors.teal[5]} left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke={colors.orange[5]} left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={24} fill={colors.white} left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors.green[5]} left="20%" top="90%" />
        <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="30%" />
        <SVG icon="circle" width={16} fill={colors.yellow[5]} left="70%" top="90%" />
        <SVG icon="triangle" hiddenMobile width={16} stroke={colors.teal[5]} left="18%" top="75%" />
        <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors.green[5]} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors.pink[5]} left="80%" top="60%" />
      <SVG icon="box" width={6} fill={colors.orange[5]} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors.yellow[5]} left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke={colors.red[5]} left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors.yellow[5]} left="80%" top="70%" />
    </Divider>
  </div>
)

export default Projects
