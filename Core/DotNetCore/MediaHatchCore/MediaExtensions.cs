using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace MediaHatchCore
{
	public static class MediaExtensions
	{
		public static string FilePathSupportedFullName(this Media media)
		{
			return media.FullName(media.FilePathSupportedName());
		}

		public static string FilePathSupportedName(this Media media)
		{
			string validName = media.Name;
			foreach (char c in GetInvalidChars())
				validName = validName.Replace(c, ' ');
			return validName;
		}

		private static List<char> GetInvalidChars()
		{
			if (_invalidChars == null)
			{
				List<char> invalidChars = new List<char>(Path.GetInvalidFileNameChars());
				invalidChars.AddRange(Path.GetInvalidPathChars());
				_invalidChars = new List<char>(invalidChars.Distinct());
			}
			return _invalidChars;
		}

		private static List<char> _invalidChars;
	}
}
