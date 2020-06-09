require('dotenv').config({
  path: '.env'
})

module.exports = {
  siteMetadata: {
    title: `p_toro（ピートロ）自己紹介`,
    description: `Web制作業にたずさわる老害ヒゲメガネジロリアン。禁煙（2008〜）に続き禁酒（2020〜）を決意。映画と読書とラジオとアニメと散歩とラーメンとカレーを愛する無能の人。`,
    author: `@p_toro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.GATSBY_SPACE_ID,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
  ],
}
