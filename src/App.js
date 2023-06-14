import './App.css';
import PreNavbar from './component/PreNavbar'
import Navbar from './component/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Slider from './component/Slider';
import data from "./data/data.json"
import Offers from './component/Offers.js'
import Heading from './component/Heading.js'
import StarProduct from './component/StarProduct.js'
import HotAccessoriesMenu from './component/HotAccessoriesMenu.js'
import HotAccessories from './component/HotAccessories.js'
import ProductReviews from './component/ProductReviews.js'
import Videos from './component/Videos.js'
import Banner from './component/Banner.js'
import Footer from './component/Footer.js'
import NavOptions from './component/NavOptions.js'

function App() {
  return (
    <Router>

      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PEODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}></Route>
        <Route exact path="/SmartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}></Route>
        <Route exact path="/Home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}></Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews ProductReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </Router >
  );
}

export default App;
