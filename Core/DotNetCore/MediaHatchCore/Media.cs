using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace MediaHatchCore
{
    public abstract class Media
    {
		[JsonProperty("rawName")]
        public string RawName { get; set; }

		[JsonProperty("name")]
        public string Name { get; set; }

		public virtual string FullName(string name = null)
		{
			return name ?? Name;
		}

		//[JsonProperty("description")]
        public string Description { get; set; }

		//[JsonProperty("illustrationUrl")]
		public string IllustrationUrl { get; set; }

        public byte[] Illustration { get; set; }

        public List<LinksPackage> LinksPackages { get; set; }

		[JsonProperty("tags")]
		public string[] Tags { get; set; }

		public bool LinksPackageAvailable => LinksPackages?.Count > 0;

        public LinksPackage GetFirstFavoriteLinksPackage(List<string> orderedFavoriteFileHosts)
        {
            for (int i = 0; i < orderedFavoriteFileHosts.Count; i++)
            {
                LinksPackage linksPackage = LinksPackages.FirstOrDefault(lp => lp.FileHost.Contains(orderedFavoriteFileHosts[i]));
                if (linksPackage != null)
                    return linksPackage;
            }
            if (LinksPackages.Count > 0)
                return LinksPackages[0];
            else
                return null;
        }
    }
}
