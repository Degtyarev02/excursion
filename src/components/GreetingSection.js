import {
	Box,
	Grid,
	Link,
	styled,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { keyframes } from "@mui/system";

// Анимация для картинки - справа налево
const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Анимация для текста - снизу вверх
const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const GreetingSection = () => {
	const theme = useTheme();
	const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
	const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
	const { t } = useTranslation();

	const Image = styled("img")({
		height: "100%",
		width: "100%",
		objectFit: "cover",
		marginLeft: "auto",
		animation: `${slideInFromRight} 1s ease-in-out forwards`
	});

	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				justifyContent: "space-between",
				overflow: "hidden",
				position: "relative",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: matchesLg ? "50%" : "0%",
					left: "20px",
					zIndex: "22",
					maxWidth: matchesMd ? "400px" : "250px",
					animation: `${slideInFromBottom} 1s ease-in-out 1s forwards`,
					opacity: 0, // Начальное состояние для анимации
					transform: "translateY(100%)", // Начальное состояние для анимации
				}}
			>
				<Typography variant="h2" sx={{ fontSize: matchesMd ? "65px" : "40px" }}>
					{t("greeting.name")}
				</Typography>
				<Typography
					variant="body1"
					sx={{ fontSize: matchesMd ? "20px" : "15px" }}
				>
					{t("greeting.name2")}
				</Typography>
			</Box>
			<Image src="/greet.svg" />

			<Box
				sx={{
					position: "absolute",
					bottom: "10px",
					width: "100%",
					justifyContent: "center",
					display: "flex",
				}}
			>
				<Box
					sx={{
						justifyContent: "center",
						display: "flex",
						gap: "20px",
						background: "white",
						width: "fit-content",
						padding: "5px 15px",
						borderRadius: "10px",
					}}
				>
					<Link href="#profile" color="text.primary" underline="none">
						{t("greeting.aboutMe")}
					</Link>
					<Typography>|</Typography>
					<Link href="#excursions" color="text.primary" underline="none">
						{t("greeting.excursions")}
					</Link>
					<Typography>|</Typography>
					<Link href="#reviews" color="text.primary" underline="none">
						{t("greeting.reviews")}
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default GreetingSection;
