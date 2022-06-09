using System.Threading.Tasks;
using SignalRChat.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace Notification
{
    public class NotificationService
    {
        private readonly IHubContext<ChatHub> _myHubContext;

        public NotificationService(IHubContext<ChatHub> myHubContext)
        {
            Console.WriteLine("Hello DI");
            _myHubContext = myHubContext;
        }

        public async Task SendMessage(string user, string message)
        {
            await _myHubContext.Clients.All.SendAsync("SendMessage", user, message);
        }

        public void ShowUsage()
        {
            Console.WriteLine("Hello World");
        }
    }
}
