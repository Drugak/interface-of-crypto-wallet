import React, {useEffect, useState} from "react";
import api from '../../utils/api';
import {CONST} from "../../const";
import NewsItem from "./NewsItem";

const News = () => {
    const [news, setNews] = useState();

    const getNews = async () => {
        const {results} = await api(CONST.API.NEWS_API_URL, 'GET');
        setNews(results);
    };
    useEffect(() => {
        getNews();
    },[])

    return (
        <section className="crypto-app_section news-section">
            {news && news.map(({description, link, title}, index) =>
                <NewsItem key={index} content={description} link={link} title={title}/>)}
        </section>
    )
}

export default News;