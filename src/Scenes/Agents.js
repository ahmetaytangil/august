import React from 'react';
import PagesheadBg from '../Assets/images/pages/pages-banner-2.jpg';
import PagesHead from '../Components/Pageshead/PagesHead';
import AgentsPanel from '../Containers/Agents/AgentsPanel';

export default function Agents({ lang }) {
    return (
        <>
            <PagesHead
                pageName="Personels"
                content="Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries,"
                img={PagesheadBg}
            />
            <AgentsPanel />
        </>
    )
}
