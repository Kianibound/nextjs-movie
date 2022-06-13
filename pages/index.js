import Head from 'next/head'
import HeroSection from "../components/heroSection";
import SliderContainer from "../components/sliderContainer";
import {useAxios} from "../hooks/useAxios";
import {useEffect, useState} from "react";
import MovieList from "../components/page/index/movieList";
import Loading from "../components/loading";
import MovieItem from "../components/movieItem";
import TvItem from "../components/TvItem";

const baseUrl = "https://api.themoviedb.org/3/"
const moviesEndpoint = "movie/now_playing"
const tvEndpoint = "tv/airing_today"
const token = "301b07456b1452abbdda1e23bf72876d"

export default function Home() {
    const [moviesRes, fetchMovies] = useAxios()
    const [tvRes, fetchTv] = useAxios()

    useEffect(() => {
        fetchMovies(baseUrl + moviesEndpoint + "?api_key=" + token)
        fetchTv(baseUrl + tvEndpoint + "?api_key=" + token)
    }, [])

    const sliderData = [
        {
            title: "Cinema",
            value: moviesRes?.data?.results,
            item:(item)=><MovieItem data={item}/>
        },
        {
            title: "Tv",
            value: tvRes?.data?.results,
            item:(item)=><TvItem data={item}/>
        }
    ]
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`bg-gray-800 `}>
                <HeroSection/>
                <div className={`transform -translate-y-32 bg-gray-800/80 rounded-t-[50px]`}>
                    {
                        moviesRes.loading ?
                            <Loading/>
                             :
                            <SliderContainer title={"New Releases"} data={sliderData}/>
                    }
                </div>
                <MovieList/>
            </main>
        </div>
    )
}
