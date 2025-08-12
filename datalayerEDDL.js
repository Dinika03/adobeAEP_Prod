window.EDDLdataLayer = window.EDDLdataLayer || [];

function pushEDDLEvent(eventObj) {
  window.EDDLdataLayer.events.push(eventObj);
  console.log("EDDLdataLayer event:", eventObj); // Debug log
}
