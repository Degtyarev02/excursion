import { Box, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Carousel from "react-multi-carousel";
import ExcursionItem from "./ExcursionItem";

const ExcursionCarousel = ({ list }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const reversedList = [...list].reverse();

	return (
		<Grid
			container
			sx={{
				width: "100%",
				margin: "0 auto",
				background: theme.palette.background.secondary,
				backgroundRepeat: "no-repeat",
				borderRadius: "10px",
				padding: "10px",
				alignItems: "flex-start",
			}}
			spacing={2}
		>
			{reversedList.map((info, index) => (
				<Grid item size={{ xs: 12, lg: 6 }} key={index}>
					<Box
						sx={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<ExcursionItem info={info} />
					</Box>
				</Grid>
			))}
		</Grid>
	);
};

export default ExcursionCarousel;
