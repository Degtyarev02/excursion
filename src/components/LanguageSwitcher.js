import { Button, ButtonGroup, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
	const theme = useTheme();
	const { i18n } = useTranslation();

	const handleLanguageChange = (value) => {
		i18n.changeLanguage(value);
	};

	return (
		<ButtonGroup size="small" variant="text" color={theme.palette.primary.dark}>
			<Button
				onClick={() => {
					handleLanguageChange("ru");
				}}
			>
				RU
			</Button>
			<Button
				onClick={() => {
					handleLanguageChange("en");
				}}
			>
				EN
			</Button>
			<Button
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
