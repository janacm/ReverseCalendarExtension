/**
 *
 * Created by janac on 2016-04-03.
 */
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("This is a first install!");
        window.open( 'startup.html');
    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
        window.open( 'startup.html');
    }
});


function do2(){
    prompt("NOT THE RIGHT ONE DAWGGIE from rev cal background");
}

setInterval(do2, 3600 * 1000);
