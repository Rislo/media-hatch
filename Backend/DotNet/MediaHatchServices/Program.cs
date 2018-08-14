using System;
using System.Net.Sockets;
using Woopsa;

namespace MediaHatchServices
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			try
			{
				bool done = false;
				using (WoopsaServer woopsaServer = new WoopsaServer(new ServicesApi(), 2001, "/mediahatchservices/"))
				{

					Console.WriteLine("Woopsa server listening on http://localhost:{0}{1}", woopsaServer.WebServer.Port, woopsaServer.RoutePrefix);
                    while (!done);
				}
			}
			catch (SocketException e)
			{
				// A SocketException is caused by an application already listening on a port in most cases
				// Applications known to use port 80:
				//  - On Windows 10, IIS is on by default on some configurations. Disable it here: 
				//    http://stackoverflow.com/questions/30758894/apache-server-xampp-doesnt-run-on-windows-10-port-80
				//  - IIS
				//  - Apache
				//  - Nginx
				//  - Skype
				Console.WriteLine("Error: Could not start Woopsa Server. Most likely because an application is already listening on port 80.");
				Console.WriteLine("Known culprits:");
				Console.WriteLine(" - On Windows 10, IIS is on by default on some configurations.");
				Console.WriteLine(" - Skype");
				Console.WriteLine(" - Apache, nginx, etc.");
				Console.WriteLine("SocketException: {0}", e.Message);
				Console.ReadLine();
			}
		}
	}
}
