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
		maxHeight: "350px",
		maxWidth: matchesMd ? "330px" : "auto",
		objectFit: "cover",
		borderRadius: "10px",
	});

	return (
		<Box
			sx={{
				height: "100%",
				minHeight: "350px",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Grid container spacing={matchesMd ? 2 : 3} sx={{ flexGrow: 1 }}>
				<Grid item size={{ xs: 12, md: 4, lg: 5 }} position={"relative"}>
					<Image src={info.img} />

					{info.isNew && (
						<Typography
							sx={{
								padding: "5px",
								border: "2px solid red",
								borderRadius: "10px",
								position: "absolute",
								top: "10px",
								left: "10px",
								color: "red",
								fontWeight: "bold",
							}}
						>
							{t("excursions.isNew")}
						</Typography>
					)}
				</Grid>
				<Grid
					item
					size={{ xs: 12, md: 8, lg: 7 }}
					display={"flex"}
					flexDirection={"column"}
					sx={{ flexGrow: 1 }}
				>
					<Box sx={{ flexGrow: 1 }}>
						<Typography marginBottom={"4px"} variant={matches ? "h4" : "h5"}>
							{t(info.name)}
						</Typography>
						<Grid item>
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
						</Grid>
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
					</Box>

					{/* Кнопка всегда внизу своей карточки */}
					<Button
						href={info.url}
						variant="contained"
						disableElevation
						color="secondary"
						sx={{
							width: "100%",
							height: "fit-content",
							marginTop: "16px",
							flexShrink: 0,
						}}
					>
						{t("excursions.book")}
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ExcursionItem;
