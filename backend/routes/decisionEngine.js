const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  let preAssessment = 20;  //default
  let profitIn12Months = req.body.sheet
    .slice(0, 12)
    .reduce(function(acc, curr) {
        acc = acc + curr.profitOrLoss;
        return acc;
    }, 0);

  let assetsMonthlyAverage =
    req.body.sheet
      .slice(0, 12)
      .reduce(function(acc, curr) {
        acc = acc + curr.assetsValue;
        return acc;
      } , 0) / 12;

  if (profitIn12Months > 0) {
    preAssessment = 60;
  }

  if (assetsMonthlyAverage > req.body.loanAmount) {
    preAssessment = 100;
  }

  const loanOutcome = {
    tokenId: req.body.tokenId,
    outcome: 'approved',
    approvedAmount: (req.body.loanAmount * preAssessment) / 100,
    approvedTerm: '1 year',
    approvedInterestRate: '5%',
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(loanOutcome));
});

module.exports = router;
