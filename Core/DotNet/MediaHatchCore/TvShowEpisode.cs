using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace MediaHatchCore
{
    public class TvShowEpisode : Media
    {
		[JsonProperty("seasonNb")]
        public int SeasonNb { get; set; }

		[JsonProperty("episodeNb")]
        public int[] EpisodeNb { get; set; }

		public override string FullName(string name = null)
		{
			string episodeNumbers = string.Empty;
			for (int i = 0; i < this.EpisodeNb.Length; i++)
				episodeNumbers += $"E{StringifyNumber(this.EpisodeNb[i])}";
			return $"{name ?? Name} S{StringifyNumber(SeasonNb)}{episodeNumbers}";
		}

		private string StringifyNumber(int number)
		{
			return number < 10 ? $"0{number}" : number.ToString();
		}
    }
}
