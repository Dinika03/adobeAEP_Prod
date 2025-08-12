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
function updatebuttonclick(){
const idsToTrack = [
    "cta"
  ];

 idsToTrack.forEach(id => {
    const el = document.getElementById(id);
    console.log(el);
    if (el) {
        window.EDDLdataLayer.push({
          event: "click",
          eventType: el.tagName.toLowerCase(),
          id: id,
          eventText: (el.textContent || el.innerText || "").trim()
        });
    
    }
  });
}

