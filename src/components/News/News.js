import React, {useEffect, useState} from "react";
import api from '../../utils/api';
import {CONST} from "../../const";
import NewsItem from "./NewsItem";

const News = () => {
    const [news, setNews] = useState();

    const getNews = async () => {
        const {results} = await api(CONST.API.NEWS_API_URL, 'GET');
        debugger;
        setNews(results);
    };
    useEffect(() => {
        console.log("1212");
        // getNews();
    },[])

    const test = [
        {
            "title": "Crypto Market Signals Bullish with Recent USDC, SHIB & ETH Rally",
            "link": "https://thenewscrypto.com/crypto-market-signals-bullish-with-recent-usdc-shib-eth-rally/",
            "keywords": [
                "Altcoin News",
                "Altcoin",
                "ETHEREUM",
                "SHIB",
                "USDC"
            ],
            "creator": [
                "Sarala"
            ],
            "video_url": null,
            "description": "Since heightened volatility during pre-market hours on Monday, significant bank stocks have been suspended in the wake of Silicon Valley",
            "content": "Since heightened volatility during pre-market hours on Monday, significant bank stocks have been suspended in the wake of demise. That led equities to witness a crucial selloff. Also, the shares of First Republic Bank dropped by more than 60% due to a cascading effect from the second-largest bank in the U.S. As a result of the stress over the US banking industry, the global cryptocurrency market is again moving in a direction. At the time of writing, the global crypto market cap surged over 5.30% in the last 24 hours. Let’s take a glance at the top trending cryptocurrencies of the day, as per CoinMarketCap. Crypto’s second-largest stablecoin USDC buzzed social media by rebounding its 1 dollar peg after being depegged from its standard $1 to as low as $0.87 on 11th March. This price change might have been a result of the Circle, which is behind the that it would cover any of its USDC reserves. At the time of writing, USDC traded at $0.9992, which increased around 0.64% in a day. But its market cap of $39 billion is down by 3%. Shiba Inu’s developer Shytoshi Kusama debuted its on Sunday, which seems the right time. Following that, the memecoin trading popularity has skyrocketed. At the time of writing, Shiba Inu traded at $0.0000112 with a trading volume of $376 million, an increase of about 27%. SHIB price soared over 3% in a day. Ethereum is in 3rd place in the trending cryptocurrency of the day list. The first altcoin regained its $1.7K price range after getting dive into the $1.3K price level on Friday. At the time of writing, ETH traded at $1,675 and holds a market cap of over $205 billion. 24-hour trading volume climbed to 414 billion, up by 13%. Also, the ETH price surged 7% in a week and 8.6% in a month. Further, the largest cryptocurrency Bitcoin (BTC) price surged over 9% in the last 24 hours and traded at $24,511, after dipping to the $19K range last week. A journalism graduate who is passionate about writing loves to dance and travel currently starts exploring blockchain technology.",
            "pubDate": "2023-03-14 06:20:02",
            "image_url": null,
            "source_id": "thenewscrypto",
            "category": [
                "top"
            ],
            "country": [
                "united arab emirates"
            ],
            "language": "english"
        },
        {
            "title": "Crypto Market Signals Bullish with Recent USDC, SHIB & ETH Rally",
            "link": "https://thenewscrypto.com/crypto-market-signals-bullish-with-recent-usdc-shib-eth-rally/",
            "keywords": [
                "Altcoin News",
                "Altcoin",
                "ETHEREUM",
                "SHIB",
                "USDC"
            ],
            "creator": [
                "Sarala"
            ],
            "video_url": null,
            "description": "Since heightened volatility during pre-market hours on Monday, significant bank stocks have been suspended in the wake of Silicon Valley",
            "content": "Since heightened volatility during pre-market hours on Monday, significant bank stocks have been suspended in the wake of demise. That led equities to witness a crucial selloff. Also, the shares of First Republic Bank dropped by more than 60% due to a cascading effect from the second-largest bank in the U.S. As a result of the stress over the US banking industry, the global cryptocurrency market is again moving in a direction. At the time of writing, the global crypto market cap surged over 5.30% in the last 24 hours. Let’s take a glance at the top trending cryptocurrencies of the day, as per CoinMarketCap. Crypto’s second-largest stablecoin USDC buzzed social media by rebounding its 1 dollar peg after being depegged from its standard $1 to as low as $0.87 on 11th March. This price change might have been a result of the Circle, which is behind the that it would cover any of its USDC reserves. At the time of writing, USDC traded at $0.9992, which increased around 0.64% in a day. But its market cap of $39 billion is down by 3%. Shiba Inu’s developer Shytoshi Kusama debuted its on Sunday, which seems the right time. Following that, the memecoin trading popularity has skyrocketed. At the time of writing, Shiba Inu traded at $0.0000112 with a trading volume of $376 million, an increase of about 27%. SHIB price soared over 3% in a day. Ethereum is in 3rd place in the trending cryptocurrency of the day list. The first altcoin regained its $1.7K price range after getting dive into the $1.3K price level on Friday. At the time of writing, ETH traded at $1,675 and holds a market cap of over $205 billion. 24-hour trading volume climbed to 414 billion, up by 13%. Also, the ETH price surged 7% in a week and 8.6% in a month. Further, the largest cryptocurrency Bitcoin (BTC) price surged over 9% in the last 24 hours and traded at $24,511, after dipping to the $19K range last week. A journalism graduate who is passionate about writing loves to dance and travel currently starts exploring blockchain technology.",
            "pubDate": "2023-03-14 06:20:02",
            "image_url": null,
            "source_id": "thenewscrypto",
            "category": [
                "top"
            ],
            "country": [
                "united arab emirates"
            ],
            "language": "english"
        },
        {
            "title": "Crypto Market Signals Bullish with Recent USDC, SHIB & ETH Rally",
            "link": "https://thenewscrypto.com/crypto-market-signals-bullish-with-recent-usdc-shib-eth-rally/",
            "keywords": [
                "Altcoin News",
                "Altcoin",
                "ETHEREUM",
                "SHIB",
                "USDC"
            ],
            "creator": [
                "Sarala"
            ],
            "video_url": null,
            "description": "Since heightened volatility during pre-market hours on Monday, significant bank stocks have been suspended in the wake of Silicon Valley",
            "content": "Since heightened volatility during pre-market hours on Monday, significant bank stocks have been suspended in the wake of demise. That led equities to witness a crucial selloff. Also, the shares of First Republic Bank dropped by more than 60% due to a cascading effect from the second-largest bank in the U.S. As a result of the stress over the US banking industry, the global cryptocurrency market is again moving in a direction. At the time of writing, the global crypto market cap surged over 5.30% in the last 24 hours. Let’s take a glance at the top trending cryptocurrencies of the day, as per CoinMarketCap. Crypto’s second-largest stablecoin USDC buzzed social media by rebounding its 1 dollar peg after being depegged from its standard $1 to as low as $0.87 on 11th March. This price change might have been a result of the Circle, which is behind the that it would cover any of its USDC reserves. At the time of writing, USDC traded at $0.9992, which increased around 0.64% in a day. But its market cap of $39 billion is down by 3%. Shiba Inu’s developer Shytoshi Kusama debuted its on Sunday, which seems the right time. Following that, the memecoin trading popularity has skyrocketed. At the time of writing, Shiba Inu traded at $0.0000112 with a trading volume of $376 million, an increase of about 27%. SHIB price soared over 3% in a day. Ethereum is in 3rd place in the trending cryptocurrency of the day list. The first altcoin regained its $1.7K price range after getting dive into the $1.3K price level on Friday. At the time of writing, ETH traded at $1,675 and holds a market cap of over $205 billion. 24-hour trading volume climbed to 414 billion, up by 13%. Also, the ETH price surged 7% in a week and 8.6% in a month. Further, the largest cryptocurrency Bitcoin (BTC) price surged over 9% in the last 24 hours and traded at $24,511, after dipping to the $19K range last week. A journalism graduate who is passionate about writing loves to dance and travel currently starts exploring blockchain technology.",
            "pubDate": "2023-03-14 06:20:02",
            "image_url": null,
            "source_id": "thenewscrypto",
            "category": [
                "top"
            ],
            "country": [
                "united arab emirates"
            ],
            "language": "english"
        },
        {
            "title": "Crypto Market Signals Bullish with Recent USDC, SHIB & ETH Rally",
            "link": "https://thenewscrypto.com/crypto-market-signals-bullish-with-recent-usdc-shib-eth-rally/",
            "keywords": [
                "Altcoin News",
                "Altcoin",
                "ETHEREUM",
                "SHIB",
                "USDC"
            ],
            "creator": [
                "Sarala"
            ],
            "video_url": null,
            "description": "Since heightened volatility during pre-market hours on Monday, significant bank stocks have been suspended in the wake of Silicon Valley",
            "content": "Since heightened volatility during pre-market hours on Monday, significant bank stocks have been suspended in the wake of demise. That led equities to witness a crucial selloff. Also, the shares of First Republic Bank dropped by more than 60% due to a cascading effect from the second-largest bank in the U.S. As a result of the stress over the US banking industry, the global cryptocurrency market is again moving in a direction. At the time of writing, the global crypto market cap surged over 5.30% in the last 24 hours. Let’s take a glance at the top trending cryptocurrencies of the day, as per CoinMarketCap. Crypto’s second-largest stablecoin USDC buzzed social media by rebounding its 1 dollar peg after being depegged from its standard $1 to as low as $0.87 on 11th March. This price change might have been a result of the Circle, which is behind the that it would cover any of its USDC reserves. At the time of writing, USDC traded at $0.9992, which increased around 0.64% in a day. But its market cap of $39 billion is down by 3%. Shiba Inu’s developer Shytoshi Kusama debuted its on Sunday, which seems the right time. Following that, the memecoin trading popularity has skyrocketed. At the time of writing, Shiba Inu traded at $0.0000112 with a trading volume of $376 million, an increase of about 27%. SHIB price soared over 3% in a day. Ethereum is in 3rd place in the trending cryptocurrency of the day list. The first altcoin regained its $1.7K price range after getting dive into the $1.3K price level on Friday. At the time of writing, ETH traded at $1,675 and holds a market cap of over $205 billion. 24-hour trading volume climbed to 414 billion, up by 13%. Also, the ETH price surged 7% in a week and 8.6% in a month. Further, the largest cryptocurrency Bitcoin (BTC) price surged over 9% in the last 24 hours and traded at $24,511, after dipping to the $19K range last week. A journalism graduate who is passionate about writing loves to dance and travel currently starts exploring blockchain technology.",
            "pubDate": "2023-03-14 06:20:02",
            "image_url": null,
            "source_id": "thenewscrypto",
            "category": [
                "top"
            ],
            "country": [
                "united arab emirates"
            ],
            "language": "english"
        }
    ]


    return (
        <section className="crypto-app_section news-section">
            {test && test.map(({description, link, title}, index) =>
                <NewsItem key={index} content={description} link={link} title={title}/>)}
        </section>
    )
}

export default News;