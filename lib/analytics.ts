/** Push a custom event into GTM's dataLayer.
 *  GTM forwards it to GA4 via the configured tags.
 */
export function pushEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}