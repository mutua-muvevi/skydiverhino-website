import {
	CardMedia,
	Container,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import TitleSubtitle from "../title-subtitle";

const ContentBlocks = ({ title, subtitle, content, backgroundImage }) => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<div
			style={{
				backgroundImage: backgroundImage
					? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
					: "",
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				color: backgroundImage ? "#fff" : theme.palette.text.primary,
			}}
		>
			<Container maxWidth="xl">
				<Stack
					sx={{
						paddingTop: 10,
						paddingBottom: 10,
					}}
					spacing={3}
				>
					{title && (
						<TitleSubtitle
							title={title}
							subtitle={subtitle}
							position="left"
						/>
					)}

					{content.map((item, index) => (
						<Stack
							key={index}
							direction={
								isMd
									? `row-${index % 2 ? `reverse` : null}`
									: "column"
							}
							spacing={3}
							sx={{
								flexWrap: "wrap",
								justifyContent: "center",
								pb: 3,
								borderBottom:
									content.length === index
										? "none"
										: `1px dashed ${
												backgroundImage
													? "#fff"
													: theme.palette.text.primary
										  }}}`,
							}}
						>
							<Stack
								direction="column"
								spacing={3}
								sx={{ flex: 1, pr: index % 2 ? 0 : 3 }}
							>
								<Typography variant="h3">
									{item.title}
								</Typography>
								
								<Typography
									key={index}
									variant="h4"
									textAlign="justify"
								>
									{item.details}
								</Typography>
							</Stack>

							{item.image ? (
								<CardMedia
									component="img"
									sx={{
										flex: 1,
										objectFit: "cover",
										width: "100%",
										height: isMd ? "400px" : "500px",
									}}
									image={item.image}
									alt="Alt text"
								/>
							) : null}
						</Stack>
					))}
				</Stack>
			</Container>
		</div>
	);
};

ContentBlocks.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	content: PropTypes.array,
	image: PropTypes.string,
	backgroundImage: PropTypes.string,
};

export default ContentBlocks;
