import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="GrabYou — срочные предложения рядом"
      description="GrabYou — маркетплейс срочных предложений от локального бизнеса">
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}