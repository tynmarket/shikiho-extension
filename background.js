chrome.contextMenus.create({
  title: "四季報オンラインで「%s」を検索する",
  type : "normal",
  contexts: ["all"],
  onclick: (info) => {
    const url = `https://shikiho.jp/search?query=${info.selectionText}`;
    chrome.tabs.create({ url : url });
  }
});

chrome.browserAction.onClicked.addListener(function(activeTab){
  console.log("clicked")
  const uRL = 'https://site2.sbisec.co.jp/ETGate/';
  chrome.tabs.create({ url: newURL }, (tab) => {
    chrome.tabs.executeScript(
      tab.id,
      { code: script });
  });
});
