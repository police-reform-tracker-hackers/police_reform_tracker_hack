import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
    const meta = {
        title: "Police Reform Tracker",
        description: "Tracking reforms and commitments across state legislatures in the United States",
        keywords: [
            "police reform",
            "police",
            "police accountability",
            "police reform tracker",
            "police reform tracking",
            "united states",
            "united states of america",
            "united states",
            "usa",
            "racial justice",
            "racism",
            "protests",
            "legislation"
        ]
    }
    return (
        <Helmet>
            <html lang="en"/>
            <title>Police Reform Tracker</title>
            <meta name="title" content={meta.title} />
            <meta name="description" content={meta.description}/>
            <meta name="keywords" content={meta.keywords.join(",")}/>
            <meta name="robots" content="index, follow"/>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="language" content="English"/>

            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content="https://user-images.githubusercontent.com/19695496/94343331-5a8cec00-ffe5-11ea-8695-ba790148d04e.png" />
        </Helmet>
    )
}

export default Head;