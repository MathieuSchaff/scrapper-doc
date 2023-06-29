import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/scrapper.svg').default,
    description: (
      <>
        Scrapper jobs was designed from the ground up to be easily installed and
        used to get what you are looking for in just one app.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/job-search.svg').default,
    description: (
      <>
        You don't need to worry about going to each website to find the best job you want.
        You just need to <code>scrap</code> all the websites and focus on finding the right job for you in only one place.
      </>
    ),
  },
  {
    title: 'Powered by Playwright',
    Svg: require('@site/static/img/playwright-logo.svg').default,
    description: (
      <>
        This scrapper is made with playwright. This is a Node library to
        automate Chromium, Firefox and WebKit with a single API.
        We are using it to scrap all the websites and get the best job for you.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
