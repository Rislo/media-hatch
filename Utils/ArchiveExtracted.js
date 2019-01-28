//Ajoutez votre script ici. N'hésitez pas à utiliser les propriétés et méthodes de l'API disponibles.
var myArchive = archive;
var downloadLinks = myArchive.getDownloadLinks();
var newFileName = downloadLinks[0].getComment();
if (newFileName) {
	var filePaths = myArchive.getExtractedFilePaths();
	if (filePaths.length > 1) {
		var separatorIndex = newFileName.toLowerCase().search(/e\d+/);
		var newFileNamePrefix = newFileName.substring(0, separatorIndex);
		for (var i = 0; i < filePaths.length; i++) {
			var originalTitle = filePaths[i]
				.getName()
				.split('.')[0]
				.toLowerCase();
			var episodeNbIndex = originalTitle.lastIndexOf('e');
			var episodeNb = +originalTitle.substr(episodeNbIndex + 1);
			var episodeNbString = episodeNb < 10 ? '0' + episodeNb.toString() : episodeNb.toString();
			var newFilePath =
				filePaths[i].getParent().getPath() + '/' + newFileNamePrefix + 'E' + episodeNbString + '.' + filePaths[i].getExtension();
			filePaths[i].renameTo(newFilePath);
		}
	} else {
		var newFilePath = filePaths[0].getParent().getPath() + '/' + newFileName + '.' + filePaths[0].getExtension();
		filePaths[0].renameTo(newFilePath);
	}
}
