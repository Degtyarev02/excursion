import { Grid, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ContactIcons from "./ContactIcons";

const ProfileInfo = () => {
	const theme = useTheme();

	const matches = useMediaQuery(theme.breakpoints.up("md"));
	const ImageContainer = styled("div")(({ theme }) => ({
		width: 270,
		height: 270,
		border: "3px solid",
		borderRadius: "0",
		borderColor: theme.palette.secondary.main,
		overflow: "hidden",
		marginRight: "20px",
	}));

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		objectFit: "cover",
	});

	return (
		<Grid
			container
			display="flex"
			justifyContent="center"
			alignItems="center"
			sx={{
				background: theme.palette.primary.main,
				backgroundRepeat: "no-repeat",
				padding: "35px 0",
				borderTop: "3px solid",
				borderBottom: "3px solid",
				borderColor: theme.palette.secondary.main,
			}}
		>
			<Grid container width={"80%"}>
				<Grid
					size={{ xs: 12, md: 4 }}
					display="flex"
					alignItems="center"
				>
					<ImageContainer>
						<Image src={"profile.jpg"} />
					</ImageContainer>
				</Grid>
				<Grid container alignContent={"space-around"} size={{ xs: 12, md: 8 }}>
					<Grid size={{ xs: 12 }}>
						<Typography variant={matches ? "h3" : "h5"}>
							Здравствуйте, меня зовут Анна
						</Typography>
					</Grid>
					<Grid size={{ xs: 12 }} sx={{ textAlign: "justify" }}>
						<Typography
							variant="body"
							sx={{ fontSize: matches ? "20px" : "16px" }}
						>
							Я аккредитованный экскурсовод и гид-переводчик в Москве. Помогаю
							увидеть столицу через призму деталей: каждая улица, фасад или
							памятник — это страницы живого учебника по истории, архитектуре и
							искусству. Верю, что Москва, особенно её центр, способна удивлять
							снова и снова. И если рассказывать её истории с вдохновением,
							каждый путешественник уедет с мыслью: "Сюда обязательно нужно
							вернуться".
						</Typography>
					</Grid>
					<Grid>
						<ContactIcons />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ProfileInfo;
