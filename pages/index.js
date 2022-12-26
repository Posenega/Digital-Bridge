import ServiceSection from "../components/index/services/serviceSection/ServicesSection";
import Header from "../components/Header/Header";
import Hook from "../components/index/Hook/Hook";
import Portfolio from "../components/index/Portfolio/portfolio";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hook />
      <Portfolio />
      <ServiceSection />
      <Footer />
    </>
  );
}
