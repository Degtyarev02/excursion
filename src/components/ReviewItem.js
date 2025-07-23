import { useState } from 'react';
import { Box, Divider, Grid, Typography, useMediaQuery, Button } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const ReviewItem = ({ info }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const displayText = expanded 
        ? info.text 
        : info.text.length > 120 
            ? `${info.text.substring(0, 120)}...` 
            : info.text;

    const ImageContainer = styled("div")(({ theme }) => ({
        width: 64,
        height: 64,
        border: "2px solid",
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

    const Star = styled("img")({
        width: "20px",
        height: "20px",
        objectFit: "cover",
    });

    const InfoContainer = styled("div")(({ theme }) => ({
        flex: 1,
        backgroundColor: theme.palette.accent.main,
        borderRadius: "10px",
        padding: "25px 20px",
    }));

    return (
        <Box
            sx={{
                margin: "20px"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                }}
            >
                <ImageContainer>
                    <Image src={info.img} />
                </ImageContainer>
                <Box>
                    <Typography variant="h4">{info.name}</Typography>
                    <Typography variant="body1">{info.excursion}</Typography>
                </Box>
            </Box>
            <Divider />
            <Box
                sx={{
                    display: "flex",
                    margin: "10px 0",
                    gap: "3px",
                }}
            >
                <Star src="star.svg" />
                <Star src="star.svg" />
                <Star src="star.svg" />
                <Star src="star.svg" />
                <Star src="star.svg" />
            </Box>
            <Divider />
            <Typography variant="body">{displayText} </Typography>
            {info.text.length > 120 && (
                <Button 
                    onClick={toggleExpand}
                    sx={{
                        color: theme.palette.secondary.main,
                        textTransform: 'none',
                        padding: 0,
                        minWidth: 'auto',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            textDecoration: 'underline'
                        }
                    }}
                >
                    {expanded ? 'Свернуть' : 'Ещё'}
                </Button>
            )}
            <Divider />
        </Box>
    );
};

export default ReviewItem;