export const data = {
  navbar: {
    logo: {
      src:
        "https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ",
      alt: "React Logo",
    },
    title: "React",
    links: [
      {
        to: "#",
        label: "contact",
      },
      {
        to: "#",
        label: "documentation",
      },
      {
        to: "#",
        label: "api",
      },
    ],
  },
  hero: {
    title: "This is React",
    subtitle: "a powerful js library",
    img: {
      src:
        "https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
      alt: "React Logo",
    },
  },
  body: {
    utilsSection: {
      sectionTitle: "utils",
      cards: [
        {
          name: "React",
          description:
            "React (also known as React.js or bazingaJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing.[7][8] React Router[9] is an example of such a library.",
          img: {
            src:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
            alt: "React Logo",
          },
        },
        {
          name: "React Dom",
          description:
            "Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.[11] This process is called reconciliation. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost.[citation needed] It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.[citation needed]",
          img: {
            src: "https://miro.medium.com/max/795/1*2W5wXYZA_FGZwDj_Ap6Drg.png",
            alt: "React Dom",
          },
        },
        {
          name: "React Native",
          description:
            "React Native is an open-source mobile application framework created by Facebook, Inc.[3] It is used to develop applications for Android,[4] Android TV,[5] iOS, macOS,[6] tvOS,[7] Web,[8] Windows[6] and UWP[9] by enabling developers to use React's framework along with native platform capabilities.[10]",
          img: {
            src:
              "https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png",
            alt: "React Native",
          },
        },
      ],
    },
    developersSection: {
      sectionTitle: "Developers",
      desctionDescription: "People that help build React",
      cards: [
        {
          name: "Dan Abramov",
          description:
            "Dan Abramov is a software engineer at Facebook. Together with Andrew Clark, he created Redux. He also co-authored the Create React App. He is married to Kseniya Abramova and is currently living in London, United Kingdom",
          img: {
            src:
              "https://miro.medium.com/max/3150/1*xxVEfOOAmIKHWOUloRKLhw.jpeg",
            alt: "Dan",
          },
        },
        {
          name: "Kent C Dodds",
          description:
            "I'm a software engineer and teacher. I was born in 1988 (you can do the math) and grew up in Idaho. After graduating High School and serving a 2 year mission in the Missouri Independence Mission for The Church of Jesus Christ of Latter-day Saints, I went to BYU where I graduated with both a Bachelor and Master's degree in Information Systems with an emphasis on Software Application Development.",
          img: {
            src:
              "https://avatars.githubusercontent.com/u/1500684?s=460&u=1c014810361080e75ad80cdb8577ced97da65b11&v=4",
            alt: "Kent",
          },
        },
      ],
    },
  },
  footer: {
    contact: {
      email: "react@react.com",
      phone: "0800-react",
      address: {
        country: "USA",
        street: "5th Avenue",
        state: "NY",
      },
    },
    links: [
      {
        to: "#",
        label: "react conf",
      },
      {
        to: "#",
        label: "react podcast",
      },
      {
        to: "#",
        label: "react news",
      },
    ],
  },
};
