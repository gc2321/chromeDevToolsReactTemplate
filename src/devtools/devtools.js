chrome.devtools.panels.create(
  'NewPanelName', // title for the panel tab
  null, // you can specify here path to an icon
  'index.html', // html page which is gonna be injecting into the tab's content

  // you can pass here a callback function
  function (panel) {
    eval();
    panel.onShown.addListener(function () {

    })
  }
);

function eval() {
  chrome.devtools.inspectedWindow.eval('console.log(123);');
  var currentdate = new Date().toLocaleTimeString();
  chrome.devtools.inspectedWindow.eval('console.log("from devtools' + currentdate + '")');
}