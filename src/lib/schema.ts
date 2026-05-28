/**
 * Schema.org JSON-LD schema generators for SEO
 */

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.title,
    description: props.description,
    author: {
      "@type": "Person",
      name: props.author || "Naveen",
    },
    datePublished: props.datePublished,
    dateModified: props.dateModified || props.datePublished,
    image: props.image || "https://naveen37.com/og-image.png",
    url: props.url,
  };
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
    position: number;
  }>;
}

export function generateBreadcrumbSchema(props: BreadcrumbSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: props.items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateAuthorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naveen",
    url: "https://naveen37.com",
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Independent",
    },
    sameAs: [
      "https://github.com/naveen1337",
      "https://x.com/naveen1337",
      "https://www.linkedin.com/in/naveen1337/",
    ],
    location: {
      "@type": "Place",
      name: "Tamil Nadu, India",
    },
  };
}

interface WebsiteSchemaProps {
  url: string;
  name?: string;
  description?: string;
}

export function generateWebsiteSchema(props: WebsiteSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: props.url,
    name: props.name || "Naveen — Full-Stack Developer",
    description:
      props.description ||
      "Full-Stack Developer from Tamil Nadu, India. Specializing in modern web technologies, cloud infrastructure, and scalable application development.",
    author: {
      "@type": "Person",
      name: "Naveen",
    },
  };
}

interface CollectionPageSchemaProps {
  url: string;
  name: string;
  description: string;
  itemCount?: number;
}

export function generateCollectionSchema(props: CollectionPageSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: props.url,
    name: props.name,
    description: props.description,
    numberOfItems: props.itemCount || "7+",
  };
}
