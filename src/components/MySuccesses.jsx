import LightGallery from "lightgallery/react"
import fjGallery from 'flickr-justified-gallery';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

// Images
import img1 from '../assets/my-successes/patent_page-0001.jpg'
import img2 from '../assets/my-successes/76.Bekmanova Gulbahar_page-0001.jpg'
import img3 from '../assets/my-successes/Bekmanova G._page-0001.jpg'
import img4 from '../assets/my-successes/Bekmanova-Gulbaxar-Begdullaevna_page-0001.jpg'
import img5 from '../assets/my-successes/Бекманова_Гульбахар_Бегдуллаевна_page-0001.jpg'
import img6 from '../assets/my-successes/Сертификат_page-0001.jpg'

import { useEffect } from "react";

const MySuccesses = () => {
    useEffect(() => {
        fjGallery(document.querySelectorAll('.gallery'), {
          itemSelector: '.gallery__item',
          rowHeight: 230,
          lastRow: 'start',
          gutter: 2,
          rowHeightTolerance: 0.1,
          calculateItemsHeight: false,
        });
    }, []);
  return (
    <div id='my-successes' className='bg-[#008000]'>
        <div className='max-w-[1280px] h-full mx-auto py-12 px-4 lg:px-0'>
            <p className="py-4 text-center text-white text-3xl">My Successes</p>
            <LightGallery
                plugins={[lgZoom]}
                pager={false}
                thumbnail={true}
                galleryId={'nature'}
                autoplayFirstVideo={false}
                elementClassNames={'gallery'}
                download={false}
                mobileSettings={{
                  controls: false,
                  download: false,
                  rotate: false,
                }}
            >
                <a
                    href={img1} 
                    className="gallery__item"
                >
                    <img src={img1} alt="OLIY TA’LIM  MUASSASALARIDA LABORATORIYA DARSLARINI INNOVATSIYA TEXNOLOGIYALARI ASOSIDA TAKOMILLASHTIRISH ELEKTRON QO'LLANMA UCHUN EHM DASTUR" />
                </a>
                <a
                    href={img2} 
                    className="gallery__item"
                >
                    <img src={img2} alt="EPRA International Journal of Multidisciplinary Research (IJMR)" />
                </a>
                <a
                    href={img3} 
                    className="gallery__item"
                >
                    <img src={img3} alt={`Nawrız bayramı" múnasibeti menen joqarı hám orta arnawlı bilimlendiriw oqıw orınlarında islewshiler arasında sport túrleri boyınsha Spartakiadasında sporttıń shashka túri boyınsha hayallar arasında birinshi orındı iyelegeni ushın`} />
                </a>
                <a
                    href={img4} 
                    className="gallery__item"
                >
                    <img src={img4} alt="Виртуальные лаборатории, их задачи и возможности использования при проведении лабораторных работ по химии" />
                </a>
                <a
                    href={img5} 
                    className="gallery__item"
                >
                    <img src={img5} alt="Развитие творческих навыков у учащихся в процессе проведения лабораторных работ по химии" />
                </a>
                <a
                    href={img6} 
                    className="gallery__item"
                >
                    <img src={img6} alt="О регистрации доменного имени" />
                </a>
            </LightGallery>
        </div>
    </div>
  )
}

export default MySuccesses