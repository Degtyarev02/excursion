import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { portfolio, reviews, excursions } from "../utils/consts";
import ExcursionItem from "./ExcursionItem";
import Portfolio from "./Portfolio";
import ProfileInfo from "./ProfileInfo";
import ReviewCarousel from "./ReviewCarousel";
import ExcursionCarousel from "./ExcursionCarousel";
import Footer from "./Footer";

const ProfileSection = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const Headers = (props) => (
		<Typography
			variant={matches ? "h3" : "h4"}
			sx={{
				textAlign: "center",
			}}
		>
			{props.text}
		</Typography>
	);

	return (
		<Grid
			container
			spacing={matches ? 6 : 2}
			sx={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Grid size={{ xs: 12 }}>
				<Portfolio list={portfolio} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Headers text={"Обо мне"} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<ProfileInfo />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Headers text={"Экскурсии"} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<ExcursionCarousel list={excursions} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Headers text={"Отзывы"} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<ReviewCarousel list={reviews} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Footer />
			</Grid>
		</Grid>
	);
};

export default ProfileSection;
