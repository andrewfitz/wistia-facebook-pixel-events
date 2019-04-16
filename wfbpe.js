window._wq = window._wq || [];
_wq.push({
  id: '_all',
  onReady(video) {
    const secondsWatchedDisplay = document.getElementById('seconds_watched_display');
	    video.bind('percentwatchedchanged', (percent, lastPercent) => {
		  if (percent >= .01 && lastPercent < .01) {
		    fbq('trackCustom', 'WistiaWatched', {percent: '1%', url: window.location.href, id: video.hashedId()});
		  } else if (percent >= .25 && lastPercent < .25) {
		    fbq('trackCustom', 'WistiaWatched', {percent: '25%', url: window.location.href, id: video.hashedId()});
		  } else if (percent >= .50 && lastPercent < .50) {
		    fbq('trackCustom', 'WistiaWatched', {percent: '50%', url: window.location.href, id: video.hashedId()});
		  } else if (percent >= .75 && lastPercent < .75) {
		    fbq('trackCustom', 'WistiaWatched', {percent: '75%', url: window.location.href, id: video.hashedId()});
		  } else if (percent >= .95 && lastPercent < .95) {
		    fbq('trackCustom', 'WistiaWatched', {percent: '95%', url: window.location.href, id: video.hashedId()});
		  } else if (percent >= 1 && lastPercent < 1) {
		    fbq('trackCustom', 'WistiaWatched', {percent: '100%', url: window.location.href, id: video.hashedId()});
		  } 
    });
  },
});