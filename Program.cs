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
                                "http://localhost:3000",    // IP of the server that wants to connect to this server.
                                "http://127.0.0.1:8080"     // Must much exactly with the URL. If it is localhost then "localhost".
                                                            // If it is an IP number, an IP number must be used here.
                            );
                        });
});

// -- WebSockets -- how to connect from the client:
// Start the server, that must have as ip the ulr as shown in policy.WithOrigins().
// Configure JavaScript in the client as:
// <script src="signalr.js"></script>
// const connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:7116/chatHub").build();


// -- RestFul -- to work with "Create React App" configuring the proxy section in package.json with the IP or
// localhost, depending on what we put on JavaScript to connect is enough:
//  "proxy": "https://localhost:7116"
// and client JavaScript can connect just using the URL, no need for server and port to be configured.
// be just "weatherforecast" (I need to test that) in case that is a get route provided by the server.
//
// fetch('https://localhost:7201/weatherforecast')
//   .then(response => response.json())
//   .then(data => console.log(data));
//
// Also, RestFul doesn't need AllowCredentials(), so this configuration for policy would be enough:
//  policy  =>
//  {
//      policy.AllowAnyHeader();
//      policy.AllowAnyOrigin();
//      policy.AllowAnyMethod();
//  });

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
