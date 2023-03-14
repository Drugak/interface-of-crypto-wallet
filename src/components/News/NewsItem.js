import React from "react";
import {Link} from '@fluentui/react';

const NewsItem = ({title, content, link, key}) => {
    return (
        <section key={key} className='news-item'>
            <div className='news-body box'>
                <h3>{title}</h3>
                <p className="content">{content}</p>
                <Link href={link} underline>Read article</Link>
            </div>
        </section>

    )
}

export default NewsItem;