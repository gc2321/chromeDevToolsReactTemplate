chrome.devtools.panels.create(
  'NewPanelName', // title for the panel tab
  null, // you can specify here path to an icon
  'index.html', // html page which is gonna be injecting into the tab's content

  // you can pass here a callback function
  function (panel) {
    panel.onShown.addListener(function () {

    })
  }
);

