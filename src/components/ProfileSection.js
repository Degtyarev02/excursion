import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { excursions, portfolio, reviews } from "../utils/consts";
import ExcursionCarousel from "./ExcursionCarousel";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import ProfileInfo from "./ProfileInfo";
import ReviewCarousel from "./ReviewCarousel";
import Sale from "./Sale";

const ProfileSection = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const { t } = useTranslation();

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
			spacing={matches ? 4 : 2}
			sx={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Grid size={{ xs: 12 }}>
				<Portfolio list={portfolio} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Headers textKey={"headers.about"} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<ProfileInfo />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Headers textKey={"headers.excursions"} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<ExcursionCarousel list={excursions} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Headers textKey={"headers.special_conditions"} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Sale />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Headers textKey={"headers.reviews"} />
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
