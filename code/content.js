console.log("hi");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(data, sender, sendResponse) {
    var age='18';
    var districtElement = document.getElementsByTagName('ion-col')[11].children[0]['outerText']
    districtElement.textContent="Surat Corporation";
    var x=document.getElementsByClassName("center-name-title");
    var y=document.getElementsByTagName("ion-col");

    var myVar;

    main();

    function main() {
        myVar = setInterval(alertFunc, 500);
    }

    function alertFunc() {
        document.getElementsByTagName("ion-col")[12].children[0].click();

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    
        async function delayedSearch() {
            await sleep(100);
            var countCol = document.getElementsByTagName("ion-col").length;


            for(i=17 ; i<countCol ; i+=2) {
                try {
                    
                    if(((y[i+1].getElementsByTagName("li")[1].getElementsByTagName("span")[0].innerHTML.slice(4,6))==age) && !isNaN(y[i+1].getElementsByTagName("li")[1].getElementsByTagName("a")[0]['outerText'])) {
                        clearInterval(myVar);
                        console.log("clicked yayyyyyyyyyyyyyyyyyyyyyyyyyy");
                        document.getElementsByTagName("ion-col")[i+1].children[0].getElementsByTagName('li')[1].getElementsByTagName('a')[0].click();
                        break;
                    }
                }
                catch(err) {
                    ;
                }
            }
        }
        delayedSearch();
    }
}