// function importAll(r) {
//   let images = {}
//   r.keys().map((item, index) => {
//     images[item.replace('./', '')] = r(item)
//   })
//   return images
// }

// const menuImg = importAll(
//   require.context('./assets/menu-images/', false, /\.(png|jpe?g|svg)$/)
// )

// let data = [
//   { name: 'A Day with Shirley Wu', company: '2018', img: 'thumb_shirley.png' },
//   {
//     name: 'BayD3 meetup @Google: Semiotic.js',
//     company: '2018',
//     img: 'thumb_semiotic.png',
//   },
//   {
//     name: 'Kepler Map',
//     company: '2018',
//     img: 'thumb_kepler.png',
//   },
//   {
//     name: 'Reusable Module In Action',
//     company: '2018',
//     img: 'thumb_reusable.png',
//   },

//   {
//     name: 'Live Map of SFMuni Bus Service',
//     company: '2017',
//     img: 'thumb_sf_muni.png',
//   },
//   {
//     name: 'Dashboard with Crossfilter & DC',
//     company: '2017',
//     img: 'thumb_magneto.png',
//   },
//   {
//     name: 'Critique of Expenditure Dashboard',
//     company: '2017',
//     img: 'thumb_exp_dashboard.png',
//   },
//   { name: 'Chernoff Faces', company: '2016', img: 'thumb_faces.png' },
//   {
//     name: 'Birth of Parallel Co-ordinates',
//     company: '2016',
//     img: 'thumb_parallel.png',
//   },
//   {
//     name: 'Critique of Precinct Level Map',
//     company: '2016',
//     img: 'thumb_precinct.png',
//   },
//   {
//     name: 'Airport Evolution - Temporal Viz with Animation',
//     company: '2015',
//     img: 'thumb_airport_bar.png',
//   },
//   {
//     name: 'Bubble version of Airport Evolution',
//     company: '2015',
//     img: 'thumb_airport_bubble.png',
//   },
//   {
//     name: 'Exploring Visual Perception',
//     company: '2015',
//     img: 'thumb_power_law.png',
//   },
//   {
//     name: 'College Majors Outcome Analysis',
//     company: '2015',
//     img: 'thumb_college_majors.png',
//   },
//   { name: 'Neo4j Friends Map', company: '2015', img: 'thumb_neofj.png' },
// ]

// import React from 'react'
// import profilePic from './profile-pic.jpg'
// import { rhythm } from '../utils/typography'

// class Bio extends React.Component {
//   render() {
//     return (
//       <div
//         style={{
//           display: 'flex',
//           marginBottom: rhythm(2.5),
//         }}
//       >
//         <img
//           src={profilePic}
//           alt={`Kyle Mathews`}
//           style={{
//             marginRight: rhythm(1 / 2),
//             marginBottom: 0,
//             width: rhythm(2),
//             height: rhythm(2),
//           }}
//         />
//         <p>
//           Written by <strong>Kyle Mathews</strong> who lives and works in San
//           Francisco building useful things.{' '}
//           <a href="https://twitter.com/kylemathews">
//             You should follow him on Twitter
//           </a>
//         </p>
//       </div>
//     )
//   }
// }

// export default Bio

// blogpost>>>>>
// export const squareImage = graphql`
//   fragment squareImage on File {
//     childImageSharp {
//       sizes(maxWidth: 800) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `
// export const squareImage = graphql`
//   fragment squareImage on File {
//     childImageSharp {
//       fluid(maxWidth: 200, maxHeight: 200) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

// multi images

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD MMMM, YYYY")
//             title
//           }
//         }
//       }
//     }
//     thumbShirley: file(relativePath: { eq: "thumb_shirley.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbSemiotic: file(relativePath: { eq: "thumb_semiotic.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbKepler: file(relativePath: { eq: "thumb_kepler.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbReusable: file(relativePath: { eq: "thumb_reusable.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbSf: file(relativePath: { eq: "thumb_sf_muni.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbMagneto: file(relativePath: { eq: "thumb_magneto.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbExp: file(relativePath: { eq: "thumb_exp_dashboard.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbFaces: file(relativePath: { eq: "thumb_faces.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbParallel: file(relativePath: { eq: "thumb_parallel.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbPrecinct: file(relativePath: { eq: "thumb_precinct.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbAirportBar: file(relativePath: { eq: "thumb_airport_bar.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbAirportBubble: file(
//       relativePath: { eq: "thumb_airport_bubble.webp" }
//     ) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbPower: file(relativePath: { eq: "thumb_power_law.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbCollege: file(relativePath: { eq: "thumb_college_majors.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     thumbNeofj: file(relativePath: { eq: "thumb_neofj.webp" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

