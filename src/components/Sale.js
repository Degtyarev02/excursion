import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const Sale = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const { t } = useTranslation();
	return (
		<Box
			sx={{
				background: theme.palette.background.secondary,
				backgroundRepeat: "no-repeat",
				padding: "15px 30px"
			}}
		>
			<Typography variant={matches ? "h4" : "h5"}>{t("sale.title")}</Typography>
			<Typography variant="body">{t("sale.description")}</Typography>
		</Box>
	);
};

export default Sale;
