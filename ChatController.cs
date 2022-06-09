using System.Threading.Tasks;
using SignalRChat.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System.Diagnostics;
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
            var millisecondsToWait = 500;
            var startCpuUsage = Process.GetProcesses();
            var startTotal = startCpuUsage .ToList() .Sum(process => process.TotalProcessorTime.TotalMilliseconds);

            Thread.Sleep(millisecondsToWait);

            var endCpuUsage = Process.GetProcesses();
            var endTotal = endCpuUsage .ToList() .Sum(process => process.TotalProcessorTime.TotalMilliseconds);

            var cpuTotalUsedMilliseconds = endTotal - startTotal;
            var cpuUsageTotal = cpuTotalUsedMilliseconds / (Environment.ProcessorCount * millisecondsToWait);
            var cpuUsagePercentage = cpuUsageTotal * 100; Console.WriteLine(cpuUsagePercentage);

            await _myHubContext.Clients.All.SendAsync("ReceiveMessage", "server", cpuUsagePercentage);

            Console.WriteLine("CPU usage: " + cpuUsagePercentage);
        }
    }
}
