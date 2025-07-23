import {
	Box,
	Button,
	Divider,
	Grid,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";

const ExcursionItem = ({ info }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("lg"));
	const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const displayText = expanded
		? info.desc
		: info.desc.length > 150
		? `${info.desc.substring(0, 150)}...`
		: info.desc;

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		maxHeight: "330px",
		maxWidth: matchesMd ? "330px" : "auto",
		objectFit: "cover",
	});

	return (
		<Grid
			container
			spacing={3}
			margin={"20px"}
		>
			<Grid item size={{ xs: 12 , md: 5}}>
				<Image src={info.img} />
			</Grid>
			<Grid item container size={{ xs: 12, md: 7 }}>
				<Grid item size={{ xs: 12 }}>
					<Typography marginBottom={"6px"} variant={matches ? "h4" : "h5"}>
						{info.name}
					</Typography>
					<Divider />
					<Typography variant="body1">
						Возрастной рейтинг: {info.age}
					</Typography>
					<Typography variant="body1">Длительность: {info.time}</Typography>
					<Typography marginBottom={"6px"} variant="body1">
						Маршрут: {info.route}
					</Typography>
					<Divider />
					<Box>
						<Typography variant="body">{displayText} </Typography>
						{info.desc.length > 150 && (
							<Button
								onClick={toggleExpand}
								sx={{
									color: theme.palette.secondary.main,
									textTransform: "none",
									padding: 0,
									minWidth: "auto",
									"&:hover": {
										backgroundColor: "transparent",
										textDecoration: "underline",
									},
								}}
							>
								{expanded ? "Свернуть" : "Ещё"}
							</Button>
						)}
					</Box>
				</Grid>
				<Grid container item size={{ xs: 12 }} alignItems={"end"}>
					<Button href={info.url} variant="contained" disableElevation color="secondary" sx={{ width: "100%", height: "fit-content" }}>
						Забронировать
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ExcursionItem;
