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
				{quotesData.map((quote, index) => {
					const isEven = index % 2 === 0;
					return (
						<BorderBox period={quote.company} key={index} isEven={isEven}>
							<QuoteCard
								key={index}
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
		</QuotesContainer>
	);
};

export default Quotes;
