import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  schema?: object | object[];
}

const DEFAULT_OG_IMAGE = "https://www.icrm.org.uk/logo.png";
const SITE_NAME = "ICRM — International Christian Rehab Mission";

const SEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  schema,
}: SEOProps) => {
  const fullTitle = title.includes("ICRM") ? title : `${title} | ICRM`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        }
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:type"         content={ogType} />
      <meta property="og:url"          content={canonical} />
      <meta property="og:title"        content={fullTitle} />
      <meta property="og:description"  content={description} />
      <meta property="og:image"        content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt"    content={fullTitle} />
      <meta property="og:site_name"    content={SITE_NAME} />
      <meta property="og:locale"       content="en_GB" />
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
      <meta name="twitter:image:alt"   content={fullTitle} />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(
            Array.isArray(schema)
              ? { "@context": "https://schema.org", "@graph": schema }
              : schema
          )}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;