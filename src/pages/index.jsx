import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const buttonElm = document.querySelector(".nav-btn")
buttonElm.addEventListener("click", () => {
  document.querySelector(".rollout-nav").classList.toggle("nav-closed")
})

const navElm = document.querySelector(".rollout-nav")
navElm.addEventListener("click", () => {
  navElm.classList.add("nav-closed")
})

