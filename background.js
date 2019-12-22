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
  const url = 'https://shikiho.jp/';
  chrome.tabs.create({ url: url });
});
