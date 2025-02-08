import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/Card';
import Button from '../components/Button';
import '../pages/InvestmentOption.css';
import bondpic from "../images/bond.jpg"
import cryptocurrencypic from "../images/cryptocurrency.jpg"
import mutualfundpic from "../images/mutualfund.jpg"
import savingspic from "../images/savings.jpg"
import stockpic from "../images/stock.jpg"
import realestatepic from "../images/real estate.jpg"
const investmentData = {
  'mutual-funds': {
    title: 'Mutual Funds',
    image: mutualfundpic,
    risks: [
      'Market Risk – Investment value fluctuates.',
      'Credit Risk – Companies may fail to repay debts.',
      'Liquidity Risk – Some funds are difficult to sell quickly.',
      'Interest Rate Risk – Changing rates impact bond funds.',
      'Inflation Risk – Returns may not keep up with rising prices.',
      'Expense Ratio – High fees can reduce earnings.',
      'Manager Decisions – Fund success depends on management choices.'
    ],
    howToStart: [
      'Set Your Goal – Define your investment purpose.',
      'Understand Your Risk Tolerance – Choose a fund accordingly.',
      'Choose the Right Fund – Pick between equity, debt, or hybrid funds.',
      'Select a Fund House – Research reputable mutual fund companies.',
      'Open an Investment Account – Sign up with a broker.',
      'Start with SIP or Lump Sum – Begin investing.',
      'Monitor Your Investment – Track performance and adjust as needed.'
    ],
    dos: [
      'Research the fund’s past performance and management team.',
      'Diversify investments to reduce risk.',
      'Invest for the long term to maximize returns.',
      'Monitor your portfolio regularly and rebalance if needed.',
      'Consider tax implications before withdrawing money.',
      'Read all the fund details before investing.'
    ],
    donts: [
      'Don’t invest without understanding the risks.',
      'Don’t rely only on past performance.',
      'Don’t panic and withdraw money during market dips.',
      'Don’t ignore expense ratios and hidden fees.',
      'Don’t put all your money into a single fund; diversify.'
    ]
  },
  'real-estate': {
    title: 'Real Estate',
    image: realestatepic,
    risks: [
      'Market Risk – Property values fluctuate.',
      'Liquidity Risk – Selling a property takes time.',
      'Interest Rate Risk – Higher rates increase loan costs.',
      'Legal & Regulatory Risk – Zoning laws and tax changes impact value.',
      'Tenant & Vacancy Risk – Rental income isn’t always guaranteed.',
      'Location Risk – Poor area development can lower property value.'
    ],
    howToStart: [
      'Set Your Budget – Determine your investment amount.',
      'Research the Market – Study property trends.',
      'Choose the Right Property – Residential, commercial, or rental.',
      'Secure Financing – Explore mortgage options.',
      'Legal Checks – Verify property documents.',
      'Make the Purchase – Negotiate and finalize.',
      'Manage & Grow – Maintain property, explore rental or resale options.'
    ],
    dos: [
      'Research location and future growth potential.',
      'Have a financial plan and emergency fund.',
      'Work with real estate professionals.',
      'Inspect property before buying.',
      'Stay updated on market trends.'
    ],
    donts: [
      'Don’t rush into a deal without research.',
      'Don’t ignore hidden costs.',
      'Don’t rely solely on loans.',
      'Don’t skip legal paperwork.',
      'Don’t invest all money in one property; diversify.'
    ]
  },
  'cryptocurrencies': {
    title: 'Cryptocurrencies',
    image: cryptocurrencypic,
    risks: [
      'Market Volatility – Prices can rise or fall drastically in minutes.',
      'Security Threats – Hacks, scams, and frauds are common in the crypto space.',
      'Regulatory Uncertainty – Government rules can impact crypto investments.',
      'Liquidity Risk – Some cryptocurrencies may be hard to sell quickly.',
      'Loss of Access – Losing your private keys means losing your funds permanently.',
      'Scams & Fraud – Fake projects and Ponzi schemes can lead to losses.',
      'Technology Risk – Bugs, glitches, or blockchain failures can affect transactions.'
    ],
    howToStart: [
      'Do Your Research – Understand the market and different types of cryptocurrencies.',
      'Choose a Reliable Exchange – Pick a trusted platform to buy, sell, and store crypto.',
      'Set a Budget – Only invest what you can afford to lose, as crypto can be volatile.',
      'Secure Your Investments – Use a hardware wallet for safe storage of your crypto.',
      'Diversify Your Portfolio – Spread your investments across different cryptocurrencies.',
      'Monitor Market Trends – Stay updated on news and price movements.',
      'Stay Legal – Understand your country’s regulations on cryptocurrency trading.'
    ],
    dos: [
      'Research before investing in any cryptocurrency.',
      'Use secure wallets and enable two-factor authentication.',
      'Start with small investments if you are a beginner.',
      'Diversify across multiple cryptocurrencies.',
      'Keep track of market trends and updates.'
    ],
    donts: [
      'Don’t invest in unknown or untrusted coins.',
      'Don’t ignore the risks involved; crypto can be unpredictable.',
      'Don’t leave your crypto on exchanges for too long.',
      'Don’t rely on tips or rumors for investment decisions.',
      'Don’t invest more than you can afford to lose.'
    ]
  },
  'bonds': {
    title: 'Bonds',
    image: bondpic,
    risks: [
      'Interest Rate Risk – When interest rates rise, bond prices tend to fall.',
      'Credit Risk – If the bond issuer defaults, you may lose your investment.',
      'Inflation Risk – Inflation can erode the value of bond returns over time.',
      'Liquidity Risk – Some bonds are harder to sell before maturity, especially in a tough market.',
      'Call Risk – Some bonds can be called (repaid early) by the issuer, which may not be in your favor if interest rates drop.',
      'Reinvestment Risk – When bond coupons are paid, you may not be able to reinvest them at the same interest rate.'
    ],
    howToStart: ['1.	Set Your Investment Goals – Determine your income needs and risk tolerance.',
'2.	Research Bond Types – Learn about government, corporate, and municipal bonds.',
'3.	Choose a Broker or Platform – Find a reliable brokerage to buy bonds.',
'4.	Start with Bonds You Understand – Begin with low-risk bonds, like government bonds, if you are new.',
'5.	Review Credit Ratings – Check the bond issuer’s credit rating to assess risk.',
'6.	Diversify Your Bond Portfolio – Spread your investment across different types of bonds to reduce risk.',
'7.	Monitor Your Bonds – Track bond performance and interest rate changes.'],
    dos: ['✔ Research the bond issuer’s financial health.',
      '✔ Understand the bond’s terms, including interest rates and maturity date.',
      '✔ Diversify by holding different types of bonds.',
      '✔ Consider bonds that match your investment horizon.',
      '✔ Stay updated on interest rate trends and inflation',
      ],
    donts: ['✘ Don’t invest solely in high-risk bonds for higher returns.',
      '✘ Don’t ignore bond ratings – they help you understand the issuer’s creditworthiness.',
      '✘ Don’t forget to account for inflation when considering bond returns.',
      '✘ Don’t put all your money into long-term bonds if you need liquidity.',
      '✘ Don’t neglect your portfolio – review bond performance regularly.',
      ]
  },
  'savings-plans': {
    title: 'Savings Plans',
    image: savingspic,
    risks: [
      'Inflation Risk – The interest earned on savings may not keep up with inflation.',
      'Liquidity Risk – Some savings plans may lock your money for a fixed period.',
      'Interest Rate Risk – Interest rates may fluctuate, affecting returns.',
      'Bank/Institution Risk – If the financial institution goes bankrupt, you may risk losing your savings.',
      'Taxation Risk – Interest earned might be taxed, reducing your overall returns.'
    ],
    howToStart: ['1.	Set Your Financial Goals – Define your savings purpose (emergency fund, future expenses, etc.).',
      ' 2.	Research Savings Plans – Look for plans with competitive interest rates, good terms, and low fees.',
       '3.	Choose the Right Plan – Decide between regular savings accounts, fixed deposits, or high-yield options based on your needs.',
       '4.	Set a Budget – Determine how much you can consistently save each month.',
       '5.	Open the Account – Go to your bank or financial institution and set up the savings plan.',
       '6.	Automate Contributions – Set up automatic transfers to ensure you save regularly.',
       '7.	Monitor Your Plan – Keep track of your savings progress and adjust contributions if necessary.',
       ],
     dos: ['✔ Compare interest rates and terms before choosing a savings plan.',
       '✔ Set clear savings goals and review them regularly.',
       '✔ Start saving as early as possible to maximize your returns.',
       '✔ Automate your savings to build consistency.',
       '✔ Keep your emergency fund separate from your savings plan.'
       ],
     donts: ['✘ Don’t lock all your savings in long-term plans if you need quick access.',
       '✘ Don’t neglect to check for hidden fees or charges in the plan.',
       '✘ Don’t stop saving after reaching a short-term goal—continue to grow your savings.',
       '✘ Don’t ignore inflation—make sure your returns outpace it.',
       '✘ Don’t invest in savings plans with too high a risk for your financial situation.',
       'Smart savings start with planning and consistency!'
       ]
  },
  'stocks': {
    title: 'Stocks',
    image: stockpic,
    risks: [
      'Market Volatility – Stock prices can fluctuate drastically due to market conditions.',
      'Company-Specific Risk – A company’s performance can affect its stock price.',
      'Liquidity Risk – Some stocks may be hard to sell quickly.',
      'Interest Rate Risk – Rising interest rates can negatively impact stock prices.',
      'Inflation Risk – Inflation can erode the purchasing power of your returns.',
      'Dividends Risk – Companies may reduce or eliminate dividend payments.',
      'Geopolitical Risk – Political events can impact global markets and stock prices.'
    ],
    howToStart: ['1.	Set Your Investment Goals – Define your objectives, such as growth, income, or a combination of both.',
      ' 2. Do Your Research – Study different stocks, industries, and companies to understand what you’re investing in.',
       '3.	Choose a Brokerage Account – Open an account with a trusted brokerage platform to buy and sell stocks.',
       '4.	Start Small – Begin with a small amount to learn the ropes and minimize risk.',
'5.	Diversify Your Portfolio – Spread your investments across different sectors to reduce risk.',
'6.	Monitor Your Investments – Keep track of stock performance and news that may impact your holdings.',
'7.	Think Long-Term – Avoid reacting to short-term market movements; focus on long-term growth.'
],
     dos: [' Research stocks and their market potential before investing.',
      '✔ Diversify your portfolio to manage risk.',
      '✔ Set a budget and stick to it.',
      '✔ Be patient, focusing on long-term growth.',
      '✔ Reinvest dividends to boost returns over time.'
      
       ],
     donts: ['✘ Don’t invest in stocks based solely on tips or rumors.',
      '✘ Don’t put all your money in one stock or sector.',
      '✘ Don’t panic during market dips—think long-term.',
      '✘ Don’t ignore your risk tolerance—invest within your comfort zone.',
      '✘ Don’t chase quick gains—stay disciplined and avoid impulsive decisions. '
       ]
    
  }
};

const InvestmentOptions = () => {
  const options = Object.keys(investmentData);
  return (
    <div className='container-io'>
      {options.map((option, index) => (
        <Card key={index} className='card-io'>
          <CardContent className='card-content-io'>
            <div className='investment-header'>
              <h3 className='investment-title'>{investmentData[option].title}</h3>
              <img src={investmentData[option].image} alt={investmentData[option].title} className='investment-image' />
            </div>
            <Link to={`/investment-options/${option}`} className='link-io'>
              <Button className='button-io'><div className='link-io'>Learn More</div></Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default InvestmentOptions;

/* CSS for styling images and links properly */

const styles = `
.container-io {
  max-width: 80rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
}

.investment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.investment-title {
  font-size: 1.8rem;
  font-weight: bold;
}

.card-io {
  width: 28rem;
  height: 12rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 4px 12px #00000014;
  border-radius: 1rem;
  background-color: white;
}

.investment-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  margin-left: 15px;
}

.button-io {
  display: block;
  margin-top: 10px;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.button-io:hover {
  background-color: #0056b3;
}

.link-io {
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  color: #007bff;
}

.link-io:hover {
  color: #0056b3;
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
