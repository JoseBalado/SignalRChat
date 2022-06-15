using SignalRChat.Hubs;
using Notification;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
        options.AddPolicy("MyAllowSpecificOrigins",
                        policy  =>
                        {
                            policy.AllowAnyHeader();
                            policy.AllowAnyMethod();
                            policy.AllowAnyOrigin();
                            // AllowCredentials() needed to make CORS works.
                            policy.AllowCredentials();
                            // WithOrigins() needed when AllowCredentials() is needed.
                            policy.WithOrigins(
                                "http://192.168.1.33:3000", // IP of the server and port that wants to connect to this server.
                                                            // The application on the server (JavaScript) trying to connect must use this protocol, IP and port: 
                                                            // https://ip-of-this-server:7116/chatHub

                                "http://localhost:3000"     // Allow connecting from localhost.

                            );
                        });
});

// -- WebSockets -- how to connect from the client:
// Configure JavaScript in the client as:
// <script src="signalr.js"></script>
// const connection = new signalR.HubConnectionBuilder().withUrl("https://ip-of-the-server:7116/chatHub").build();

// -- RestFul -- to work with "Create React App" configuring the proxy section in package.json with the IP.
//  "proxy": "https://ip-of-the-server:7116"
//
// Connecting using vanilla JavaScript:
// fetch('https://ip-of-the-server:7116/weatherforecast')
//   .then(response => response.json())
//   .then(data => console.log(data));
//
// RestFul doesn't need AllowCredentials(), so this configuration for policy would be enough:
//  policy  =>
//  {
//      policy.AllowAnyHeader();
//      policy.AllowAnyOrigin();
//      policy.AllowAnyMethod();
//  });

// To allow connections from other IPs in the same network and not just from the same server as 'localhost':
// https://docs.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel/endpoints?view=aspnetcore-6.0
// https://stackoverflow.com/questions/71044525/how-to-access-asp-net-core-web-server-from-another-device
//
//   "Kestrel": {
//     "Endpoints": {
//       "Http": {
//         "Url": "http://0.0.0.0:5231"
//       },
//       "Https": {
//         "Url": "https://0.0.0.0:7116"
//       }
//     }
//   }

builder.Services.AddRazorPages();
builder.Services.AddSignalR();

builder.Services.AddSingleton<NotificationService>();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseCors("MyAllowSpecificOrigins");


app.UseAuthorization();

app.MapRazorPages();
app.MapHub<ChatHub>("/chatHub");

app.Run();
