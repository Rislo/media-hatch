using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace MediaHatchCore
{
    public class LinksPackage
    {
        public LinksPackage(string fileHost, List<string> links)
        {
            Links = new List<string>(links);
            FileHost = fileHost;
        }

		[JsonProperty("fileHost")]
        public string FileHost { get; set; }

		[JsonProperty("links")]
		public List<string> Links { get; set; }

        public string ConcatenatedLinks { get { return string.Join(" ", Links); } }
    }
}
