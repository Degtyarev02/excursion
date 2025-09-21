import {
	Box,
	styled,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Image = styled("img")({
	width: "100%",
	height: "100%",
	objectFit: "fill",
});

const Portfolio = ({ list }) => {

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const { t } = useTranslation();

	const responsive = {
		lgDesktop: {
			breakpoint: { max: 3000, min: 2048 },
			items: 2,
		},
		desktop: {
			breakpoint: { max: 2048, min: 1024 },
			items: 2,
		},
		tablet: {
			breakpoint: { max: 1024, min: 700 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 700, min: 0 },
			items: 1,
		},
	};

	return (
		<Box sx={{ width: "100%", margin: "0 auto" }}>
			<Carousel
				swipeable={true}
				showDots={false}
				infinite={true}
				responsive={responsive}
				autoPlay={false}
			>
				{list.map((item, index) => (
					<div>
						<Image src={item.img} />
						<Box sx={{ position: "absolute", top: "10px", left: "20px" }}>
							<Typography
								variant={matches ? "h2" : "h5"}
								sx={{ color: item.color }}
							>
								{t(item.head)}
							</Typography>
							<Typography
								variant="body1"
								sx={{ fontSize: matches ? "25px" : "12px", color: item.color }}
							>
								{t(item.desc)}
							</Typography>
						</Box>
					</div>
				))}
			</Carousel>
		</Box>
	);
};

export default Portfolio;
