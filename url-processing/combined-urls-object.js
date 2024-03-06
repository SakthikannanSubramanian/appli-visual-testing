const urlsToTest = [
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOAWUGEB",
    "stageurl": "https://stage.bat.com/brands---innovation/building-brands"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOCS4JK8",
    "stageurl": "https://stage.bat.com/brands---innovation/glo"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9DFFYA",
    "stageurl": "https://stage.bat.com/brands---innovation/regulation"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9DLM9T",
    "stageurl": "https://stage.bat.com/brands---innovation/regulation/campaigning-and-engagement"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9GFM88",
    "stageurl": "https://stage.bat.com/brands---innovation/regulation/ingredients-bans"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9PXEZ2",
    "stageurl": "https://stage.bat.com/brands---innovation/regulation/our-view-on-regulation-of-reduced-risk-products"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9DKJEB",
    "stageurl": "https://stage.bat.com/brands---innovation/regulation/plain-packaging-of-tobacco-products"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9DCKG8",
    "stageurl": "https://stage.bat.com/brands---innovation/regulation/pricing-and-tax-strategy"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO7J7D2J",
    "stageurl": "https://stage.bat.com/brands---innovation/regulation/retail-display-bans"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9EBF2Q",
    "stageurl": "https://stage.bat.com/brands---innovation/regulation/the-framework-convention-on-tobacco-control"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOCS4JKF",
    "stageurl": "https://stage.bat.com/brands---innovation/velo"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOCS4JJY",
    "stageurl": "https://stage.bat.com/brands---innovation/vuse"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOAKPKWF",
    "stageurl": "https://stage.bat.com/investors---reporting/dividend-information/dividend-payments-by-direct-credit-2018"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO5SXKQB",
    "stageurl": "https://stage.bat.com/investors---reporting/dividend-information/dividend-reinvestment-plan"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOALSC3V",
    "stageurl": "https://stage.bat.com/investors---reporting/dividend-information/quarterly-dividend-payments"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO6FKEVZ",
    "stageurl": "https://stage.bat.com/investors---reporting/investor-presentations"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO6K5FYK",
    "stageurl": "https://stage.bat.com/investors---reporting/news-and-filings/email-alert-service"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOC4EJA6",
    "stageurl": "https://stage.bat.com/investors---reporting/news-and-filings/news-hub-subscribe"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOBPQG34",
    "stageurl": "https://stage.bat.com/investors---reporting/reporting/conflict-minerals-report"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOAWUM6A",
    "stageurl": "https://stage.bat.com/investors---reporting/reporting/diversity-and-inclusion-report"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOBVULB3",
    "stageurl": "https://stage.bat.com/investors---reporting/reporting/focus-reporting"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOCJPDBP",
    "stageurl": "https://stage.bat.com/investors---reporting/reporting/low-carbon-transition-plan"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOBN2J9P",
    "stageurl": "https://stage.bat.com/investors---reporting/reporting/modern-slavery-statement"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO8WHM7W",
    "stageurl": "https://stage.bat.com/investors---reporting/results-centre/chairmans-comments-on-the-half-yearly-report-to-30-June-2012"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOAC8D9T",
    "stageurl": "https://stage.bat.com/investors---reporting/results-centre/chief-executives-review-of-our-half-year-report-for-the-six-months-ended-30-june-2016"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9MGDP8",
    "stageurl": "https://stage.bat.com/investors---reporting/results-centre/chief-executive-s-review-of-the-half-yearly-report-to-30-june-20"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9A4L4R",
    "stageurl": "https://stage.bat.com/investors---reporting/results-centre/chief-executives-review-of-the-half-yearly-report-to-30-June-2013"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9YUK2T",
    "stageurl": "https://stage.bat.com/investors---reporting/results-centre/chief-executive-s-review-of-the-half-year-report-to-30-june-2015"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOAW7JD3",
    "stageurl": "https://stage.bat.com/investors---reporting/results-centre/chief-executive-s-review-of-the-preliminary-results-for-the-year"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9U3MHK",
    "stageurl": "https://stage.bat.com/investors---reporting/results-centre/chief-executive-s-review-of-the-preliminary-results-for-the-year0"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOA7FNZN",
    "stageurl": "https://stage.bat.com/investors---reporting/results-centre/chief-executive-s-review-of-the-preliminary-results-for-the-year1"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO95BP2C",
    "stageurl": "https://stage.bat.com/investors---reporting/results-centre/chief-executives-review-of-the-preliminary-results-for-the-year-ended-31-december-2012"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOAJSLZ8",
    "stageurl": "https://stage.bat.com/investors---reporting/results-centre/chief-Executives-review-of-the-preliminary-results-for-the-year-ended-31-December-2015"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOBYAMGR",
    "stageurl": "https://stage.bat.com/investors---reporting/results-centre/consensus"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOBYAMTC",
    "stageurl": "https://stage.bat.com/investors---reporting/shareholder-information"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOAJSMBP",
    "stageurl": "https://stage.bat.com/investors---reporting/shareholder-information/acquisition-of-reynolds-american-inc-"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO57YLEK",
    "stageurl": "https://stage.bat.com/investors---reporting/shareholder-information/contact-investor-relations"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO76CCUX",
    "stageurl": "https://stage.bat.com/investors---reporting/shareholder-information/debt-investors"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO56PDEZ",
    "stageurl": "https://stage.bat.com/investors---reporting/shareholder-information/dividends-and-payments"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOBYAMTV",
    "stageurl": "https://stage.bat.com/investors---reporting/shareholder-information/faq"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO6QBKGD",
    "stageurl": "https://stage.bat.com/investors---reporting/shareholder-information/manage-your-shares"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOBYAM7C",
    "stageurl": "https://stage.bat.com/investors---reporting/sustainability-for-investors/what-sustainability-means-at-bat"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO8QVTEX",
    "stageurl": "https://stage.bat.com/media/media-contacts"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOC56JZ9",
    "stageurl": "https://stage.bat.com/media/social-media"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOCS4JD3",
    "stageurl": "https://stage.bat.com/science---research/modern-oral"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9P3DZW",
    "stageurl": "https://stage.bat.com/science---research/reduced-risk-products/understanding-the-comparative-risks-of-our-products"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOBN2JBY",
    "stageurl": "https://stage.bat.com/science---research/world-class-science/science-and-innovation-report"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOAB8BVX",
    "stageurl": "https://stage.bat.com/science---research/world-class-science/sixty-years-of-science"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9EALSE",
    "stageurl": "https://stage.bat.com/sustainability---esg/a-sustainable-approach/corporate-social-investment?wcmmode=disabled"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO933JCA",
    "stageurl": "https://stage.bat.com/sustainability---esg/a-sustainable-approach/materiality"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOBMZH6K",
    "stageurl": "https://stage.bat.com/sustainability---esg/a-sustainable-approach/our-supporting-esg-priorities"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO933J8K",
    "stageurl": "https://stage.bat.com/sustainability---esg/a-sustainable-approach/stakeholder-engagement"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9DEM2S",
    "stageurl": "https://stage.bat.com/sustainability---esg/environment-and-climate/biodiversity-and-afforestation"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOC88FUS",
    "stageurl": "https://stage.bat.com/sustainability---esg/environment-and-climate/supply-chain-management"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9DFFY9",
    "stageurl": "https://stage.bat.com/sustainability---esg/governance---ethics"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOCS4KQT",
    "stageurl": "https://stage.bat.com/sustainability---esg/governance---ethics/ethics-and-integrity"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9EBFUZ",
    "stageurl": "https://stage.bat.com/sustainability---esg/governance---ethics/marketing-our-products-responsibly"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOCS4KX9",
    "stageurl": "https://stage.bat.com/sustainability---esg/governance---ethics/sustainability-governance"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO962HCD",
    "stageurl": "https://stage.bat.com/sustainability---esg/how-we-report"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO726NTL",
    "stageurl": "https://stage.bat.com/sustainability---esg/our-sustainability-agenda"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOBMZH5W",
    "stageurl": "https://stage.bat.com/sustainability---esg/reducing-the-health-impact-of-our-business"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO52APTT",
    "stageurl": "https://stage.bat.com/sustainability---esg/social-impact/farmer-livelihoods-and-sustainable-agriculture"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9DLL8D",
    "stageurl": "https://stage.bat.com/sustainability---esg/social-impact/health-and-safety"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DOAK8P7C",
    "stageurl": "https://stage.bat.com/sustainability---esg/social-impact/human-rights-and-modern-slavery"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9EAMH9",
    "stageurl": "https://stage.bat.com/who-we-are/our-corporate-governance/company-constitution"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9EAMFG",
    "stageurl": "https://stage.bat.com/who-we-are/our-corporate-governance/executive-directors--service-contracts"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9EAMHQ",
    "stageurl": "https://stage.bat.com/who-we-are/our-corporate-governance/policies--principles-and-standards"
  },
  {
    "baseurl": "https://bat.com/group/sites/uk__crhjsy.nsf/vwPagesWebLive/DO5TXKRH",
    "stageurl": "https://stage.bat.com/who-we-are/our-corporate-governance/standards-of-business-conduct"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO83TNQB",
    "stageurl": "https://stage.bat.com/who-we-are/our-corporate-governance/the-board"
  },
  {
    "baseurl": "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9DKH5M",
    "stageurl": "https://stage.bat.com/who-we-are/our-people/career-development"
  }
]; 
 export default urlsToTest;