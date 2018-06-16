const http 				= require('http');
const url	 				= require('url');
const fs 					= require('fs');
const underscore 	= require('underscore');

const template 			= underscore.template(fs.readFileSync('./vcf.template').toString());

const port = process.env['PORT'] || 3000;
const host = process.env['HOST'];

http.createServer(function(req, res) {
  
  const params = url.parse(req.url, true).query;
  console.log(params);

  let {fname = '', lname = '', title = '', street = '', city = '', state = '', zip = '', country = '', email = '', company = '', fax = '', tel = '', jtitle = '', wurl = '', purl = ''} = params;
  
  const name 		= `${lname};${fname};;${title};`;
  const address = `;;${street};${city};${state};${zip};${country}`;

  const info = {
  	name,
  	address,
  	email,
  	company,
  	fax,
  	tel,
  	jtitle,
  	wurl,
  	purl
  }

  const output = template(info);
  res.writeHead(200, {
    'Content-Type': 'text/x-vcard',
    'Content-Disposition': `attachment; filename="${fname}-${lname}.vcf"`
  });
  res.end(output);

}).listen(port);

console.log("Listening on port " + port + ", host " + host);