window.EDDLdataLayer = window.EDDLdataLayer || [];

document.addEventListener("DOMContentLoaded", function() {
  window.EDDLdataLayer.push({
    event: "pageview",
    page: {
      pageName: document.title,
      url: window.location.href,
    }
   
  });
});


