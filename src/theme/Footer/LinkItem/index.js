import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './link.module.css';
import * as Icons from 'lucide-react';
import clsx from 'clsx';
export default function FooterLinkItem({ item }) {
  const { to, href, label, prependBaseUrlToHref, logo, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  let IconComponent;
  if (logo && logo.label) {
    IconComponent = Icons[logo.label]
  }
  console.log(item)
  return (
    <Link
      className={clsx("footer__link-item", styles.link)}

      {...(href
        ? {
          href: prependBaseUrlToHref ? normalizedHref : href,
        }
        : {
          to: toUrl,
        })}
      {...props}>
      {label}
      {IconComponent && <IconComponent color={logo.color ?? undefined} size={logo.size ?? undefined} />}


    </Link>
  );
}
