import { useState } from "react";
import {
	Box,
	Divider,
	Grid,
	Typography,
	useMediaQuery,
	Button,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const ReviewItem = ({ info }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	const [expanded, setExpanded] = useState(false);

	const { t } = useTranslation();

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const displayText = expanded
		? t(info.text)
		: t(info.text).length > 120
		? `${t(info.text).substring(0, 120)}...`
		: t(info.text);

	const ImageContainer = styled("div")(({ theme }) => ({
		width: 64,
		height: 64,
		borderRadius: "0",
		overflow: "hidden",
		marginRight: "20px",
	}));

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		objectFit: "cover",
	});

	const Star = styled("img")({
		width: "20px",
		height: "20px",
		objectFit: "cover",
	});

	return (
		<Box
			sx={{
				margin: "20px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					marginBottom: "10px",
				}}
			>
				<ImageContainer>
					<Image src={info.img} />
				</ImageContainer>
				<Box>
					<Typography variant="h4">{t(info.name)}</Typography>
					<Typography variant="body1">{t(info.excursion)}</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					margin: "10px 0",
					gap: "3px",
				}}
			>
				<Star src="star.svg" />
				<Star src="star.svg" />
				<Star src="star.svg" />
				<Star src="star.svg" />
				<Star src="star.svg" />
			</Box>
			<Typography variant="body">{displayText} </Typography>
			{t(info.text).length > 120 && (
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
	);
};

export default ReviewItem;
