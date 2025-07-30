import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import React from "react";
import { quotesData } from "./quotesData";
import {
  BorderBox,
  QuoteCard,
  QuoteCompany,
  QuoteDescription,
  QuoteIcon,
  QuotesContainer,
  QuotesGrid,
  QuoteTitle,
} from "./styled";

const Quotes: React.FC = () => {
  return (
    <QuotesContainer maxWidth="lg" id="aboutme">
      <QuotesGrid>
        {quotesData.map((quote, index) => (
          <BorderBox period={quote.company}>
            <QuoteCard key={index} name={quote.collegueName}>
              <QuoteIcon>
                <FormatQuoteIcon />
              </QuoteIcon>
              <img
                src={quote.picture}
                alt={quote.collegueName}
                width="70px"
                height="auto"
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
              <QuoteTitle>{quote.collegueName}</QuoteTitle>
              <QuoteDescription>{quote.description}</QuoteDescription>
              <QuoteCompany> - {quote.company}</QuoteCompany>
            </QuoteCard>
          </BorderBox>
        ))}
      </QuotesGrid>
    </QuotesContainer>
  );
};

export default Quotes;
