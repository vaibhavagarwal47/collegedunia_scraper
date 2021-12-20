const cheerio = require('cheerio');
const request = require('request');
const fs = require("fs");
let xlsx = require("xlsx");
let writedata = require("./abc.json");
const mainURL =
{
    url: 'https://en.wikipedia.org/wiki/V',
    timeout:1000
};
request(mainURL, cb);

function cb(error,response,html)
{
    console.log(response && response.statusCode);
    try
    {
        let information = extractinfo(html);
        let wikiv = information;
        let data = JSON.stringify(wikiv);
        fs.writeFileSync("wikidata.json",data);
    }
    catch(error)
    {
        console.log(error);
    }
}

function extractinfo(html)
{
    let select = cheerio.load(html);
    let para = select('.mw-parser-output p');
    let tables = select('.mw-parser-output>ul');
    let history = select(para[1]).text().trim() + select(para[2]).text().trim()+ select(para[3]).text().trim()+ select(para[4]).text().trim();
    let letters = select(para[5]).text().trim() + select(para[6]).text().trim()+select(tables[0]).text().trim() +select(para[7]).text().trim() + select(para[8]).text().trim();
    let namesinotherlanguages =select(tables[1]).text().trim() +select(para[8]).text().trim();
    let mainarr = [history];
    mainarr.push(letters);
    mainarr.push(namesinotherlanguages);
    return mainarr;
}