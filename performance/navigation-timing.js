/**
 * Navigation Timing collects performance metrics for HTML documents.
 * Resource Timing collects performance metrics for document-dependent resources. Stuff like style sheets, scripts, images, et cetera.
 */

// Get Navigation Timing entries:
performance.getEntriesByType("navigation");

// Get Resource Timing entries:
performance.getEntriesByType("resource");

// Measuring DNS lookup time
var pageNav = performance.getEntriesByType("navigation")[0];
var dnsTime = pageNav.domainLookupEnd - pageNav.domainLookupStart;

var connectionTime = pageNav.connectEnd - pageNav.connectStart;
var tlsTime = 0; // <-- Assume 0 by default

// Did any TLS stuff happen?
if (pageNav.secureConnectionStart > 0) {
  // Awesome! Calculate it!
  tlsTime = pageNav.connectEnd - pageNav.secureConnectionStart;
}