//{
/* <ImageComponentsPro textual={'thumbPower'}/> 

![Chinese Salty Egg](./salty_egg.jpg)

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

![Image from Source file system](thumb_faces.png)

![Image from current relative path](../src/components/assets/profile-image.jpg)

![Image from src relative path](./components/assets/profile-image.jpg) */
//}







// thumbShirley: file(relativePath: { eq: "thumb_shirley.png" }) {
//   ...cardFluidImage
// }
// thumbSemiotic: file(relativePath: { eq: "thumb_semiotic.png" }) {
//   ...cardFluidImage
// }
// thumbKepler: file(relativePath: { eq: "thumb_kepler.png" }) {
//   ...cardFluidImage
// }
// thumbReusable: file(relativePath: { eq: "thumb_reusable.png" }) {
//   ...cardFluidImage
// }
// thumbSf: file(relativePath: { eq: "thumb_sf_muni.png" }) {
//   ...cardFluidImage
// }
// thumbMagneto: file(relativePath: { eq: "thumb_magneto.png" }) {
//   ...cardFluidImage
// }
// thumbExp: file(relativePath: { eq: "thumb_exp_dashboard.png" }) {
//   ...cardFluidImage
// }
// thumbFaces: file(relativePath: { eq: "thumb_faces.png" }) {
//   ...cardFluidImage
// }
// thumbParallel: file(relativePath: { eq: "thumb_parallel.png" }) {
//   ...cardFluidImage
// }
// thumbPrecinct: file(relativePath: { eq: "thumb_precinct.png" }) {
//   ...cardFluidImage
// }
// thumbAirportBar: file(relativePath: { eq: "thumb_airport_bar.png" }) {
//   ...cardFluidImage
// }
// thumbPower: file(relativePath: { eq: "thumb_power_law.png" }) {
//   ...cardFluidImage
// }
// thumbCollege: file(relativePath: { eq: "thumb_college_majors.png" }) {
//   ...cardFluidImage
// }






// annotation.append("image")
//   .attr("xlink:href", annotateIcons['masters.png'])
//   .attr('opacity', 0.4)
//   .attr("height", 40)
//   .attr("width", 40)
//   .attr('transform', 'translate(' + outerRadius + ',' + -outerRadius + ')')

// annotation.append("image")
//   .attr("xlink:href", annotateIcons['intern.png'])
//   .attr('opacity', 0.4)
//   .attr("height", 40)
//   .attr("width", 40)
//   .attr('transform', 'translate(' + - outerRadius * 0.8 + ',' + outerRadius * 1.085 + ')')

// annotation.append("image")
//   .attr("xlink:href", annotateIcons['grad.png'])
//   .attr('opacity', 0.4)
//   .attr("height", 40)
//   .attr("width", 40)
//   .attr('transform', 'translate(' + - outerRadius * 1.225 + ',' + -outerRadius + ')')

// annotation.append('text')
//   .attr('class', 'annotext')
//   .text('Graduation')
//   .style('font-style', 'italic')
//   .attr('transform', 'translate(' + - outerRadius * 1.25 + ',' + -outerRadius * 0.985 + ')')

// annotation.append('text')
// .attr('class', 'annotext')
// .text('Internship')
// .style('font-style', 'italic')
// .attr('transform', 'translate(' + - outerRadius * 0.825 + ',' + outerRadius * 1.4 + ')')










// Why are we so confident these are the most detailed maps you’ll ever see from the 2014 Senate elections? 
// Precincts are the smallest level of geography for publicly-reported election results. 
// There were more than 175,000 precincts in the United States in 2012, fifty times the number of counties. 
// The maps here show precinct-level results, where available, from some of the closest Senate races.
// Notes
// Maps exclude early votes in counties that do not report them by precinct. Some precinct boundaries are approximate.








