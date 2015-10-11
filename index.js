'use strict'
/*Calculates the percentage likelyhood of the call
being blocked, that is all the trunks are in use and the caller will receive a busy signal
*/

/*
Calculates
*/
function erlang(servers, time)  {
  return (servers * time)/3600;
}


function erlangB(servers, intensity) {
  var val, last, B, count, maxIterate;

  if (servers < 0 || intensity < 0) {
    return 0;
  }

  maxIterate = Math.round(servers);
}

module.exports. = {
  erlang: function(servers,talk_time) {
    return (agents)
  }
}


module.exports. = {
  serviceLevel: function(agents,talk_time) {
    erlang(agents,talk_time);
  }
}
