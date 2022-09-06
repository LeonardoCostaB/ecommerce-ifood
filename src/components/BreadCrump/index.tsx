import { Link } from 'react-router-dom';

import style from './style.module.scss';

import houseIconImgUrl from '../../assets/svgs/house.svg';
import arrowLeftIconImgUrl from '../../assets/svgs/arrow-left.svg';

interface IBreadCrumpProps {
  pageName: string;
}

export function BreadCrump({ pageName }: IBreadCrumpProps) {
  return(
      <div className={style['location-page']}>
         <Link
            to="/"
         >
            <img src={houseIconImgUrl} alt="ícone de uma casa" />
         </Link>

         <img src={arrowLeftIconImgUrl} alt="seta apontando para a direita" />

         <span>{ pageName }</span>
      </div>
  );
}
