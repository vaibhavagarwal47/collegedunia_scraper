const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"
  );
  await page.goto("https://collegedunia.com/btech/sangli-colleges");
  await page.waitForTimeout(2500);

        let ele = await page.evaluate(()=>{

            return {
              'name': Array.from(document.querySelectorAll("h3.m-0")).map(x=>x.innerText),
              'href': Array.from(document.querySelectorAll(".jsx-765939686.college_name")).map(x=>x.getAttribute('href'))
            };
    
        })

    console.log(ele)

  await browser.close();
})();

let collegeurl = "https://collegedunia.com/college/28754-manajiraje-bhosale-technical-campus-faculty-of-engineering-mbt-sangli";
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"
  );
  await page.goto(collegeurl);
  await page.waitForTimeout(2500);

  let info = await page.evaluate(() => {
    if (document.querySelector(".cdcms_college_highlights>p:nth-child(3)")){
        return {
          'summary': document.querySelector(".cdcms_college_highlights>p:nth-child(3)").textContent,
          'elig': document.querySelector("tbody.jsx-2675951502").textContent
        }
      }
      else{
        return {
          'summary': 'Not Present',
          'elig': document.querySelector("tbody.jsx-2675951502").innerText
        }
      }
    });
  console.log(info);
  await browser.close();
})();
