# v-card-generator
Creates V Card based on params passed through

# Install Notes

```js
npm install
node index.js
```

# Query Params

Params should be URL encoded, below is a list of params accepted to generate the v card.

```
lname=Holmes
fname=Sherlock
title=Mr
email=sherlock%40movableink.com
street=221B%20Baker%20Street
city=Marylebone
state=London
zip=NW1%206XE
country=UK
company=Sherlock%20Holmes
fax=98765432199
tel=12345678911
jtitle=Detective
wurl=http%3A%2F%2Fwww.worksite.co.uk
purl=http%3A%2F%2Fwww.personalsite.co.uk
```

# Example:
```
localhost:3000?lname=Holmes&fname=Sherlock&title=Mr&email=sherlock%40movableink.com&street=221B%20Baker Street&city=Marylebone&state=London&zip=NW1%206XE&country=UK&company=Sherlock%20Holmes&fax=98765432199&tel=12345678911&jtitle=Detective&purl=http%3A%2F%2Fwww.personalsite.co.uk&wurl=http%3A%2F%2Fwww.worksite.co.uk
```

# V Card Raw
```
BEGIN:VCARD
N:Holmes;Sherolock;;Mr;
ADR;DOM;PARCEL;HOME:;;221B Baker Street;Marylebone;London;NW1 6XE;UK
EMAIL;INTERNET:sherlock@movableink.com
ORG:Sherlock Holmes
TEL;FAX;WORK:98765432199
TEL;HOME:12345678911
TITLE:Detective
URL;WORK:http://www.worksite.co.uk
URL:http://www.personalsite.co.uk
END:VCARD
```
