!function(){"use strict";!function(e,t){var n=e.amplitude||{_q:[],_iq:{}};if(n.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var r=function(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}},s=function(e,t,n){return function(r){e._q.push({name:t,args:Array.prototype.slice.call(n,0),resolve:r})}},o=function(e,t,n){e[t]=function(){if(n)return{promise:new Promise(s(e,t,Array.prototype.slice.call(arguments)))}}},i=function(e){for(var t=0;t<m.length;t++)o(e,m[t],!1);for(var n=0;n<g.length;n++)o(e,g[n],!0)};n.invoked=!0;var u=t.createElement("script");u.type="text/javascript",u.integrity="sha384-x0ik2D45ZDEEEpYpEuDpmj05fY91P7EOZkgdKmq4dKL/ZAVcufJ+nULFtGn0HIZE",u.crossOrigin="anonymous",u.async=!0,u.src="https://cdn.amplitude.com/libs/analytics-browser-2.0.0-min.js.gz",u.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var a=t.getElementsByTagName("script")[0];a.parentNode.insertBefore(u,a);for(var c=function(){return this._q=[],this},p=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],l=0;l<p.length;l++)r(c,p[l]);n.Identify=c;for(var d=function(){return this._q=[],this},f=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],v=0;v<f.length;v++)r(d,f[v]);n.Revenue=d;var m=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset","extendSession"],g=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];i(n),n.createInstance=function(e){return n._iq[e]={_q:[]},i(n._iq[e]),n._iq[e]},e.amplitude=n}}(window,document)}();

/**
 * This is an example plugin that enriches all events by removing a list of keys from the
 * event payload. This plugin is helpful in cases where users prefer not to use default
 * values set by the @amplitude/analytics-browser library, for example:
 * - `event.time`
 * - `event.idfa`
 * - `event.idva`
 * - `event.ip`
 *
 * @param keysToRemove
 * @returns EnrichmentPlugin
 */
const removeEventKeyEnrichment = (keysToRemove = []) => {
  return {
    name: 'remove-event-key-enrichment',
    type: 'enrichment',
    setup: async () => undefined,
    execute: async (event) => {
      for (var key of keysToRemove) {
        delete event[key]
      }
      return event
    },
  }
}

// remove the time key using the enrichment plugin
const removeTimeEnrichment = removeEventKeyEnrichment(['time'])

/**
 * IMPORTANT: install plugin before calling init to make sure plugin is added by the time
 * init function is called, and events are flushed.
 */
amplitude.add(removeTimeEnrichment)

// initialize the sdk
amplitude.init("9e2bdeb55f3924a7de5241aae43f1d77", null, {
  appVersion: '9.0',
  defaultTracking: false,
});

if(typeof window.amplitudeOpenEvent !== "undefined") {
  // Override the videoEmbed for SSR. for embed videos specifically.
  if(window.amplitudeOpenEvent.event === "ArticleOpen") {
    window.amplitudeOpenEvent.eventProperties.videoEmbedded = getMetaValue('hasVideo', 'name', false) ? 'Yes' : 'No'
  }
  amplitude.track(
    window.amplitudeOpenEvent.event,
    window.amplitudeOpenEvent.eventProperties
  )
  delete window.amplitudeOpenEvent
}
