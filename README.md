This is a (very) minimal proof of concept to demonstrate how you can set auth cookies to SameSite=Strict even if you depend on a 3rd party IdP, by using an internal redirect to re-establish cookies after returning from the IdP

## Setup

Add the following two lines to /etc/hosts

```
127.0.0.1   idp.test
127.0.0.1   eap.test
```

Then download and run this repo like so:

```
git clone https://github.com/seisvelas/SameSite-Redirect-PoC.git
cd SameSite-Redirect-PoC
npm install
node index.js
```

Okay, we're ready to test this out in the browser!

## Result


1. Browse to eap.test in the browser. This will set a cookie called 'whipped' with value 'cream' and SameSite=Strict
2. Click the IdP link sending you to idp.test
3. Control + Click (to open in new tab) the link "EAP (sans redirect)"
4. A tab will open at eap.test/detect showing that no cookies were sent to the server (as expected). Close this tab to return to the IdP page.
5. Click the link that says "EAP (with redirect)"
6. This sends us to eap.test/forward, which uses and HTML redirect to send us on to eap.test/detect
7. This time, eap.test/detect will show us that the cookie IS indeed detected by the server!s