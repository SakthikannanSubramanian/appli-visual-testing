const fs = require('fs');

function combineUrls(baseUrlsFile, stageUrlsFile, outputFile, format = 'json') {
  try {
    // Read the contents of the files
    const baseUrls = fs.readFileSync(baseUrlsFile, 'utf-8').trim().split('\n');
    const stageUrls = fs.readFileSync(stageUrlsFile, 'utf-8').trim().split('\n');

    // Combine the URLs into an array of objects
    const combinedUrls = baseUrls.map((baseUrl, index) => ({
      baseurl: baseUrl.trim(),
      stageurl: stageUrls[index] ? stageUrls[index].trim() : null,
    }));

    // Determine the output format
    const outputData = format.toLowerCase() === 'json'
      ? "const urlsToTest = " + JSON.stringify(combinedUrls , null, 2) + "; \n export default urlsToTest;"
      : combinedUrls.map(url => `${url.baseurl},${url.stageurl || ''}`).join('\n') ;

    // Write the output to the specified file
    fs.writeFileSync(outputFile, outputData, 'utf-8');

    console.log(`Combined URLs saved to ${outputFile}`);
  } catch (error) {
    console.error('Error combining and saving URLs:', error.message);
  }
}

const baseUrlsFile = 'base-urls.txt';
const stageUrlsFile = 'stage-urls.txt';
const outputFile = 'combined-urls-object.js';

combineUrls(baseUrlsFile, stageUrlsFile, outputFile);
