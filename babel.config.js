module.exports = {
    plugins: [],
    presets: [
        [
            "@babel/preset-env",
            {
                targets: "last 2 versions",
                debug: false,
            },
        ],
    ],
    env: {
        test: {
            plugins: [],
            presets: [
                [
                    '@babel/preset-env',
                    {
                        debug: false,
                    },
                ],
            ],
        },
    },
};
