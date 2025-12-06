import sanitizeHtml from 'sanitize-html';

export const htmlSanitize = ({ userHtml }: { userHtml: string }) => {
  const cleanHtml = sanitizeHtml(userHtml, {
    allowedTags: [
      'p',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'strong',
      'em',
      'ul',
      'ol',
      'li',
      'a',
      'br',
      'img',
    ],
    allowedAttributes: {
      a: ['href'],
      img: ['src', 'alt', 'width', 'height', 'style'],
    },
    allowedSchemes: ['http', 'https', 'data'],
    allowedStyles: {
      img: {
        'max-width': [/^\d+px$/],
        height: [/^\d+px$/],
      },
    },
  });

  return cleanHtml;
};
