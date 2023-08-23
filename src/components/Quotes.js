import React, { useState, useEffect } from 'react';
import './Quotes.css';

function Quotes() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: { 'X-Api-Key': 'DMiq4QkJzRcWgNKQNHabjw==cpjl2cUD0oZdq8TV' },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.quote}</li>
      ))}
    </ul>
  );
}

export default Quotes;
