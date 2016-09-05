// JavaScript Document

/* idTabs ~ Sean Catchpole - Version 2.2 - MIT/GPL */ 
(function(){ 
var dep = {"jQuery":"http://code.jquery.com/jquery-latest.min.js"}; 
var init = function(){  
 

(function($){ 
 
  $.fn.idTabs = function(){ 
    //Loop Arguments matching options 
    var s = {}; 
    for(var i=0; i<arguments.length; ++i) { 
      var a=arguments[i]; 
      switch(a.constructor){ 
        case Object: $.extend(s,a); break; 
        case Boolean: s.change = a; break; 
        case Number: s.start = a; break; 
        case Function: s.click = a; break; 
        case String: 
          if(a.charAt(0)=='.') s.selected = a; 
          else if(a.charAt(0)=='!') s.event = a; 
          else s.start = a; 
        break; 
      } 
    } 
 
    if(typeof s['return'] == "function") //backwards compatible 
      s.change = s['return']; 
     
    return this.each(function(){ $.idTabs(this,s); }); //Chainable 
  } 
 
  $.idTabs = function(tabs,options) { 
    //Settings 
    var meta = ($.metadata)?$(tabs).metadata():{}; 
    var s = $.extend({},$.idTabs.settings,meta,options); 
 
    //Play nice 
    if(s.selected.charAt(0)=='.') s.selected=s.selected.substr(1); 
    if(s.event.charAt(0)=='!') s.event=s.event.substr(1); 
    if(s.start==null) s.start=-1; //no tab selected 
     
    //Setup Tabs 
    var showId = function(){ 
      if($(this).is('.'+s.selected)) 
        return s.change; //return if already selected 
      var id = "#"+this.href.split('#')[1]; 
      var aList = []; //save tabs 
      var idList = []; //save possible elements 
      $("a",tabs).each(function(){ 
        if(this.href.match(/#/)) { 
          aList.push(this); 
          idList.push("#"+this.href.split('#')[1]); 
        } 
      }); 
      if(s.click && !s.click.apply(this,[id,idList,tabs,s])) return s.change; 
      //Clear tabs, and hide all 
      for(i in aList) $(aList[i]).removeClass(s.selected); 
      for(i in idList) $(idList[i]).hide(); 
      //Select clicked tab and show content 
      $(this).addClass(s.selected); 
      $(id).show(); 
      return s.change; //Option for changing url 
    } 
 
    //Bind idTabs 
    var list = $("a[href*='#']",tabs).unbind(s.event,showId).bind(s.event,showId); 
    list.each(function(){ $("#"+this.href.split('#')[1]).hide(); }); 
 
    //Select default tab 
    var test=false; 
    if((test=list.filter('.'+s.selected)).length); //Select tab with selected class 
    else if(typeof s.start == "number" &&(test=list.eq(s.start)).length); //Select num tab 
    else if(typeof s.start == "string" //Select tab linking to id 
         &&(test=list.filter("[href*='#"+s.start+"']")).length); 
    if(test) { test.removeClass(s.selected); test.trigger(s.event); } //Select tab 
 
    return s; //return current settings (be creative) 
  } 
 
  //Defaults 
  $.idTabs.settings = { 
    start:0, 
    change:false, 
    click:null, 
    selected:".selected", 
    event:"!click" 
  }; 
 
  //Version 
  $.idTabs.version = "2.2"; 
 
  //Auto-run 
  $(function(){ $(".idTabs").idTabs(); }); 
 
})(jQuery); 
 
 
 
} //init 
 
// Check Dependencies 
var check = function(o,s){ 
  s = s.split('.'); 
  while(o && s.length) o = o[s.shift()]; 
  return o; 
} 
 
// Add Script 
var head = document.getElementsByTagName("head")[0]; 
var add = function(url){ 
  var s = document.createElement("script"); 
  s.type = "text/javascript"; s.src = url; 
  head.appendChild(s); 
} 
 
// Save Self 
var s = document.getElementsByTagName('script'); 
var src = s[s.length-1].src; 
 
// Load Dependencies 
var ok=true; 
for(d in dep) { 
  if(check(this,d)) continue; 
  ok=false; 
  add(dep[d]); 
} if(ok) return init(); 
 
// Reload Self 
add(src); 
 
})(); 