import { Button, ButtonGroup, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
	const theme = useTheme();
	const { i18n } = useTranslation();

	const handleLanguageChange = (value) => {
		i18n.changeLanguage(value);
	};

	return (
		<ButtonGroup size="small" variant="text" >
			<Button
				sx={{ color: "text.primary" }}
				onClick={() => {
					handleLanguageChange("ru");
				}}
			>
				RU
			</Button>
			<Button
				sx={{ color: "text.primary" }}
				onClick={() => {
					handleLanguageChange("en");
				}}
			>
				EN
			</Button>
			<Button
				sx={{ color: "text.primary" }}
				onClick={() => {
					handleLanguageChange("fr");
				}}
			>
				FR
			</Button>
		</ButtonGroup>
	);
};

export default LanguageSwitcher;
