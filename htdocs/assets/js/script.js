document.addEventListener("DOMContentLoaded",function(){document.getElementsByTagName("body")[0].className+="js";var e=document.getElementsByClassName("tab"),t=document.getElementsByClassName("tabbed-content");e.length!==t.length&&console.log("count of tabs and tabbed-contend isn't consistent");var n=function(e){markTabTrigger=document.getElementsByClassName("tab")[e].classList.add("active"),unhideSelectedContent=document.getElementsByClassName("tabbed-content")[e].classList.add("active"),localStorage.setItem("tabbedContentId",e),console.log("localStorage ID is: "+e)},o=function(){for(i=0;i<t.length;i++)e[i].classList.remove("active"),t[i].classList.remove("active")},a=localStorage.getItem("tabbedContentId");for(null!==a&&e.length>=a?n(a):(console.log("localStorage is empty or stored Id is no longer present - setting default"),n(0)),i=0;i<e.length;i++)!function(t){e[i].onclick=function(){return o(),n(t),!1}}(i)});
//# sourceMappingURL=script.js.map
