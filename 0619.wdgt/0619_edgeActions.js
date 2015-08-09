
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_slide}","touchend",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_slide2}","touchend",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("visibility",1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_book}","touchend",function(sym,e){var myVariable=sym.getVariable("visibility");if(myVariable){sym.$("kikiwords").hide();sym.$("speaker2").hide();sym.setVariable("visibility",0);}
else{sym.$("kikiwords").show();sym.$("speaker2").show();sym.setVariable("visibility",1);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_speaker}","touchend",function(sym,e){var audio=sym.$("Stop_This_Train")[0];if(audio.paused){audio.play();}else{audio.pause();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_speaker2}","touchend",function(sym,e){var audio=sym.$("kikivoice")[0];if(audio.paused){audio.play();}else{audio.pause();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.stop();var myVariable=sym.getVariable("visibility");if(myVariable){sym.$("kikiwords").hide();sym.$("speaker2").hide();var mySymbolObject=sym.getSymbol("book");mySymbolObject.play();sym.setVariable("visibility",0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8500,function(sym,e){var myVariable=sym.getVariable("visibility");if(myVariable){sym.$("kikiwords").hide();sym.$("speaker2").hide();var mySymbolObject=sym.getSymbol("book");mySymbolObject.play();sym.setVariable("visibility",0);}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//=========================================================

//Edge symbol: 'kikiwords'
(function(symbolName){})("kikiwords");
//Edge symbol end:'kikiwords'

//=========================================================

//Edge symbol: 'page1'
(function(symbolName){})("page1");
//Edge symbol end:'page1'

//=========================================================

//Edge symbol: 'skyline_still'
(function(symbolName){})("skyline_still");
//Edge symbol end:'skyline_still'

//=========================================================

//Edge symbol: 'page2'
(function(symbolName){})("page2");
//Edge symbol end:'page2'

//=========================================================

//Edge symbol: 'skyline_mov'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.play(0);});
//Edge binding end
})("skyline_mov");
//Edge symbol end:'skyline_mov'

//=========================================================

//=========================================================

//Edge symbol: 'book'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bookempty}","touchend",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_book}","touchend",function(sym,e){sym.play();});
//Edge binding end
})("book");
//Edge symbol end:'book'

//=========================================================

//=========================================================

//Edge symbol: 'speaker'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pause}","touchend",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play}","touchend",function(sym,e){sym.play();});
//Edge binding end
})("speaker");
//Edge symbol end:'speaker'

//=========================================================

//=========================================================

//Edge symbol: 'slide'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_slide}","touchend",function(sym,e){sym.play();});
//Edge binding end
})("slide");
//Edge symbol end:'slide'
})(jQuery,AdobeEdge,"EDGE-19567374");