using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.HttpClients
{
	public class ConnectionManager : IConnectionManager
	{
		//Hahset is need to not duplicate connection
		private static Dictionary<string, HashSet<string>> userMap = new Dictionary<string, HashSet<string>>();

		//needed in the controller to get the online users
		public IEnumerable<string> OnlineUsers { get { return userMap.Keys; } }

		public void AddConnection(string username, string connectionId)
		{
			lock (userMap)
			{
				if (!userMap.ContainsKey(username))
				{
					userMap[username] = new HashSet<string>();

				}
				userMap[username].Add(connectionId);
			}
		}

		public HashSet<string> GetConnection(string username)
		{
			var conn = new HashSet<string>();
			try
			{
				lock (userMap)
				{
					conn = userMap[username];
				}
			}
			catch (Exception)
			{

				conn = null;
			}
			return conn;
		}

		public void RemoveConnection(string username, string connectionId)
		{
			lock (userMap)
			{
				foreach (var userName in userMap.Keys)
				{
					if (userMap.ContainsKey(username))
					{
						if (userMap[username].Contains(connectionId))
						{
							userMap[username].Remove(connectionId);
							break;
						}
					}
				}
			}
		}
	}
}
