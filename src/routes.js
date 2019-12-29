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
const Visa = React.lazy(() => import('./layouts/Visa/Visa'));


const routes = [

    {path: "/", exact: true, name: "Home", component: Home},
    {path: "/aboutUs", exact: true, name: "AboutUs", component: AboutUs},
    {path: "/blogContent", exact: true, name: "BlogContent", component: BlogContent},
    {path: "/blog", exact: true, name: "BlogPost", component: BlogPost},
    {path: "/contactUs", exact: true, name: "ContactUs", component: ContactUs},
    {path: "/faq", exact: true, name: "FAQ", component: FAQ},
    {path: "/Request", exact: true, name: "Form", component: Form},
    {path: "/track/:code", exact: true, name: "Track", component: Track},
    {path: "/track", exact: true, name: "Track", component: Track},
    {path: "/visa", exact: true, name: "Visa", component: Visa},
    {path: "/visa/:title", exact: true, name: "Visa Info", component: VisaCountryInformation},
];
export default routes;