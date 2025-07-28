import { Box, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
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

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

	return (
		<Box sx={{ width: "100%", margin: "0 auto" }}>
			<Carousel
				swipeable={true}
				showDots={false}
				infinite={true}
				responsive={responsive}
				autoPlay={true}
				autoPlaySpeed={3500}
				removeArrowOnDeviceType={["mobile", "tablet"]}
			>
				{list.map((item, index) => (
					<div>
						<Image src={item.img} />
						<Box sx={{ position: "absolute", top: "10px", left: "20px" }}>
							<Typography variant={matches ? "h2" : "h5"}>
								{item.head}
							</Typography>
							<Typography
								variant="body1"
								sx={{ fontSize: matches ? "25px" : "12px" }}
							>
								{item.desc}
							</Typography>
						</Box>
					</div>
				))}
			</Carousel>
		</Box>
	);
};

export default Portfolio;
