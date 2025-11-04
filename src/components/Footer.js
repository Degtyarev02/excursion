// src/components/Footer.jsx
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const theme = useTheme();
	const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
	return (
		<Box
			component="footer"
			sx={{
				py: 2,
				px: 1,
				textAlign: "center",
				backgroundColor: theme.palette.background.secondary,
				width: "100%",
			}}
		>
			<Typography variant="body2" color="text.secondary">
				{t("footer.copyright", { year: currentYear })}
			</Typography>
			<Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
				{t("footer.contact")}
			</Typography>
		</Box>
	);
};

export default Footer;
