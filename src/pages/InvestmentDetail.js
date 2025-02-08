import React from 'react';
import { useParams } from 'react-router-dom';
import investmentData from '../data/investmenData'; // Import data
import './InvestmentDetail.css';

const InvestmentDetail = () => {
  const { optionId } = useParams();
  const data = investmentData[optionId] || {};

  return (
    <div>
      <h2 className="text-3xl font-bold text-purple-700">{data.title}</h2>
      <div className='box-id'>
        <section className="mt-4-id">
          <h3 className="text-xl font-semibold text-purple-600">Understanding the Risks</h3>
          <ul>{data.risks?.map((risk, index) => <li key={index}>{risk}</li>)}</ul>
        </section>
        <section className="mt-4-id">
          <h3 className="text-xl font-semibold text-purple-600">How to Start</h3>
          <ul>{data.howToStart?.map((step, index) => <li key={index}>{step}</li>)}</ul>
        </section>
        <section className="mt-4-id">
          <h3 className="text-xl font-semibold text-purple-600">Dos and Don'ts</h3>
          <div className='grid-cols-2'>
            <div>
              <h4 className="font-bold">✅ Dos:</h4>
              <ul>{data.dos?.map((doItem, index) => <li key={index}>{doItem}</li>)}</ul>
            </div>
            <div>
              <h4 className="font-bold">❌ Don'ts:</h4>
              <ul>{data.donts?.map((dontItem, index) => <li key={index}>{dontItem}</li>)}</ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestmentDetail;
