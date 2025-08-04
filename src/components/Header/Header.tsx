import React from "react";
import { Box, Typography } from "@mui/material";
import { Logo, StyledAppBar, StyledToolbar } from "./styled";
import LogoGutu from "./LogoGutu";

const Header: React.FC = () => {
	return (
		<StyledAppBar>
			<StyledToolbar>
				<a href="#home">
					<LogoGutu />
				</a>
				<Box>
					<Typography
						sx={{
							fontFamily: "Bebas Neue",
							fontSize: "1.5rem",
						}}
					>
						Based in Berlin - Germany
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{
							fontFamily: "Bebas Neue",
							fontSize: "1.5rem",
						}}
					>
						Currently available for new projects
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{
							fontFamily: "Bebas Neue",
							fontSize: "1.5rem",
						}}
					>
						Check more <a href="#aboutme">About Me</a>,{" "}
						<a href="#skills">Skills</a>, <a href="#experience">Experience</a>,{" "}
						<a href="#contact">Contact</a>
						{/* , and my{" "} */}
						{/* <a href="#hobbies">Hobbies</a> */}
						{/* TODO: Add Hobbies link to the About Me TEXT */}
					</Typography>
				</Box>
			</StyledToolbar>
		</StyledAppBar>
	);
};

export default Header;
