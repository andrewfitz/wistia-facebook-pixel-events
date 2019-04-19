fnk = function fnk(pcw) {
	fbq('trackCustom', 'WistiaWatched', {percent: pcw, url: window.location.href, id: video.hashedId()});
}

window._wq = window._wq || [];
_wq.push({
  id: '_all',
  onReady(video) {
    const secondsWatchedDisplay = document.getElementById('seconds_watched_display');
	    video.bind('percentwatchedchanged', (percent, lastPercent) => {
		  if (percent >= .01 && lastPercent < .01) {
		    fnk('1%');
		  } else if (percent >= .25 && lastPercent < .25) {
		    fnk('25%');
		  } else if (percent >= .50 && lastPercent < .50) {
		    fnk('50%');
		  } else if (percent >= .75 && lastPercent < .75) {
		    fnk('75%');
		  } else if (percent >= .95 && lastPercent < .95) {
		    fnk('95%');
		  } else if (percent >= 1 && lastPercent < 1) {
		    fnk('100%');
		  } 
    });
  },
});