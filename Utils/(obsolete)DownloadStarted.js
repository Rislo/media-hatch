var dlLink = link;
var dlPackage = package;
var newFileName = dlPackage.getName();
var isTvShow = newFileName.search(/ S\d{2}/) >= 0;
var multiFiles = false;
alert(isTvShow);
if (isTvShow) {
	var packageLinks = dlPackage.getDownloadLinks();
	var lastLinkFileName = '';
	for (var i = 0; i < packageLinks.length; i++) {
		var linkName = packageLinks[i].getName();
		var separatorIndex = linkName.search(/\.part\d+/);
		var linkFileName = linkName.substring(0, separatorIndex);
		if (lastLinkFileName && lastLinkFileName === linkFileName) {
			multiFiles = true;
			break;
		}
		lastLinkFileName = linkFileName;
	}
}
if (!multiFiles) {
	alert(newFileName);
	dlLink.setName(newFileName);
	alert(dlLink.getDownloadPath());
}
