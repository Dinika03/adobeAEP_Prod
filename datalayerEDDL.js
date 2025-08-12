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

const idsToTrack = [
    "buttonclick"
  ];

 idsToTrack.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", function() {
        pushDigitalDataEvent({
          event: "click",
          eventType: el.tagName.toLowerCase(),
          id: id,
          eventText: (el.textContent || el.innerText || "").trim()
        });
      });
    }
  });
});
