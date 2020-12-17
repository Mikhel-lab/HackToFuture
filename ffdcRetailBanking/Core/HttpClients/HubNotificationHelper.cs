using ffdcRetailBanking.Infrastructure;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.HttpClients
{
	public class HubNotificationHelper : IHubNotificationHelper
	{
		IHubContext<NotificationHub> _hubcontext { get; }
		private readonly IHubNotificationHelper helper;

		public HubNotificationHelper(IHubContext<NotificationHub> hubcontext, IHubNotificationHelper connection)
		{
			_hubcontext = hubcontext;
			helper = connection;	
		}
		public IEnumerable<string> OnlineUsers => throw new NotImplementedException();

		public async  Task<Task> SendNotificationParallel(string username)
		{
			HashSet<string> connections = helper.GetConnections(username);
			try
			{
				if (connections  != null &connections.Count > 0)
				{
					foreach (var conn in connections)
					{
						try
						{
							//await _hubcontext.Clients.Client(connection).SendAsync("socket");
						}
						catch (Exception)
						{

							throw;
						}
					}
				}
				return Task.CompletedTask;
			}
			catch
			{

				throw;
			}
		}

		public void SendNotificationToAll(string message)
		{
			throw new NotImplementedException();
		}

		public HashSet<string> GetConnections(string username)
		{
			throw new NotImplementedException();
		}
	}
}
