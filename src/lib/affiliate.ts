// Amazon Associates link helper.
// If AMAZON_ASSOCIATES_TAG is set at build time, Amazon URLs get `tag=<value>`
// (added or replaced). If it is unset, every URL is returned unchanged, so the
// site never ships a fake or placeholder tag.

const RAW_TAG = (import.meta.env.AMAZON_ASSOCIATES_TAG ?? '').toString().trim();

/** The Associates tag in use at build time, or '' when none is configured. */
export const amazonTag: string = RAW_TAG;

/** True when an Associates tag is configured for this build. */
export const hasAmazonTag: boolean = RAW_TAG.length > 0;

/** amazon.com, www.amazon.com, smile.amazon.co.uk, amazon.de, amzn.to, ... */
export function isAmazonUrl(url: string): boolean {
  let host: string;
  try {
    host = new URL(url).hostname.toLowerCase();
  } catch {
    return false;
  }
  if (host === 'amzn.to' || host.endsWith('.amzn.to')) return true;
  // amazon.<tld> or amazon.<sld>.<tld>, with optional subdomains (www., smile.)
  return /(^|\.)amazon\.[a-z]{2,3}(\.[a-z]{2})?$/.test(host);
}

export interface AffiliateLink {
  href: string;
  /** True only when a real tag was applied to this link. */
  tagged: boolean;
}

/** Apply the Associates tag to Amazon links when one is configured. */
export function affiliateLink(url: string): AffiliateLink {
  if (!hasAmazonTag || !isAmazonUrl(url)) return { href: url, tagged: false };
  try {
    const u = new URL(url);
    u.searchParams.set('tag', amazonTag);
    return { href: u.toString(), tagged: true };
  } catch {
    return { href: url, tagged: false };
  }
}

/** rel attribute for an outbound link. */
export function outboundRel(tagged: boolean): string {
  return tagged ? 'sponsored noopener' : 'noopener nofollow';
}
