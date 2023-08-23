import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuotesContainer = styled.div`
display: flex;
margin-right: auto;
margin-left: auto;
margin-top: 15%;
width: 50%;
border-radius: 10%;
border: 1px solid;
font-family: 'Mukta', sans-serif;
background-color: #14a76c;
justify-content: center;
align-items: center;
`;

const StyledList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`;

const StyledListItem = styled.li`
margin-left: 0;
color: #fff;
width: 70%;
text-align: center;
`;

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
    <QuotesContainer>
      <StyledList>
        {data.map((item) => (
          <StyledListItem key={item.id}>{item.quote}</StyledListItem>
        ))}
      </StyledList>
    </QuotesContainer>
  );
}

export default Quotes;
