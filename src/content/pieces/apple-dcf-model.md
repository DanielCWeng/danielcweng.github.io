---
title: "Apple Inc. — Discounted Cash Flow Model"
date: 2026-07-03
tags: [equity, financials, DCF]
status: active
summary: "DCF valuation for Apple Inc., cross-checked with a reverse DCF against market-implied growth assumptions."
embed: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQo9tmJxd02aBQjydVTiXKdwDl9_5ACgS6VChUx2D6PepHprWEU1ZtBoEDDo5PDLOpTcnkejJPXUmgx/pubhtml?widget=true&headers=false"
---

## Notes on approach

Two of the most weighted assumptions in a DCF are also the hardest to pin down with any precision:

- **Terminal value.** Whether it's built off a perp growth rate or an exit multiple, the TV  accounts for 60–80% of the total in a model like this. A build that nails the explicit forecast years but eyeballs the terminal assumptions hasn't really said much about fair price.
- **Discount rate.** The rate sits in the denominator of every discounted cash flow, so small changes compound across the forecast. A shift of 1 percentage point in the discount rate can move the implied share price by a meaningfully larger margin than a percentage point. The further out the cash flow, the more leverage the rate has on it.

Because the output is this sensitive to both, a "clean" forward DCF built purely bottom-up can create false precision. A more useful cross-check is a **reverse DCF**. Instead of forecasting growth and discounting to arrive at a price, start from today's market price and solve backward for the growth (or margin, or multiple) assumptions the market is already implying. Then ask whether those implied assumptions look reasonable against history, guidance, and what other models are assuming for the same name etc.  Harnesses the wisdom, and sometimes the delusion from the crowd. 

FCF forecast still needs more work before I'd treat the output as more than directional.
