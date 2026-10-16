import { useEffect } from 'react';

export const SEO = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://sptelectricalscliniclab.com/logo.png',
  structuredData = null
}) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper function to safely find or create a meta tag
    const updateOrCreateMeta = (attrName, attrValue, content) => {
      if (!content) return;
      let metaEl = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!metaEl) {
        metaEl = document.createElement('meta');
        metaEl.setAttribute(attrName, attrValue);
        document.head.appendChild(metaEl);
      }
      metaEl.setAttribute('content', content);
    };

    // 2. Meta Description
    updateOrCreateMeta('name', 'description', description);

    // 3. Open Graph Tags
    updateOrCreateMeta('property', 'og:title', title);
    updateOrCreateMeta('property', 'og:description', description);
    updateOrCreateMeta('property', 'og:url', canonicalUrl);
    updateOrCreateMeta('property', 'og:type', ogType);
    updateOrCreateMeta('property', 'og:image', ogImage);
    updateOrCreateMeta('property', 'og:site_name', 'S.P.T. Electrical Services');

    // 4. Twitter Cards
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:title', title);
    updateOrCreateMeta('name', 'twitter:description', description);
    updateOrCreateMeta('name', 'twitter:image', ogImage);

    // 5. Canonical Link
    if (canonicalUrl) {
      let canonicalEl = document.querySelector('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', canonicalUrl);
    }

    // 6. Structured Data (JSON-LD)
    const existingScript = document.getElementById('page-json-ld');
    if (structuredData) {
      const scriptEl = existingScript || document.createElement('script');
      scriptEl.id = 'page-json-ld';
      scriptEl.type = 'application/ld+json';
      scriptEl.textContent = JSON.stringify(structuredData);
      if (!existingScript) {
        document.head.appendChild(scriptEl);
      }
    } else if (existingScript) {
      existingScript.remove();
    }

    return () => {
      const script = document.getElementById('page-json-ld');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, ogImage, structuredData]);

  return null;
};
