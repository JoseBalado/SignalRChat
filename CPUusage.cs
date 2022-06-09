using System.Diagnostics;
using SignalRChat.Hubs;
using Microsoft.AspNetCore.SignalR;
using Notification;


class CPUusage
{
    private readonly NotificationService _notificationService;
    public CPUusage(NotificationService notificationService)
    {
        _notificationService = notificationService;
    }

    public static async void ShowUsage()
    {
        while(true)
        { 
            var startCpuUsage = Process.GetProcesses(); 
            var startTotal = startCpuUsage .ToList() .Sum(process => process.TotalProcessorTime.TotalMilliseconds);

            Thread.Sleep(1000);

            var endCpuUsage = Process.GetProcesses();
            var endTotal = endCpuUsage .ToList() .Sum(process => process.TotalProcessorTime.TotalMilliseconds);
            var cpuTotalUsedMilliseconds = endTotal - startTotal;
            var cpuUsageTotal = cpuTotalUsedMilliseconds / (Environment.ProcessorCount * 1000);
            var cpuUsagePercentage = cpuUsageTotal * 100; Console.WriteLine(cpuUsagePercentage);}

            // await _notificationService.SendMessage("server", "Hello World.");

    }
}
