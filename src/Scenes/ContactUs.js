// General
import React from 'react';
import BannerImg from '../Assets/images/pages/pages-banner-2.jpg';
import PagesHead from '../Components/Pageshead/PagesHead';
import ContactUsMainPanel from '../Containers/Contactus/ContactUsMainPanel';

export default function ContactUs() {
    return (
        <>
            <PagesHead
                pageName="Contact Us"
                content="
                Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries,
                "
                img={BannerImg}
            />
            <ContactUsMainPanel />
        </>
    )
}
