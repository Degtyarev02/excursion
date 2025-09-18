import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LanguageSwitcher from "./LanguageSwitcher";
import { Box, useTheme } from "@mui/material";

const Header = () => {
	const theme = useTheme();
	return (
		<AppBar
			position="static"
			sx={{
				background: "accent.main",
				boxShadow: "none",
				borderBottom: "3px solid",
				borderTop: "3px solid",
				borderColor: theme.palette.secondary.main,
			}}
		>
			<Toolbar>
				<Box sx={{ marginLeft: "auto" }}>
					<LanguageSwitcher />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
