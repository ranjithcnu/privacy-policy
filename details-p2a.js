window.DETAILS = Object.assign(window.DETAILS || {}, {
  "num_system": {
    "intro": "Number System is the foundation of arithmetic. Many apparently different questions reduce to four ideas: divisibility, factors/multiples, remainders and repeating digit patterns. The goal is to recognise which structure is present before doing calculation.",
    "concepts": [
      {"title":"Factors, multiples, HCF and LCM","body":"A factor divides a number exactly; a multiple is produced by multiplying it. HCF captures the greatest common divisor, while LCM is the smallest number divisible by all given numbers. In grouping problems HCF often appears; in “when will events meet again?” problems LCM often appears."},
      {"title":"Remainders are modular arithmetic","body":"Instead of carrying a huge number, keep only the remainder after each operation. For example, to find a large power modulo 7, reduce the base and use the repeating remainder cycle."},
      {"title":"Unit-digit cycles save time","body":"Last digits of powers repeat. Powers of 2 cycle 2,4,8,6; powers of 3 cycle 3,9,7,1. Reduce the exponent by cycle length instead of computing the actual power."}
    ],
    "worked":{"problem":"Find the unit digit of 7^103.","steps":["Powers of 7 cycle: 7, 9, 3, 1. Cycle length = 4.","103 mod 4 = 3.","Take the third number in the cycle."],"result":"Unit digit = 3."},
    "memory":["HCF for maximum equal grouping; LCM for earliest common repetition.","Huge power? Look for a cycle before calculating."],
    "ready":["You can decide HCF vs LCM from wording.","You know divisibility tests for 2,3,4,5,6,8,9,10,11."]
  },
  "simple_interest": {
    "intro":"Simple Interest assumes interest is calculated only on the original principal. Because the base does not change, interest grows linearly with principal, rate and time.",
    "concepts":[
      {"title":"Understand the variables","body":"P is principal, R is annual percentage rate, T is time in years. SI = P×R×T/100. If the question gives months, convert them to years before substitution."},
      {"title":"Direct proportionality","body":"For fixed rate and time, doubling the principal doubles interest. For fixed principal and rate, doubling time doubles interest. This lets you solve many comparison questions without full calculation."},
      {"title":"Amount includes principal","body":"Interest and amount are different. Amount = Principal + Interest. Many easy marks are lost by returning SI when the question asks for total amount."}
    ],
    "worked":{"problem":"₹8,000 at 7.5% simple interest for 18 months. Find SI.","steps":["18 months = 1.5 years.","SI = 8000×7.5×1.5/100.","7.5% of 8000 = 600; for 1.5 years = 900."],"result":"SI = ₹900."},
    "memory":["Convert time first.","Ask: interest only or amount?"],
    "ready":["You can rearrange the formula to find P, R or T.","You can solve proportional-change questions mentally."]
  },
  "compound_interest": {
    "intro":"Compound Interest changes the base after every compounding period: interest earns further interest. Thinking in growth factors is faster and safer than repeatedly calculating yearly interest.",
    "concepts":[
      {"title":"Use the multiplier model","body":"A rise of r% means multiply by (1+r/100). Over n annual periods, Amount = P(1+r/100)^n. This same multiplier idea also solves population growth and depreciation-style questions."},
      {"title":"Successive changes multiply","body":"Two percentage changes should not normally be added directly because the second acts on a changed base. +20% followed by −20% gives 1.2×0.8 = 0.96, a net 4% decrease."},
      {"title":"Difference between CI and SI","body":"For two years at the same annual rate, the extra CI over SI equals interest on the first year’s interest: P(r/100)^2. This is a useful direct shortcut."}
    ],
    "worked":{"problem":"₹10,000 at 10% compounded annually for 2 years.","steps":["Growth factor = 1.10.","Amount = 10000×1.1×1.1 = 12100.","CI = 12100−10000."],"result":"CI = ₹2,100."},
    "memory":["Percentage change = multiplier.","Second-year interest is on the increased amount."],
    "ready":["You can distinguish SI and CI immediately.","You can handle successive increase/decrease without adding percentages."]
  },
  "ratio": {
    "intro":"Ratio compares quantities using relative parts. Most ratio problems become easy once every quantity is converted to the same unit and represented as multiples of a common variable.",
    "concepts":[
      {"title":"Represent quantities as parts","body":"If A:B = 3:5, write A=3k and B=5k. If their total is known, 8k equals the total. This single-variable representation prevents unnecessary equations."},
      {"title":"Combine ratios through a common term","body":"If A:B=2:3 and B:C=4:5, make the B values equal before joining the ratios. The combined ratio is not simply 2:3:5."},
      {"title":"Direct and inverse proportion","body":"In direct proportion both quantities move in the same ratio. In inverse proportion their product remains constant, as with workers and time for a fixed job under equal efficiency."}
    ],
    "worked":{"problem":"Divide ₹1,440 in the ratio 5:7.","steps":["Total parts = 12.","One part = 1440/12 = 120.","Shares = 5×120 and 7×120."],"result":"₹600 and ₹840."},
    "memory":["Same units before ratio.","a:b means ak:bk."],
    "ready":["You can combine two linked ratios.","You can identify inverse proportion from context."]
  },
  "average": {
    "intro":"Average is a compact way of representing a total: Average × Number of items = Total. Most exam shortcuts come from manipulating totals rather than repeatedly adding all observations.",
    "concepts":[
      {"title":"Think in totals","body":"If the average of 20 values is 35, their total is 700. If one value changes, update the total and divide again. This is faster than reconstructing all 20 values."},
      {"title":"Replacement shortcut","body":"When one observation x is replaced by y among n items, average changes by (y−x)/n. This gives an immediate answer in many age/score replacement questions."},
      {"title":"Combined average is weighted","body":"Two group averages cannot be simply averaged unless group sizes are equal. Convert each group to total, add totals, then divide by combined count."}
    ],
    "worked":{"problem":"Average of 10 numbers is 42. One number 30 is replaced by 50. New average?","steps":["Original total = 10×42 = 420.","Total increases by 20.","New total = 440; divide by 10."],"result":"New average = 44."},
    "memory":["Average × count = total.","Replacement changes total only by the difference."],
    "ready":["You can solve combined averages using weights.","You do not average averages blindly."]
  },
  "percentage": {
    "intro":"Percentage is a ratio out of 100, but the fastest exam approach is to convert common percentages to fractions or multipliers. This avoids slow decimal work and makes successive changes intuitive.",
    "concepts":[
      {"title":"Fraction-percentage equivalence","body":"Memorise common pairs: 50%=1/2, 25%=1/4, 20%=1/5, 12.5%=1/8, 16⅔%=1/6, 33⅓%=1/3, 66⅔%=2/3. These convert many calculations into simple division."},
      {"title":"Base matters","body":"A percentage increase is measured on the original base; a later decrease is measured on the new base. That is why +20% and −20% do not cancel."},
      {"title":"Reverse percentage","body":"If a value after a 20% increase is 120, the original is 120/1.2 = 100. Subtracting 20% from 120 would be wrong because 20% was applied to the original, not the final value."}
    ],
    "worked":{"problem":"Price increases by 25% and then decreases by 20%. Net change?","steps":["Use multipliers: 1.25×0.80 = 1.00.","Final equals original."],"result":"No net percentage change."},
    "memory":["x% of y = y% of x.","Reverse change = divide by multiplier."],
    "ready":["You can switch between fraction and percentage mentally.","You can solve successive changes without assuming they cancel."]
  },
  "profit_loss": {
    "intro":"Profit/Loss problems are percentage problems with named bases. The critical skill is to keep Cost Price (CP), Selling Price (SP) and Marked Price (MP) separate.",
    "concepts":[
      {"title":"Profit and loss use cost price","body":"Profit = SP−CP and Loss = CP−SP. Unless otherwise stated, profit% and loss% are calculated on CP, not SP."},
      {"title":"Discount uses marked price","body":"Discount = MP−SP and discount% is based on MP. A question can contain both discount and profit, which means two different percentage bases are present."},
      {"title":"Use multipliers for chains","body":"If MP is 40% above CP and discount is 10%, take CP=100 → MP=140 → SP=126. Profit is then 26% on CP."}
    ],
    "worked":{"problem":"CP ₹800, marked 25% above CP, sold at 10% discount. Find SP and profit%.","steps":["MP = 800×1.25 = 1000.","SP = 1000×0.90 = 900.","Profit = 100; profit% = 100/800×100."],"result":"SP ₹900; profit 12.5%."},
    "memory":["Profit/loss base = CP. Discount base = MP.","When only percentages matter, assume CP=100."],
    "ready":["You can solve a markup-discount-profit chain without mixing bases.","You distinguish discount from loss."]
  },
  "time_work": {
    "intro":"Time & Work is easiest when work is treated as a quantity and each worker has a rate. The famous LCM method avoids fractions by choosing a convenient total amount of work.",
    "concepts":[
      {"title":"Rate is inverse of time","body":"If A finishes a job in 10 days, A’s rate is 1/10 job per day. A faster worker has a larger rate and therefore needs less time."},
      {"title":"LCM work method","body":"If A takes 12 days and B takes 18 days, choose total work = LCM(12,18)=36 units. Then A does 3 units/day and B does 2 units/day. Together they do 5 units/day."},
      {"title":"Split changing-workforce problems into phases","body":"When someone joins or leaves, calculate work completed in the first phase, subtract from total, then solve the remaining phase with the new combined rate."}
    ],
    "worked":{"problem":"A completes a job in 12 days, B in 18 days. Together?","steps":["Take total work = 36 units.","A rate=3 units/day, B rate=2 units/day.","Together rate=5 units/day; time=36/5 days."],"result":"7.2 days."},
    "memory":["Efficiency ∝ 1/time.","Add rates, not days."],
    "ready":["You can switch between fraction-rate and LCM-unit methods.","You can handle join/leave problems in phases."]
  },
  "work_wages": {
    "intro":"Work & Wages combines productivity with proportional sharing. Wages should be divided in the ratio of actual work contributed, which depends on efficiency and time.",
    "concepts":[
      {"title":"Work contribution","body":"For constant efficiency, work ∝ time. If efficiencies differ, work ∝ efficiency×time. This product gives the ratio in which wages should be split."},
      {"title":"Do not confuse attendance with contribution","body":"Two workers may work the same number of days but deserve different shares if one is more efficient. Likewise, a more efficient worker working fewer days can still contribute the same total work."}
    ],
    "worked":{"problem":"A is twice as efficient as B. A works 6 days, B works 9 days. Divide ₹2,100.","steps":["Take B efficiency=1, A=2.","Work contributions: A=2×6=12, B=1×9=9.","Ratio=12:9=4:3.","₹2,100 / 7 = ₹300 per part."],"result":"A ₹1,200; B ₹900."},
    "memory":["Wages follow work, not merely time.","Work = efficiency × time."],
    "ready":["You can build a quick worker-efficiency-time table.","You reduce the work ratio before dividing money."]
  },
  "time_distance": {
    "intro":"Time, Speed and Distance questions become much easier when you first decide whether the problem is ordinary motion, relative motion, average speed or a train/length problem.",
    "concepts":[
      {"title":"Core relation","body":"Distance = Speed×Time. Keep units consistent. The standard conversion is km/h to m/s ×5/18, and m/s to km/h ×18/5."},
      {"title":"Relative speed","body":"For objects moving toward each other, add speeds. For the same direction, subtract speeds. Then use relative distance divided by relative speed."},
      {"title":"Average speed depends on time or distance","body":"For equal distances at speeds x and y, average speed is 2xy/(x+y), not (x+y)/2. The simple mean works only for equal time intervals."}
    ],
    "worked":{"problem":"A travels 60 km at 30 km/h and 60 km at 60 km/h. Average speed?","steps":["Times: 2 h and 1 h.","Total distance=120 km, total time=3 h.","Average=120/3."],"result":"40 km/h, not 45 km/h."},
    "memory":["Equal distance → harmonic-style shortcut 2xy/(x+y).","Same direction subtract; opposite direction add."],
    "ready":["You convert units without hesitation.","You identify whether average is based on equal time or equal distance."]
  },
  "clocks_calendars": {
    "intro":"Clock and calendar questions are cycle problems. Instead of counting everything, reduce movement to repeating cycles: 360°/12 hours for clocks and 7-day cycles for calendars.",
    "concepts":[
      {"title":"Clock-hand movement","body":"Hour hand moves 30° per hour plus 0.5° per minute. Minute hand moves 6° per minute. Their angle difference at H:M is |30H−5.5M|; if needed take the smaller of θ and 360−θ."},
      {"title":"Odd-day calendar method","body":"Weekdays repeat every 7 days. Reduce total extra days modulo 7. An ordinary year shifts by 1 day; a leap year shifts by 2."},
      {"title":"Leap-year rule","body":"Years divisible by 4 are usually leap years, but century years must be divisible by 400. Thus 2000 was leap; 1900 was not."}
    ],
    "worked":{"problem":"Angle between hands at 3:20?","steps":["Hour-hand position = 30×3 + 0.5×20 = 100°.","Minute-hand position = 6×20 = 120°.","Difference = 20°."],"result":"20°."},
    "memory":["Clock: 30H−5.5M.","Calendar: reduce by mod 7."],
    "ready":["You can apply the century leap rule.","You use odd days instead of day-by-day counting."]
  },
  "partnership": {
    "intro":"Partnership is a ratio problem where investment is weighted by time. Profit share reflects how much capital was exposed to the business and for how long.",
    "concepts":[
      {"title":"Capital-time product","body":"If capital remains constant, share ∝ Capital×Months. Two people investing equal money for different periods do not receive equal profit."},
      {"title":"Changing capital","body":"If someone adds or withdraws capital, split the year into periods and sum capital×time for each period before comparing with partners."}
    ],
    "worked":{"problem":"A invests ₹20,000 for 12 months; B invests ₹30,000 for 8 months. Profit ₹12,000.","steps":["A weight=240,000 capital-months.","B weight=240,000 capital-months.","Weights are equal."],"result":"Each receives ₹6,000."},
    "memory":["Profit share ∝ money × time.","Use the same time unit for everyone."],
    "ready":["You can handle mid-year investment changes.","You cancel common factors before large multiplication."]
  },
  "mensuration": {
    "intro":"Mensuration rewards formula familiarity, but most mistakes come from choosing the wrong dimension or unit. Before calculation, decide whether the question asks length, area, surface area or volume.",
    "concepts":[
      {"title":"Dimension check","body":"Perimeter is one-dimensional, area uses square units, and volume uses cubic units. A correct numerical value with the wrong dimension usually signals the wrong formula."},
      {"title":"Scaling rules","body":"If every length is multiplied by k, perimeter scales by k, area by k² and volume by k³. This can answer many comparison questions without using formulas."},
      {"title":"Composite figures","body":"Break an irregular figure into known shapes or use outer area minus inner area for paths, borders and hollow regions."}
    ],
    "worked":{"problem":"A square side doubles. How does area change?","steps":["Original area=s².","New side=2s, new area=(2s)²=4s²."],"result":"Area becomes four times."},
    "memory":["Length k → area k² → volume k³.","Write units before final answer."],
    "ready":["You know core formulas for rectangle, triangle, circle, cuboid, cylinder and sphere.","You can recognise outer-minus-inner problems."]
  }
});
