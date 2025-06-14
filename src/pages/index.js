import Banner from '@/components/Banner';
import Gallery from '@/components/Gallery';
import HeroSection from '@/components/Herosection';


import ImageSlider from '@/components/Slider';
import Layout from '@/layout/Layout';
import ServicesSection from '@/components/home-page/Services';

function index() {
  return (
    <Layout>
      <ImageSlider/>
      <HeroSection />
      <ServicesSection/>
      {/* <QueryForm/> */}
      
    </Layout>
  );
}

export default index;
