  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
//   import style from './affiche.module.scss'

  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
  });

const AfficheComp=()=>{
    return(
        <div >
            {/* <span>
                <div className={style.vide}>
                </div>

                    <div className={style.filmCont}>

                        <div className={style.last}>
                                <button>◄</button>
                        </div >
                        <Item/>
                        <div className={style.first}>
                        <button> ►</button>
                    </div>
                    </div>

                    <div className={style.vide}>
                    </div>
            </span> */}
         
                    <div class="swiper">

                        <div class="swiper-wrapper">

                            <div class="swiper-slide">film 1</div>
                            <div class="swiper-slide">film 2</div>
                            <div class="swiper-slide">film 3</div>
                        </div>

                        <div class="swiper-pagination"></div>


                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>

                        <div class="swiper-scrollbar"></div>

                    </div>

        </div>
    )
}
<link rel="stylesheet" href="./carousel.js" />
export default AfficheComp;
