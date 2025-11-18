import CTA from "@/components/landingPage/CTA";
import Features from "@/components/landingPage/Features";
import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import Hero from "@/components/landingPage/Hero";
import VideoSection from "@/components/landingPage/VideoSection";

export default function Home(){
  return(
   <>
    <Header/>
    <Hero/>
    <Features/>
    <VideoSection/>
    <CTA/>
    <Footer/>
   </>
  )
}