import React from 'react';

import _CartIcon from './ic-cart.svg';
import _MyPageIcon from './ic-mypage.svg';
import _MainLogo from './main-logo.svg';
import _HomeLogo from './home-logo.svg';
import _ImageLogo from './img-logo.svg';
import _logoVertical from './logo-vertical.svg';
import _logoNot5day from './logo-not-5day.svg';

export { ReactComponent as _FacebookIcon } from './social/ic-facebook.svg';
export {ReactComponent as _InstaIcon} from './social/ic-insta.svg';
export { ReactComponent as _TwitterIcon } from './social/ic-twitter.svg';
export { ReactComponent as _YoutubeIcon } from './social/ic-youtube.svg';

export const CartIcon = () => (<img src={_CartIcon} />);
export const MyPageIcon = () => (<img src={_MyPageIcon} />);
export const MainLogo = () => (<img src={_MainLogo} />);
export const ImageLogo = () => (<img src={_ImageLogo} />);
export const HomeLogo = () => (<img src={_HomeLogo} />);
export const LogoVertical = () => (<img src={_logoVertical} />);
export const LogoNot5day = () => (<img src={_logoNot5day} />);
// export const FacebookIcon = () => (<img src={_FacebookIcon} />);
// export const InstaIcon = () => (<img src={_InstaIcon} />);
// export const TwitterIcon = () => (<img src={_TwitterIcon} />);
// export const YoutubeIcon = () => (<img src={_YoutubeIcon} />);
