var _0x93add2=_0x6a39;(function(_0xc30643,_0x2a8f6c){var _0xd60e56=_0x6a39,_0x9849fd=_0xc30643();while(!![]){try{var _0x8e736c=-parseInt(_0xd60e56(0xbb))/0x1*(-parseInt(_0xd60e56(0xb0))/0x2)+-parseInt(_0xd60e56(0x8b))/0x3*(parseInt(_0xd60e56(0xbd))/0x4)+parseInt(_0xd60e56(0xbe))/0x5+-parseInt(_0xd60e56(0xb5))/0x6*(-parseInt(_0xd60e56(0xaf))/0x7)+-parseInt(_0xd60e56(0xb3))/0x8+parseInt(_0xd60e56(0xa3))/0x9+-parseInt(_0xd60e56(0x99))/0xa;if(_0x8e736c===_0x2a8f6c)break;else _0x9849fd['push'](_0x9849fd['shift']());}catch(_0x5d6486){_0x9849fd['push'](_0x9849fd['shift']());}}}(_0x3dc6,0xd6ada));var sessionid,currency;getCurrencyId(),window[_0x93add2(0xbc)]=function(){},chrome[_0x93add2(0x91)]['onMessage'][_0x93add2(0x8e)](function(_0x31b703,_0x180ff0,_0x5a2cb4){var _0xbb346e=_0x93add2;_0x5a2cb4(_0xbb346e(0xab)),sessionid=document[_0xbb346e(0xa4)][_0xbb346e(0xaa)](_0xbb346e(0x96))[0x1];switch(_0x31b703[_0xbb346e(0xac)]){case _0xbb346e(0xb2):buyItem(_0x31b703[_0xbb346e(0x94)]);break;case _0xbb346e(0xa8):chrome['runtime'][_0xbb346e(0xad)]({'type':_0xbb346e(0x95),'message':currency});break;case _0xbb346e(0x90):sellItem(_0x31b703['items'],0x0);break;}});function buyItem(_0x536215){var _0x170aae=_0x93add2;$[_0x170aae(0x9e)]({'type':_0x170aae(0xb6),'url':_0x170aae(0xa2)+_0x536215['id'],'crossDomain':!![],'xhrFields':{'withCredentials':!![]},'dataType':_0x170aae(0xb1),'data':{'sessionid':sessionid,'currency':_0x536215[_0x170aae(0x95)],'subtotal':_0x536215[_0x170aae(0xb9)],'fee':_0x536215[_0x170aae(0xa1)],'total':_0x536215[_0x170aae(0x8c)],'quantity':0x1},'success':function(_0xab2f9e){var _0x40c293=_0x170aae;chrome[_0x40c293(0x91)][_0x40c293(0xad)]({'type':'buy_succes','message':_0x536215[_0x40c293(0x97)]+_0x40c293(0x93)});},'error':function(_0x4ab9ee){var _0x14987f=_0x170aae;console['log'](_0x4ab9ee),chrome[_0x14987f(0x91)][_0x14987f(0xad)]({'type':'buy_fail','message':_0x536215['name']+'\x20'+_0x4ab9ee[_0x14987f(0xa7)]});}});}function getCurrencyId(){var _0x52b05f=_0x93add2,_0x1a723b='steamWallet',_0x5f8266=document[_0x52b05f(0x92)]('script');_0x5f8266['id']=_0x1a723b;var _0x2e0fc6='document.querySelector(\x27body\x27).setAttribute(\x27steamWallet\x27,\x20JSON.stringify(g_rgWalletInfo));';_0x5f8266[_0x52b05f(0xb7)]=_0x2e0fc6,(document[_0x52b05f(0x98)]||document[_0x52b05f(0xa6)])[_0x52b05f(0x9a)](_0x5f8266);var _0x21fd0d=document[_0x52b05f(0xb4)](_0x52b05f(0xba))[_0x52b05f(0x9b)](_0x1a723b);document[_0x52b05f(0xb4)](_0x52b05f(0xba))['removeAttribute'](_0x1a723b),document[_0x52b05f(0x98)][_0x52b05f(0x8d)](_0x5f8266);var _0x25d417=JSON[_0x52b05f(0xb8)](_0x21fd0d);currency=_0x25d417['wallet_currency'],chrome['runtime']['sendMessage']({'type':_0x52b05f(0x95),'message':currency});}function _0x6a39(_0xfdfd88,_0x3cb9ab){var _0x3dc61d=_0x3dc6();return _0x6a39=function(_0x6a39bb,_0x592cde){_0x6a39bb=_0x6a39bb-0x8b;var _0x58212d=_0x3dc61d[_0x6a39bb];return _0x58212d;},_0x6a39(_0xfdfd88,_0x3cb9ab);}function sellItem(_0x1410f5,_0x5e33bc){var _0x32e21b=_0x93add2;if(_0x5e33bc<_0x1410f5[_0x32e21b(0x9c)])$[_0x32e21b(0x9e)]({'type':'POST','url':'https://steamcommunity.com/market/sellitem/','crossDomain':!![],'xhrFields':{'withCredentials':!![]},'dataType':_0x32e21b(0xb1),'data':{'sessionid':sessionid,'appid':_0x1410f5[_0x5e33bc]['appid'],'contextid':'2','assetid':_0x1410f5[_0x5e33bc][_0x32e21b(0xa9)],'amount':0x1,'price':_0x1410f5[_0x5e33bc][_0x32e21b(0x8f)]},'success':function(_0x3f9d82){var _0x3eb28e=_0x32e21b;if(_0x3f9d82[_0x3eb28e(0x9d)])chrome[_0x3eb28e(0x91)][_0x3eb28e(0xad)]({'type':_0x3eb28e(0xa0),'message':_0x1410f5[_0x5e33bc][_0x3eb28e(0xae)],'item':_0x1410f5[_0x5e33bc]['name']});else{if(_0x3f9d82[_0x3eb28e(0xae)]=='You\x20already\x20have\x20a\x20listing\x20for\x20this\x20item\x20pending\x20confirmation.\x20Please\x20confirm\x20or\x20cancel\x20the\x20existing\x20listing.')chrome[_0x3eb28e(0x91)]['sendMessage']({'type':_0x3eb28e(0x9f),'message':_0x1410f5[_0x5e33bc],'item':_0x1410f5[_0x5e33bc]['name']});else chrome[_0x3eb28e(0x91)][_0x3eb28e(0xad)]({'type':_0x3eb28e(0xa5),'message':_0x3f9d82[_0x3eb28e(0xae)],'item':_0x1410f5[_0x5e33bc][_0x3eb28e(0x97)]});}sellItem(_0x1410f5,_0x5e33bc+0x1);},'error':function(_0xb01475){var _0x312ec9=_0x32e21b;chrome[_0x312ec9(0x91)]['sendMessage']({'type':_0x312ec9(0xa5),'message':_0xb01475[_0x312ec9(0xa7)],'item':_0x1410f5[_0x5e33bc]['name']}),sellItem(_0x1410f5,_0x5e33bc+0x1);}});else chrome[_0x32e21b(0x91)][_0x32e21b(0xad)]({'type':'sellItemEnded'});}function _0x3dc6(){var _0x2d4a2c=['480fmAQsN','POST','innerHTML','parse','subtotal','body','37628bZdIsr','onload','452viqIRB','7169120wPCiBw','30171ckYDnE','total','removeChild','addListener','price','sell','runtime','createElement','\x20куплен','item','currency','sessionid=([^;]*)','name','head','21079770WhffGo','appendChild','getAttribute','length','success','ajax','sellItem_not_confirmed','sellItem','fee','https://steamcommunity.com/market/buylisting/','9026820YMeoIF','cookie','sellItem_fail','documentElement','statusText','getCurrencyId','assetid','match','сообщение\x20получено','type','sendMessage','message','79667zRwTZK','46AwsTNF','json','buyItem','711904swvPeo','querySelector'];_0x3dc6=function(){return _0x2d4a2c;};return _0x3dc6();}