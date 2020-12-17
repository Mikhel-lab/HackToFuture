using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.HttpClients
{
	public interface IHubNotificationHelper
	{
		void SendNotificationToAll(string message);
		IEnumerable<string> OnlineUsers { get; }
		Task<Task> SendNotificationParallel(string username);
        HashSet<string> GetConnections(string username);
	}
}
