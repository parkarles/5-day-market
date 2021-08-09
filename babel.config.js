//babel.config.js설정
module.exports = (api) => {
    const babelEnv = api.env();
    const babelVer = api.version;
    console.log(` -- 바벨(${babelVer})모드 : ${babelEnv} --`);
    const presets = ['@babel/preset-env', "@babel/react"
];
    const plugins = [
        "babel-plugin-styled-components", {"displayName": true}
    ];

    return {
        presets,
        plugins
    };
};