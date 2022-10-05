// // import { IconType, SvgInHtml } from './index';

// type IconType = {
//   isActive?: boolean;
//   className?: string;
//   activeColor?: string;
//   noActiveColor?: string;
// };

// type SvgInHtml = HTMLElement & SVGElement;

// export const FavoriteIcon = ({
//   isActive,
//   className,
//   noActiveColor = '#282828',
//   activeColor = '#C83947',
// }: IconType): SVGElement && string => {
//   return (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 14 14"
//       fill={isActive ? '#C83947' : 'transparent'}
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ transition: 'all .1s ease' }}
//       className={className}
//     >
//       <path
//         d="M6.34647 12.4233L6.34575 12.4227C4.57015 10.7775 3.13641 9.44789 2.14055 8.20382C1.15074 6.96731 0.643066 5.87432 0.643066 4.71082C0.643066 2.8187 2.08875 1.35718 3.91449 1.35718C4.95217 1.35718 5.95905 1.85325 6.61611 2.64167L7.00021 3.10255L7.38431 2.64167C8.04137 1.85325 9.04825 1.35718 10.0859 1.35718C11.9117 1.35718 13.3574 2.8187 13.3574 4.71082C13.3574 5.87432 12.8497 6.96734 11.8598 8.20483C10.8639 9.44979 9.43023 10.781 7.65472 12.4296L7.65427 12.4301L7.0015 13.0327L6.34647 12.4233Z"
//         stroke={!isActive ? noActiveColor : activeColor}
//         style={{ transition: 'all .1s ease' }}
//       />
//     </svg>
//   );
// };

export {};
