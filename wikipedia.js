const cheerio = require('cheerio');
const request = require('request');
const mainURL = "https://en.wikipedia.org/wiki/V";
request(mainURL, cb);

function cb(error,response,html)
{
    console.log(response && response.statusCode);
    try
    {
        extractinfo(html);
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
    console.log("HISTORY: ",history);
    console.log("LETTERS: ",letters);
    console.log("NAMES IN OTHER LANGUAGES: ",namesinotherlanguages);
}