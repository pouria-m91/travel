import React from 'react';

const Home = React.lazy(() => import('./layouts/Home'));
const AboutUs = React.lazy(() => import('./layouts/AboutUs'));
const BlogContent = React.lazy(() => import('./layouts/BlogContent'));
const BlogPost = React.lazy(() => import('./layouts/BlogPost'));
const ContactUs = React.lazy(() => import('./layouts/ContactUs'));
const FAQ = React.lazy(() => import('./layouts/Faq'));
const Form = React.lazy(() => import('./Form/Form'));
const Track = React.lazy(() => import('./Tracking/TrackApplication'));
const VisaCountryInformation = React.lazy(() => import('./layouts/VisaCountryInformation'));


const routes = [
    {path: "/home", exact: true, name: "Home", component: Home},
    {path: "/AboutUs", exact: false, name: "AboutUs", component: AboutUs},
    {path: "/blogContent", exact: false, name: "BlogContent", component: BlogContent},
    {path: "/blogPost", exact: false, name: "BlogPost", component: BlogPost},
    {path: "/ContactUs", exact: false, name: "ContactUs", component: ContactUs},
    {path: "/FAQ", exact: false, name: "FAQ", component:git  FAQ},
    {path: "/Form", exact: false, name: "Form", component: Form},
    {path: "/Track/:code", exact: false, name: "Track", component: Track},
    {path: "/Track", exact: false, name: "Track", component: Track},
    {path: "/visaInfo", exact: false, name: "VisaCountryInformation", component: VisaCountryInformation},
];
export default routes;