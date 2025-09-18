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
import { useTranslation } from "react-i18next";

const ExcursionItem = ({ info }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("lg"));
	const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
	const [expanded, setExpanded] = useState(false);

	const { t } = useTranslation();

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const displayText = expanded
		? t(info.desc)
		: t(info.desc).length > 150
		? `${t(info.desc).substring(0, 150)}...`
		: t(info.desc);

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		maxHeight: "330px",
		maxWidth: matchesMd ? "330px" : "auto",
		objectFit: "cover",
	});

	return (
		<Grid container spacing={3} margin={"20px"}>
			<Grid item size={{ xs: 12, md: 5 }}>
				<Image src={info.img} />
			</Grid>
			<Grid item container size={{ xs: 12, md: 7 }}>
				<Grid item size={{ xs: 12 }}>
					<Typography marginBottom={"4px"} variant={matches ? "h4" : "h5"}>
						{t(info.name)}
					</Typography>
					<Divider />
					<Typography variant="body1">
						{t("excursions.age_rating")} {t(info.age)}
					</Typography>
					<Typography variant="body1">
						{t("excursions.duration")} {t(info.time)}
					</Typography>
					<Typography marginBottom={"4px"} variant="body1">
						{t("excursions.route")} {t(info.route)}
					</Typography>
					<Typography
						marginBottom={"4px"}
						variant="body1"
						sx={{ lineHeight: 1.3 }}
					>
						{t("excursions.price")} {t(info.price)}
					</Typography>
					<Divider />
					<Box>
						<Typography variant="body">{displayText} </Typography>
						{t(info.desc).length > 150 && (
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
								{expanded ? t("excursions.collapse") : t("excursions.expand")}
							</Button>
						)}
					</Box>
				</Grid>
				<Grid container item size={{ xs: 12 }} alignItems={"end"}>
					<Button
						href={info.url}
						variant="contained"
						disableElevation
						color="secondary"
						sx={{ width: "100%", height: "fit-content" }}
					>
						{t("excursions.book")}
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ExcursionItem;
