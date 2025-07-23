// src/components/Footer.jsx
import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
	const theme = useTheme();
	return (
		<Box
			component="footer"
			sx={{
				py: 2,
				px: 1,
				textAlign: "center",
				borderTop: "1px solid",
				borderColor: "divider",
				backgroundColor: theme.palette.primary.main,
				width: "100%",
			}}
		>
			<Typography variant="body2" color="text.secondary">
				© {new Date().getFullYear()} Все права защищены.
			</Typography>
			<Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
				Контактная информация: example@email.com
			</Typography>
		</Box>
	);
};

export default Footer;
