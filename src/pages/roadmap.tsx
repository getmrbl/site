import * as React from "react"
import { Link } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Navigation from "../@lekoarts/gatsby-theme-cara/components/navigation"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const Roadmap = () => (
    <Layout>
        <Seo title="Roadmap" />
        <Navigation />
        <Parallax pages={1}>
            <Content>
                <Inner>
                    <Themed.h1>Roadmap</Themed.h1>
                    <Themed.p>
                        Wen roadmap? Soon.
                    </Themed.p>
                </Inner>
            </Content>
        </Parallax>
    </Layout>
)

export default Roadmap