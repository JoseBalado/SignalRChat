

## Some errors when connecting to the application:

### "Your Connection Is Not Private", "NET::ERR_CERT_AUTHORITY_INVALID" or similar.
- In Chrome click on "Advanced" and then click on "Proceed to "Unsafe".

### "ERR_SPDY_INADEQUATE_TRANSPORT_SECURITY"
- If you get the error ERR_SPDY_INADEQUATE_TRANSPORT_SECURITY in Chrome, run these commands to update your development certificate:

        dotnet dev-certs https --clean
        dotnet dev-certs https --trust