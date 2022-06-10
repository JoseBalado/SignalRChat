## SignalR Web Application
### Requirements: Install .NET SDK 6.0.300
(https://dotnet.microsoft.com/en-us/download/dotnet/6.0https://www.example.com)

### Tested with:
    * Linux Mint 20
    * .NET SDK 6.0.300
    * Google Chrome, version 102.0.5005.115 (Official Build) (64-bit) (Linux)


### Cloning the repository
* Open Terminal.
* Change the current working directory to the location where you want the cloned directory.
* Type git clone, and the URL of the repository.

      $ git clone https://github.com/JoseBalado/SignalRChat.git


### To run the application 'cd' into the folder of the project, execute the command 'dotnet run' and follow the instructions.

    $ cd SignalRChat/
    $ dotnet run


### To see the application running go to the following URL in your browser:

    https://localhost:7116/

## Some errors when connecting to the application:

### "Your Connection Is Not Private", "NET::ERR_CERT_AUTHORITY_INVALID" or similar.
* In Chrome click on "Advanced" and then click on "Proceed to "Unsafe".

### "ERR_SPDY_INADEQUATE_TRANSPORT_SECURITY"
* If you get the error ERR_SPDY_INADEQUATE_TRANSPORT_SECURITY in Chrome, run these commands to update your development certificate:

        dotnet dev-certs https --clean
        dotnet dev-certs https --trust
