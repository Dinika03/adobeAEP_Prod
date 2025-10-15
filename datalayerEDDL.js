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
function updatebuttonclick(id){
    
  console.log(id);
    const el = document.getElementById(id);
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

}
function updateFormSubmissionEvent(id){
    console.log(id);
     window.EDDLdataLayer.push({
          event: "email_submit",
          eventInfo: {
            eventName: "email submit - get your quote",
            eventAction: "email submitted",
            eventType: "email"
          }
   
    });
    window.EDDLdataLayer.push({
          event: "form_complete",
          eventInfo: {
            eventName: "form completed - get your quote",
            eventAction: "form completed",
            eventType: "form"
          }
        });
}

