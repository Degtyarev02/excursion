import { Grid, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ContactIcons from "./ContactIcons";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const ProfileInfo = () => {
	const theme = useTheme();
	const { t } = useTranslation();

	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		objectFit: "cover",
		maxHeight: 400,
		overflow: "hidden",
		borderRadius: "10px",
	});

	return (
		<Grid
			container
			display="flex"
			justifyContent="center"
			alignItems="center"
			sx={{
				background: theme.palette.background.secondary,
				backgroundRepeat: "no-repeat",
				padding: "35px 0",
				borderRadius: "10px",
			}}
		>
			<Grid
				item
				container
				spacing={4}
				justifyContent={"center"}
				padding={"0 10px"}
			>
				<Grid
					size={{ xs: 12, sm: 4, md: 3 }}
					justifyContent={"center"}
					display={"flex"}
				>
					<Image src={"profile.jpg"} />
				</Grid>
				<Grid item container size={{ xs: 12, sm: 8, md: 9 }} spacing={0}>
					<Typography variant={matches ? "h3" : "h5"}>
						{t("profile.greeting")}
					</Typography>
					<Typography
						variant="body"
						sx={{ fontSize: matches ? "20px" : "16px" }}
					>
						{t("profile.description1")}
					</Typography>
					<Typography
						variant="body"
						sx={{
								fontSize: matches ? "20px" : "16px",
								"& a": {
									color: theme.palette.text.secondary,
									textDecoration: "underline",
									"&:hover": {
										color: "#a8a8a8ff", // Темнее при наведении
									},
								},
							}}
						dangerouslySetInnerHTML={{
							__html: t("profile.description2").replace(
								/<a /g,
								'<a target="_blank" rel="noopener noreferrer" '
							),
						}}
					></Typography>
					<Grid size={{ xs: 12 }} direction={"column"} alignSelf={"end"}>
						<Typography variant={matches ? "h5" : "h6"}>
							{t("profile.contact_title")}
						</Typography>
						<ContactIcons />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ProfileInfo;
