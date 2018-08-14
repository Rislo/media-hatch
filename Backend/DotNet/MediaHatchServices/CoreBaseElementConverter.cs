using System;
using System.Reflection;
using MediaHatchCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace MediaHatchServices
{
	public class CoreBaseElementConverter : JsonConverter
	{
		public override bool CanConvert(Type objectType)
		{
			return (objectType == typeof(Media));
		}

		public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
		{
			JObject jo = JObject.Load(reader);

			Type t = Assembly.GetAssembly(typeof(Media)).GetType(jo.Property("type")?.Value.ToString());
			if (t != null)
				return jo.ToObject(t);
			else
				return null;
		}

		public override bool CanWrite
		{
			get { return false; }
		}

		public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
		{
			throw new NotImplementedException();
		}
	}
}
