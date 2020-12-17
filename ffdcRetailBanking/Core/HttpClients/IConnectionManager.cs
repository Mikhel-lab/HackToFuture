using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.HttpClients
{
	public interface IConnectionManager
	{
		void AddConnection(string username, string connectionId);
		void RemoveConnection(string username, string connectionId);
		HashSet<string> GetConnection(string username);
		IEnumerable<string> OnlineUsers { get; }

	}
}
