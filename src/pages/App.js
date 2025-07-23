import { Box, useMediaQuery, useTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router";
import ProfileSection from "../components/ProfileSection";

// Тема создаётся ВНЕ компонента
const theme = createTheme({
	typography: {
    fontFamily: "Cormorant Garamond, EB Garamond, serif", // Классическое сочетание
  },
	palette: {
		primary: {
			main: "#d8b899f3", // Теплый коричневый (как старинная бумага)
			darker: "#9e866eff", // Более темный оттенок для контраста
		},
		secondary: {
			main: "#6B8E7F", // Приглушенный зелено-серый (как патина)
		},
		accent: {
			main: "#D4AF8F", // Светлый бежевый (как пергамент)
		},
		background: {
			default: "#F8F4E9", // Кремовый фон (имитация состаренной бумаги)
			paper: "#FFF9F0", // Еще светлее для карточек
		},
		text: {
			primary: "#3E3A34", // Темно-коричневый (читаемый, но не черный)
			secondary: "#5A534A", // Мягкий серо-коричневый
		},
	},
});

function App() {
	return (
		// Теперь ThemeProvider получает корректную тему
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ResponsiveBox />
		</ThemeProvider>
	);
}

// Выносим логику с медиа-запросами в отдельный компонент
function ResponsiveBox() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Box
			sx={{
				width: "100%",
				marginTop: "0"
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route index element={<ProfileSection />} />
				</Routes>
			</BrowserRouter>
		</Box>
	);
}

export default App;
