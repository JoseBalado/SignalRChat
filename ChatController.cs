using System.Threading.Tasks;
using SignalRChat.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace Notification
{
    public class NotificationService
    {
        private readonly IHubContext<ChatHub> _myHubContext;
        private Timer _timer;
        private readonly TimeSpan _updateInterval = TimeSpan.FromMilliseconds(1000);

        public NotificationService(IHubContext<ChatHub> myHubContext)
        {
            Console.WriteLine("Hello DI");
            _myHubContext = myHubContext;
        }

        public async Task SendMessage(string user, string message)
        {
            await _myHubContext.Clients.All.SendAsync("SendMessage", user, message);
        }

        public async Task startBroadcastCPUUsage()
        {
            Console.WriteLine("Hello Broadcast");
            _timer = new Timer(UpdateCPUUsage, null, _updateInterval, _updateInterval);
        }

        private async void UpdateCPUUsage(Object state)
        {
            Console.WriteLine("Update CPU usage");
        }
    }
}
