import { Container, Grid, Stack, Typography } from "@mui/material";

const title = "Content Blocks";
const subTitle =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus volutpat est, sed consequat tortor ullamcorper ut. Nam ultrices justo ullamcorper bibendum congue. Etiam massa neque, ullamcorper at est quis, aliquet ultrices justo.";

const content = [
	{
		title: "Content One",
		details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus volutpat est, sed consequat tortor ullamcorper ut. Nam ultrices justo ullamcorper bibendum congue. Etiam massa neque, ullamcorper at est quis, aliquet ultrices justo. Vivamus ultrices tortor tortor. In hac habitasse platea dictumst. Ut vitae cursus odio, et consectetur est. Nulla dignissim risus at risus dapibus aliquet. Suspendisse aliquet metus nec nisl laoreet scelerisque non pretium est.`,
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg",
	},
	{
		title: "Content Two",
		details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus volutpat est, sed consequat tortor ullamcorper ut. Nam ultrices justo ullamcorper bibendum congue. Etiam massa neque, ullamcorper at est quis, aliquet ultrices justo. Vivamus ultrices tortor tortor. In hac habitasse platea dictumst. Ut vitae cursus odio, et consectetur est. Nulla dignissim risus at risus dapibus aliquet. Suspendisse aliquet metus nec nisl laoreet scelerisque non pretium est.`,
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg",
	},
	{
		title: "Content Three",
		details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus volutpat est, sed consequat tortor ullamcorper ut. Nam ultrices justo ullamcorper bibendum congue. Etiam massa neque, ullamcorper at est quis, aliquet ultrices justo. Vivamus ultrices tortor tortor. In hac habitasse platea dictumst. Ut vitae cursus odio, et consectetur est. Nulla dignissim risus at risus dapibus aliquet. Suspendisse aliquet metus nec nisl laoreet scelerisque non pretium est.`,
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg",
	},
];

const ContentBlocks = () => {
	return (
		<div spacing={3}>
			<Container maxWidth="xl">
				<Stack sx={{ mb: 6 }}>
					<Typography variant="h3" align="center">
						{title}
					</Typography>
					<Typography variant="body1" align="center">
						{subTitle}
					</Typography>
				</Stack>

				<Stack spacing={3}>
					{content.map((item, index) => (
						<div key={index}>
							<Grid container spacing={3}>
								<Grid
									item
									xs={12}
									md={6}
									order={{ md: index % 2 === 0 ? 1 : 2 }}
								>
									<Stack spacing={1}>
										<Typography variant="subtitle2">
											{item.title}
										</Typography>
										<Typography variant="body2">
											{item.details}
										</Typography>
									</Stack>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
									order={{ md: index % 2 === 0 ? 2 : 1 }}
								>
									<img
										src={item.image}
										alt={item.title}
										style={{
											width: "100%",
											height: "auto",
										}}
									/>
								</Grid>
							</Grid>
						</div>
					))}
				</Stack>
			</Container>
		</div>
	);
};

export default ContentBlocks;
