import React from 'react';
import PagesHead from '../Components/Pageshead/PagesHead';
import BannerImg from '../Assets/images/pages/pages-banner-2.jpg';
import PressAndMediaPanel from '../Containers/Pressandmedia/PressAndMediaPanel';

export default function PressAndMedia() {
    return (
        <>
            <PagesHead
                type = "press"
                pageName="Press &amp; Media"
                content="Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries,"
                img={BannerImg}
                address="Press enquiries: Manifesto PR"
                email="info@manifesto.com"
                phone="+90 212 345 66 77"
            />
            <PressAndMediaPanel />
        </>
    )
}
