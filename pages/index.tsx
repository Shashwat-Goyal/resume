import type { NextPage } from "next";
import Script from "next/script";
import Head from "next/head";
import { About, Contact, Header, Hero, Portfolio, Resume, Services, Skills, Testimonials } from "../components";

const contentful = require("contentful");

export async function getStaticProps() {
  try {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: process.env.CONTENTFUL_SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      resolveLinks: true
    });
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
    const entry = await client.getEntries({ content_type: 'user', resolveLinks: true, include: 10 })
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        user: entry.items[0],
      },
    }
  } catch(error) {
    console.log(error, "error");
  }
}

const Home: NextPage = ({ user }: any) => {
  const { assets, experiences, profile, skills, socialConnections, testimonials, portfolio } = user.fields;
  return (
    <div>
      <Head>
        <title>{profile.fields.firstName} {profile.fields.lastName}</title>
        <meta name="description" content={`${profile.fields.firstName}'s Portfolio`} />
        <meta property="og:title" content={`${profile.fields.firstName} ${profile.fields.lastName}`} />
        <meta property="og:image" content={`https:${assets.fields.profileImage.fields.file.url}`} />
        <meta property="og:locale" content="en_US" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link href="assets/css/style.css" rel="stylesheet" />
      </Head>
      <div>
        <Header socialConnections={socialConnections} profile={profile} assets={assets} />
        <Hero cover={assets.fields.cover} />
        <main id="main">
          <About assets={assets} profile={profile} />
          <Skills skills={skills} />
          <Resume experiences={experiences} />
          <Portfolio portfolio={portfolio} />
          {/* <Services /> */}
          <Testimonials testimonials={testimonials} />
          <Contact profile={profile} />
        </main>
      </div>
      <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/vendor/typed.js/typed.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/vendor/waypoints/noframework.waypoints.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/vendor/php-email-form/validate.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/vendor/aos/aos.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/main.js" strategy="afterInteractive"></Script>
    </div>
  );
};

export default Home;
