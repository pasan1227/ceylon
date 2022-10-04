import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content='{description}' />
      <meta name='keywords' content='{keywords}' />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Ceylon',
  description: 'Quality products for the best prices',
  keywords: 'Food Items, Quality Products',
};

export default Meta;
