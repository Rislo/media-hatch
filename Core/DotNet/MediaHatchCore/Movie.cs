using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MediaHatchCore
{
    public class Movie : Media
    {
        [JsonProperty("releaseYear")]
        public int ReleaseYear { get; set; }

        public override string FullName(string name = null)
        {
            if (ReleaseYear > 0)
                return $"{name ?? Name} ({ReleaseYear})";
            else
                return name ?? Name;
        }
    }
}
