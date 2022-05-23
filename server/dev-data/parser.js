const axios = require("axios");
const { load } = require("cheerio");
const fs = require("fs");

//////////////////////////// PARSER ////////////////////////////////////

class ParserCards {
  cardsInfo = [];

  ///////////////////////////////////////////////////////////////////////
  // PAGINATION FOR PARSING

  numFromStr(price, deltaPrice) {
    let prices = price.split("—").map((s) => s.replace(/\D/g, ""));
    if (deltaPrice === "minPrice") return Number(prices[0]);
    else if (deltaPrice === "maxPrice" && prices[1]) return Number(prices[1]);
    return Number(prices[0]);
  }

  ///////////////////////////////////////////////////////////////////////
  // CARDS PARSING

  async parseFranchiseInfo(url) {
    try {
      const getHTML = async (url) => {
        const { data } = await axios(url);

        return load(data);
      };

      const $ = await getHTML(`${url}`);

      const pageNumber = $("li.pagination-line__item").eq(-2).text();

      for (let currentPage = 1; currentPage <= pageNumber; currentPage++) {
        const selector = await getHTML(`${url}-p-${currentPage}`);

        selector(".tdb-view__item").each(async (i, element) => {
          const promiseCard = await new Promise(async (resolve, reject) => {
            return resolve({
              image: `https://www.beboss.ru${selector(element)
                .find("img.tdb-view__picture")
                .attr("src")}`,
              title: selector(element).find("h3.tdb-view__text").text(),
              description: selector(element)
                .find("span.fr-card-list__description")
                .text(),
              priceMax: this.numFromStr(
                selector(element)
                  .find("p.fr-card-list__price > span:nth-child(2)")
                  .text(),
                "maxPrice"
              ),
              priceMin: this.numFromStr(
                selector(element)
                  .find("p.fr-card-list__price > span:nth-child(2)")
                  .text(),
                "minPrice"
              ),
              fullDescription: await this.parseDescription(
                selector(element).find(".stretched-link").attr("href")
              ),
            });
          });

          const promiseCardResult = await promiseCard;

          // [ {} ] > {}
          promiseCardResult.fullDescription = await promiseCardResult
            .fullDescription[0];

          this.cardsInfo.push(promiseCardResult);
        });
      }

      return this.cardsInfo;
    } catch (error) {
      console.log(error);
    }
  }

  ///////////////////////////////////////////////////////////////////////
  // PARSING DESCRIPTION

  async parseDescription(url) {
    try {
      const getHTML = async (url) => {
        try {
          const { data } = await axios(url);

          return load(data);
        } catch (error) {
          console.log(error);
        }
      };

      const $ = await getHTML(`${url}`);

      const selector = await getHTML(`${url}`);

      const franchiseData = [];

      selector(".main").each(async (i, el) => {
        const promiseDescription = await new Promise((resolve, reject) => {
          return resolve({
            category: selector(el)
              .find("ul.breadcrumb-new > li:nth-child(2) > a")
              .attr("href")
              .replace(/.*?-c-/gi, ""),
            lumpSum: selector(el)
              .find(".fr-page__item-title")
              .filter(function (i, el) {
                return $(el).text().includes("В том числе паушальный взнос");
              })
              .find("span")
              .text()
              .replace(/\&nbsp;/g, " "),
            forecastRevenue: selector(el)
              .find(".fr-page__item-title")
              .filter(function (i, el) {
                return $(el).text().includes("Прогнозируемая выручка");
              })
              .find("span")
              .text()
              .replace(/\&nbsp;/g, " "),
            forecastNetIncome: selector(el)
              .find(".fr-page__item-title")
              .filter(function (i, el) {
                return $(el).text().includes("Возможная чистая прибыль");
              })
              .find("span")
              .text()
              .replace(/\&nbsp;/g, " "),
            royaltySum: selector(el)
              .find(".fr-page__item-title")
              .filter(function (i, el) {
                return $(el).text().includes("Роялти");
              })
              .find("span")
              .text(),
            numEnterpises: selector(el)
              .find(".fr-page__basic-info-text")
              .filter(function (i, el) {
                return $(el).text().includes("Собственных предприятий");
              })
              .find("span")
              .text(),
            numFranchises: selector(el)
              .find(".fr-page__basic-info-text")
              .filter(function (i, el) {
                return $(el).text().includes("Франшизных предприятий");
              })
              .find("span")
              .text(),
            startYear: selector(el)
              .find(".fr-page__basic-info-text")
              .filter(function (i, el) {
                return $(el).text().includes("Год запуска франчайзинга");
              })
              .find("span")
              .text(),
            startPeriod: selector(el)
              .find(".fr-page__basic-info-text")
              .filter(function (i, el) {
                return $(el).text().includes("Срок запуска бизнеса");
              })
              .find("span")
              .text(),
            paybackPeriod: selector(el)
              .find(".fr-page__basic-info-text")
              .filter(function (i, el) {
                return $(el).text().includes("Срок окупаемости");
              })
              .find("span")
              .text(),
            foundYear: selector(el)
              .find(".fr-page__basic-info-text")
              .filter(function (i, el) {
                return $(el).text().includes("Год основания компании");
              })
              .find("span")
              .text(),
            companyDescr: selector(el)
              .find("#company_descr_tpl")
              .text()
              ?.replace(/\n/g, ""),
            franchDescr: selector(el)
              .find("#franch_descr_tpl")
              .text()
              ?.replace(/\n/g, ""),
            supportDescr: selector(el)
              .find("#support_descr")
              .text()
              ?.replace(/\n/g, ""),
            buyersRequirements: selector(el)
              .find("#buyers_requirements_tpl")
              .text()
              ?.replace(/\n/g, ""),
            quartersRequirements: selector(el)
              .find("#quarters_requirements_tpl")
              .text()
              ?.replace(/\n/g, ""),
          });
        });
        franchiseData.push(promiseDescription);
      });
      return franchiseData;
    } catch (error) {
      console.log(error);
    }
  }

  ///////////////////////////////////////////////////////////////////////
  // CALLING PARSE INFO

  async parseData() {
    try {
      console.log("THE PARSER WAS STARTED");
      const results = await this.parseFranchiseInfo(
        "https://www.beboss.ru/franchise/search"
      );
      this.insertToJsonFile(results);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("THE PARSER WAS FINISHED");

      return;
    }
  }

  ///////////////////////////////////////////////////////////////////////
  // PUSHING TO THE DATA BASE

  insertToJsonFile(results) {
    const data = JSON.stringify(results);
    fs.writeFile("cardsInfo.json", data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File 'cardsInfo.json' was written");
      }
    });
  }
}

const start = new ParserCards();
start.parseData();
