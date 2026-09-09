function formatProfileLink(link) {
  let normalizedLink = link.trim().toLowerCase();
  if (normalizedLink.startsWith('http://')) {
    normalizedLink = `https://${normalizedLink.slice(7)}`;
  }
  if (!normalizedLink.endsWith('/')) {
    normalizedLink += '/';
  }
  return normalizedLink;
}
console.log(formatProfileLink('  HTTP://My-Site.com/Profile  '));
console.log(formatProfileLink('https://example.com/user/'));
