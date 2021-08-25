/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	rootDir: "../",
	roots: ["<rootDir>/src"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
		".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
	},
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	testRegex: "(\\.|/)(test|spec)\\.tsx?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"],
	globals: {
		'ts-jest': {
			tsconfig: "<rootDir>/conf/tsconfig.json",
		},
	},
};
