 function cssLoad(css){var s=document.createElement('style');document.getElementsByTagName('head')[0].appendChild(s);if(!!window.ActiveXObject){document.styleSheets[document.styleSheets.length-1].cssText=css;}else{stylenode=document.createTextNode(css);s.appendChild(stylenode);}}function azHtmlLoad(div,content){var azDiv=document.getElementById(div);azDiv.innerHTML=content;}function azScriptSRCLoad(div,script){var newScript=document.createElement('script');newScript.type='text/javascript';newScript.src=script;var azDiv=document.getElementById(div);azDiv.appendChild(newScript);}function azScriptInlineLoad(div,script,interval){var newScript=document.createElement('script');newScript.type='text/javascript';if(/msie/.test(navigator.userAgent.toLowerCase())){newScript.text=script;}else{newScript.innerHTML=script;}var azDiv=document.getElementById(div);azDiv.appendChild(newScript);}function azLoad(div,code){var azDiv=document.getElementById(div);if(azDiv){code();}else {setTimeout(function(){azLoad(div,code)},100);}}var zItems=[];function zshow(div){if(zItems[div]){document.write(zItems[div]);}}var adzerk1code = '<iframe src="http://engine.adzerk.net/i/6157/6964?url=http%3A%2F%2Fengine.adzerk.net%2Fredirect%2F0%2F6157%2F6964%2F8277%2F121b33c2f55343c5bf0de6fd7fe954d0%2F43%2F1178%2F9229%2F634563440588142490%3Fkeywords%3Dflash%252cstring%252cactionscript%252cactionscript-2&keywords=flash%2Cstring%2Cactionscript%2Cactionscript-2" width="728" height="90" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" noresize="noresize"></iframe>';var adzerk1func = function() { azHtmlLoad('adzerk1', adzerk1code); }; setTimeout(function() { azLoad('adzerk1', adzerk1func) }, 100);var adzerk2code = '<div id=\"a51-ad-container\" style=\"height: 250px; width: 220px;\"></div>';var adzerk2inline = 'window._a51AdUrl = \"http://engine.adzerk.net/redirect/0/2971/2841/8277/1ac43ae471d347ba8f6a774778eebd7c/45/1178/3087/634563440588240380?keywords=flash%2cstring%2cactionscript%2cactionscript-2\";';var adzerk2src = 'http://area51.stackexchange.com/ads/proposal/js?id=a51-ad-container ';var adzerk2func = function() { azHtmlLoad('adzerk2', adzerk2code);azScriptInlineLoad('adzerk2', adzerk2inline);azScriptSRCLoad('adzerk2', adzerk2src); }; setTimeout(function() { azLoad('adzerk2', adzerk2func) }, 100);var adzerk3code = '<a href="http://engine.adzerk.net/redirect/0/5924/2444/8277/bd11d52bcd3c4d819a36351bb3706e4f/44/1178/8810/634563440588489660?keywords=flash%2cstring%2cactionscript%2cactionscript-2" rel="nofollow" target="_blank" title=""><img src="http://static.adzerk.net/Advertisers/0a96cc99c1784d6abe3cae6b8c8bf013.png" title="" alt="" border="0" height="90" width="728" /></a>';var adzerk3func = function() { azHtmlLoad('adzerk3', adzerk3code); }; setTimeout(function() { azLoad('adzerk3', adzerk3func) }, 100);