import ReusableIntroContent from "../../../modules/sections/intro-content";

const content = [
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem leo, vulputate nec tempus in, venenatis et magna. Aenean auctor erat felis, vitae placerat mauris cursus eget. Cras ut urna sit amet ipsum sollicitudin iaculis. Curabitur metus metus, aliquet eu purus vitae, dignissim commodo lorem. Nam rutrum dignissim diam, a semper ex malesuada non. Integer tincidunt facilisis imperdiet. Vestibulum consequat gravida lacinia. Suspendisse potenti. Suspendisse consectetur est at felis hendrerit faucibus. Etiam leo odio, semper id arcu et, feugiat hendrerit felis. Etiam ac nisl metus. Proin a ullamcorper dui. Phasellus sed malesuada felis. Nulla facilisi.`,
	`Sed sapien felis, vestibulum ut dignissim quis, sagittis sit amet ipsum. Donec consectetur at orci quis viverra. Nullam tempus felis eget nunc feugiat, vitae efficitur risus pulvinar. Sed commodo ligula id purus commodo feugiat. Etiam aliquet aliquam nisl id venenatis. Integer et arcu vel justo commodo malesuada. Donec eget euismod elit. Aliquam vel ornare augue. Maecenas sed urna facilisis, dictum lacus auctor, accumsan ex. Nullam ex orci, placerat sed massa sit amet, mollis consectetur neque. Donec semper suscipit rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean risus dui, mollis at dui efficitur, auctor scelerisque arcu. Duis auctor mi nunc, ac accumsan nibh luctus sit amet. Curabitur at turpis a augue eleifend condimentum in id turpis.`,
];

const images = [
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
];

const HomeAFF = () => {
	return  (
		<>
			<ReusableIntroContent
				title="Accelerated freefall"
				subTitle="The best skydiving experience in the world"
				content={content}
				images={images}
				backgroundImage={images[2]}
			/>
		</>
	);
};

export default HomeAFF;
