[demonstrates flow of samesite strict cookie. confirms that after internal redirect, unsent cookies are indeed sent (not, as colleague put it, 'tainted')]


## Setup

Add the following two lines to /etc/hosts

```
127.0.0.1   idp.test
127.0.0.1   eap.test
```

Then download and run this repo like so:



## Result

note that a normal redirect doesn't work (like 'chaining' requests). But HTML redirect does.
[include screenshots of process / result]