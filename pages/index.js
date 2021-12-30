import { Header, Feature, Sponsor, Specs, Case, Discount, Products, Footer } from "../components";
import { HeadTag, Main, ScrollupLink } from "../global";
import siteData from "../data/siteData.json";

export default function Home() {
  return (
    <div>
      <HeadTag title="Padron Cigars" />

      <Header data={siteData.headerData} />
      <Main>
        <Feature data={siteData.featureData} />
        <Sponsor />
        <Specs data={siteData.specsData} />
        <Case data={siteData.caseData} />
        <Discount />
        <Products data={siteData.productsData} />
        <Footer data={siteData.footerData} />
      </Main>
      <ScrollupLink />
    </div>
  );
};