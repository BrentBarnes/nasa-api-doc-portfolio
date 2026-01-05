import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'First API Call in 2 Minutes',
    imageSrc: require('@site/static/img/home-card-1.png').default,
    description: (
      <>
        Copy-paste requests so you can hit APOD (Astronomy Picture of the Day) instantly.
      </>
    ),
  },
  {
    title: 'Snippets, Not Theory',
    imageSrc: require('@site/static/img/home-card-2.png').default,
    description: (
      <>
        Build real projects fast: APOD widget, 'NEOs this week,' EPIC image downloader, the sky's the limit.
      </>
    ),
  },
  {
    title: 'Built for Real-World Setbacks',
    imageSrc: require('@site/static/img/home-card-3.png').default,
    description: (
      <>
        Rate limits, outages, and alien responses explained clearly with fixes.
      </>
    ),
  },
];

function Feature({imageSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageSrc} className={styles.featureSvg} alt={title} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
