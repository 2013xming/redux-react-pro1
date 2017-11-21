(function(){
	window.jsKitStorage = {};
	jsKitStorage.getItem = (key)=>localStorage.getItem(key);
	jsKitStorage.setItem = (key,val)=>localStorage.setItem(key,val);
})();