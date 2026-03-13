// /functions/go/gobabytrade.js
// Affiliate redirect with UTM tracking
// Usage: /go/gobabytrade?from=hero → redirects to GoBabyTrade signup with UTM params

const DESTINATION = 'https://gobabytrade.com/432706BE';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  const from = url.searchParams.get('from') || 'direct';

  const dest = new URL(DESTINATION);
  dest.searchParams.set('utm_source', 'myrobotictrader');
  dest.searchParams.set('utm_medium', 'affiliate');
  dest.searchParams.set('utm_content', from);

  return Response.redirect(dest.toString(), 302);
}