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
lname=Nguyen
fname=Michael
title=Mr
email=aqmnguyen%40gmail.com
street=123%20Sesame%20Street
city=New%20York
state=New%20York
zip=10001
country=US
company=aqmnguyen
fax=98765432199
tel=12345678911
jtitle=Job%20Title
wurl=http%3A%2F%2Fwww.worksite.co.uk
purl=http%3A%2F%2Fwww.personalsite.co.uk
```

# Example:
```
localhost:3000?lname=Nguyen&fname=Michael&title=Mr&email=aqmnguyen%40gmail.com&street=123%20Sesame Street&city=New%20York&state=New%20York&zip=10001&country=US&company=aqmnguyen&fax=98765432199&tel=12345678911&jtitle=Chief%20Alien&purl=http%3A%2F%2Fwww.personalsite.co.uk&wurl=http%3A%2F%2Fwww.worksite.co.uk
```

# V Card Raw
```
BEGIN:VCARD
N:Nguyen;Michael;;Mr;
ADR;DOM;PARCEL;HOME:;;123 Sesame Street;New York;New York;10001;US
EMAIL;INTERNET:aqmnguyen@gmail.com
ORG:aqmnguyen
TEL;FAX;WORK:98765432199
TEL;HOME:12345678911
TITLE:Chief Alien
URL;WORK:http://www.worksite.co.uk
URL:http://www.personalsite.co.uk
END:VCARD
```