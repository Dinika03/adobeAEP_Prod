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
/*const idsToTrack = [
    "cta"
  ];*/ 
  //idsToTrack.forEach(id => {
    
    document.getElementById('cta').addEventListener('click', function(e) {

    const el = document.getElementById('cta');
     let type = el.tagName.toLowerCase();
        
        // Conditional: change "a" to "link"
        if (type === "a") {
          type = "link";
        }
         else{
           type ="button"
         }
    console.log(el);
    if (el) {
        window.EDDLdataLayer.push({
          event: "cta",
          eventInfo: {
            eventName: type +" click - "+ (el.textContent || el.innerText || "").trim().toLowerCase(),
            eventAction: type,
            eventType: "click",
            eventText: (el.textContent || el.innerText || "").trim()
          }
        });
    
    }
  });
}

