import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { quotesData } from "./quotesData";
import HorizontalScrollContainer from "./HorizontalScrollContainer";
import SectionTitle from "../SectionTitle";
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
    <QuotesContainer id="aboutme">
      <SectionTitle title="About Me" />
      <HorizontalScrollContainer>
        <QuotesGrid>
          {quotesData.map((quote, index) => {
            const isEven = index % 2 === 0;
            return (
              <BorderBox key={index} period={quote.company} isEven={isEven}>
                <QuoteCard
                  name={quote.collegueName}
                  sx={{
                    marginTop: isEven ? "0" : "20px",
                  }}
                >
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
                      // filter: "grayscale(100%)",
                    }}
                  />
                  <QuoteTitle>{quote.collegueName}</QuoteTitle>
                  <QuoteDescription>{quote.description}</QuoteDescription>
                  <QuoteCompany> - {quote.company}</QuoteCompany>
                </QuoteCard>
              </BorderBox>
            );
          })}
        </QuotesGrid>
      </HorizontalScrollContainer>
    </QuotesContainer>
  );
};

export default Quotes;
