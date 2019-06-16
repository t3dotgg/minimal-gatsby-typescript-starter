import React from "react";

import { Helmet } from "react-helmet";

import "./styles.css";
import { Body } from "../common/body";

const seo = {
  url: "https://t3.gg",
  title: "Minimal Gatsby Typescript Template",
  description: "Minimal Gatsby Typescript Template",
  favicon: "/icon.png"
};

const home = () => (
  <div className="home">
    <title>{seo.title}</title>
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <link rel="icon" type="image/png" sizes="32x32" href={seo.favicon} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
    </Helmet>
    <Body />
  </div>
);

export default home;
