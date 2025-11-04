import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LanguageSwitcher from "./LanguageSwitcher";
import { Box, useTheme } from "@mui/material";

const Header = () => {
	const theme = useTheme();
	return (
		<AppBar
			position="absolute"
			sx={{
				right: "0",
				background: "transparent",
				boxShadow: "none",
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
