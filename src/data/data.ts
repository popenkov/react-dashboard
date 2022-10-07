// Sidebar imports
// import {
//   UilEstate,
//   UilClipboardAlt,
//   UilUsersAlt,
//   UilPackage,
//   UilChart,
//   UilSignOutAlt,
// } from '@iconscout/react-unicons';

// Analytics Cards imports
// import { UilUsdSquare, UilMoneyWithdrawal } from '@iconscout/react-unicons';

// Recent Card Imports
// import img1 from '../imgs/img1.png';
// import img2 from '../imgs/img2.png';
// import img3 from '../imgs/img3.png';

export type LeftSidebarType = {
  icon: string;
  heading: string;
  link: string;
};

// Sidebar Data
export const leftSidebarData = [
  {
    icon: 'Grid',
    heading: 'Summary',
    link: '/',
  },
  {
    icon: 'File',
    heading: 'Reports',
    link: '/reports',
  },
  {
    icon: 'Signal',
    heading: 'Tables',
    link: '/tables',
  },
  {
    icon: 'Wallet',
    heading: 'My wallet',
    link: '/wallet',
  },
];

type TargetColorType = {
  backGround: string;
  boxShadow: string;
  pathColor: string;
  trailColor: string;
  backgroundColor: string;
};
type TargetSeriesType = {
  backGround: string;
  boxShadow: string;
};
export type TargetItemType = {
  title: string;
  color: TargetColorType;
  barValue: number;
  term: string;
  series: TargetSeriesType;
};

// Analytics Cards Data
export const cardsData = [
  {
    title: 'Sale of goods',
    color: {
      backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5',
      pathColor: 'linear-gradient(180deg, #037BCB 0%, #18A0FB 100%)',
      trailColor:
        'linear-gradient(180deg, rgba(3, 123, 203, 0.3) 0%, rgba(24, 160, 251, 0.3) 100%)',
      backgroundColor: 'linear-gradient(180deg, #037BCB 0%, #18A0FB 100%)',
    },
    barValue: 60,
    term: '1 month later',
    // value: '25,970',
    // png: UilUsdSquare,
    series: [
      {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: 'property rental',
    color: {
      backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
      pathColor: '',
      trailColor:
        'background: linear-gradient(180deg, rgba(3, 203, 179, 0.3) 0%, rgba(24, 251, 251, 0.3) 100%);',
      backgroundColor: 'linear-gradient(180deg, #03CBB3 0%, #18FBFB 100%);',
    },
    barValue: 70,
    term: '3 month later',
    // value: '14,270',
    // png: UilMoneyWithdrawal,
    series: [
      {
        name: 'Revenue',
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: 'Sale of goods',
    color: {
      backGround:
        'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)',
      boxShadow: '0px 10px 20px 0px #F9D59B',
      pathColor: '',
      trailColor:
        ' linear-gradient(180deg, rgba(203, 3, 195, 0.3) 0%, rgba(251, 24, 187, 0.3) 100%)',
      backgroundColor:
        'background: linear-gradient(180deg, #CB03C3 0%, #FB18BB 100%);',
    },
    barValue: 60,
    term: '1 month later',
    // value: '4,270',
    // png: UilClipboardAlt,
    series: [
      {
        name: 'Expenses',
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: 'property rental',
    color: {
      backGround:
        'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)',
      boxShadow: '0px 10px 20px 0px #F9D59B',
      pathColor: '',
      trailColor: '',
      backgroundColor: '',
    },
    barValue: 60,
    term: '1 month later',
    // value: '4,270',
    // png: UilClipboardAlt,
    series: [
      {
        name: 'Expenses',
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
// export const UpdatesData = [
//   {
//     img: img1,
//     name: 'Andrew Thomas',
//     noti: 'has ordered Apple smart watch 2500mh battery.',
//     time: '25 seconds ago',
//   },
//   {
//     img: img2,
//     name: 'James Bond',
//     noti: 'has received Samsung gadget for charging battery.',
//     time: '30 minutes ago',
//   },
//   {
//     img: img3,
//     name: 'Iron Man',
//     noti: 'has ordered Apple smart watch, samsung Gear 2500mh battery.',
//     time: '2 hours ago',
//   },
// ];
