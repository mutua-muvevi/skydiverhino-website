// utils/sort-cards.js
const getGridSize = (totalItems) => {
	return {
		xs: totalItems % 2 === 0 ? 6 : 12,
		sm: totalItems % 2 === 0 ? 6 : 12,
		md: Math.floor(12 / totalItems),
		lg: Math.floor(12 / totalItems),
		xl: Math.floor(12 / totalItems),
	};
};

export default getGridSize;
