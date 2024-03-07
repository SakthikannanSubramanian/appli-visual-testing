const { test, expect } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs')

const testUrls = fs.readFileSync('tests/accessibility/test-urls.txt').toString().split("\n");

test.describe('BAT Accessibility Tests', () => {
  testUrls.forEach((url) => {
    test(`Check Accessibility for a Page - ${url}`, async ({ page }) => {
          await page.goto(url);

          const fileName = url.split("/").reverse()[0];

          const csvWriter = createCsvWriter({
            path: `tests/accessibility/bat-accessibility-violations_${fileName}.csv`,
            header: [
              { id: 'url', title: 'URL' },
              { id: 'highlevel_impact', title: 'Highlevel Impact' },
              { id: 'html_tag', title: 'HTML Tag'},
              { id: "violation_type_id", title: "Violation Type Id"},
              { id: 'description', title: 'Description' },
              { id: 'help', title: 'Help' },
              { id: 'target_element', title: 'Target Element' },
              { id: 'impact', title: 'Impact'},
              { id: 'error', title: 'Error' },
              { id: 'other_suggessions', title: 'Other Suggessions'}
            ],
          });

          const results = await new AxeBuilder({ page }).analyze();

          let writeIntoCSV = [];
          if (results.violations.length > 0) {
            for(let i=0; i<= results.violations.length - 1; i++){
              for(let j=0; j<= results.violations[i].nodes.length - 1; j++){
                writeIntoCSV.push(
                  {
                    url: page.url(),
                    highlevel_impact: results.violations[i].impact,
                    violation_type_id: results.violations[i].id,
                    description: results.violations[i].description,
                    help: results.violations[i].help,
                    html_tag: results.violations[i].nodes[j].html,
                    impact: results.violations[i].nodes[j].impact,
                    target_element: results.violations[i].nodes[j].target.join(" & "),
                    error: results.violations[i].nodes[j].failureSummary.replace(/\n/g, '-'),
                    other_suggessions: results.violations[i].nodes[j].any.reduce((accumulator, currentValue) => accumulator + currentValue.message + " - ", "")
                                    +  results.violations[i].nodes[j].all.reduce((accumulator, currentValue) => accumulator + currentValue.message + " - ", "")
                                    +  results.violations[i].nodes[j].none.reduce((accumulator, currentValue) => accumulator + currentValue.message + " - ", "")
                  }
                );
              }
            }
          }

          csvWriter.writeRecords(writeIntoCSV);
          // if (results.violations.length > 0) {

          //     for(let i=0; i<= results.violations.length - 1; i++){
          //       for(let j=0; j<= results.violation.nodes.length -1; i++){
          //         csvWriter.writeRecords(
          //           {
          //             url: page.url(),
          //           }
          //         );
          //       }
          //     }
          //     const rows = results.violations.map((violation) => 
          //       {
          //         const viol = violation.nodes.map((node, violation, page) => (
          //             {
          //               url: page.url(),
          //               impact: violation.impact,
          //               description: violation.description,
          //               help:violation.help,
          //               id: node.id,
          //               node_impact: node.impact,
          //               error: node.message
          //             }
          //           )
          //         );
          //         console.log(viol);
          //         return viol;
          //         // ({
          //         //   url: page.url(),
          //         //   impact: violation.impact,
          //         //   description: violation.description,
          //         //   help: violation.help,
          //         //   nodes: JSON.stringify(violation.nodes),
          //         // })
          //       }
          //     );
            // csvWriter.writeRecords(rows);
          // }
        });
    });
});
