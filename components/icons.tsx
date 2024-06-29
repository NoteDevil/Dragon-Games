import * as React from "react";
import { IconSvgProps } from "../DragonGames/types";
import exp from "constants";

export const Logo: React.FC<IconSvgProps> = ({
  size = 650,
  width,
  height,
  ...props
}) => (
  <svg
    id="_Слой_2"
    data-name="Слой 2"
    height={size || height}
    width={size || width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 415.59 542.84"
  >
    <g id="_Слой_1-2" data-name="Слой 1">
      <g>
        <g>
          <path
            fill="#f94b58"
            strokeWidth={0}
            d="M317.71,112.02c-5.12,12.92-8.27,26.65-12.31,40.1-11.81-7.35-16.51-17.13-13.53-32.11,1.42-7.07,4.09-13.92,5.93-20.94,1.64-6.35,3.45-12.73,4.23-19.22.72-5.96.17-12.11.17-18.05,17.41,11.25,23.03,31.19,15.51,50.21Z"
          />
          <path
            fill="#f94b58"
            strokeWidth={0}
            d="M291.87,120.02c1.42-7.07,4.09-13.92,5.93-20.94,1.64-6.35,3.45-12.73,4.23-19.22.72-5.96.17-12.11.17-18.05,17.41,11.25,23.03,31.19,15.51,50.21-5.12,12.92-8.27,26.65-12.31,40.1-11.81-7.35-16.51-17.13-13.53-32.11Z"
          />
          <path
            fill="#f94b58"
            strokeWidth={0}
            d="M288.61,337.26s-11.09-20.1-24.16-30.17l32.99,22.13-8.83,8.04Z"
          />
          <path
            fill="#f94b58"
            strokeWidth={0}
            d="M415.2,346.41c-2.91,34.74-20.97,61.91-44.07,86.39-7.85,8.36-16.17,16.26-24.02,24.58-2.82,3-5.27,6.51-7.12,10.21-5.68,11.27-.05,19.45,12.61,18.43,4.06-.32,8.04-1.71,12.06-2.59-4.11,25.13-31.32,44.54-69.16,48.7-10.72,2.17-21.25,4.02-31.6,5.5-5.92-2.08-10.53-3.79-12.15-4.67-6.98,2.91-16.4,6.33-27.63,8.92-15.16,1.01-29.71,1.2-43.61.65,14.65-2.03,36.82-6.7,57.84-17.78-4.39-3.05-8.13-6.15-11.5-9.15l-.05-.04c-19.26,1.06-52.76-.47-84.36-18.11,3.7,1.15,37.15,11.23,73.78,6.19-3.65-5.08-6.19-10.17-7.76-15.11-19.45-3.65-48.88-12.61-73.92-34.51,2.4,1.34,33.91,19.03,71.75,21.58-.18-6.47,1.25-12.29,3.88-17.33-18.06-7.3-47.72-22.87-68.7-52.25,2.03,1.89,35.25,32.29,78.45,40.61-6.29-23.29-12.34-47.49-18.02-72.58-3.6-16.12-6.98-32.01-10.07-47.59,2.54,9.89,6.56,23.15,13.12,38.21,9.65,22.13,18.11,41.4,35.99,58.67,17.97,17.33,31.14,18.8,41.16,38.35,4.67,9.01,6.33,17.42,7.02,22.87,28.83-5.96,56.5-50.45,56.5-50.45l-16.17-.09,2.68-16.95-19.82,2.22-1.02-14.69-18.94,7.3c-4.76,1.89-10.21,0-12.89-4.35l-25.18-41.35,38.07-2.64c4.39-.28,8.46,2.18,10.21,6.19l.55,1.2c1.48,3.42.97,7.44-1.34,10.44l-10.07,12.98,35.66-6.33.88,11.69,11.09-3.33,1.85,15.57,12.24-6.7,1.8,19.08,24.54-30.31c2.86-3.51,2.08-8.64-1.66-11.23l-58.86-40.1c-6.7-4.57-11.23-11.59-12.66-19.59-1.66-9.38-7.71-17.42-16.31-21.66l-9.94-4.85h-.02c-19.3-29.13-42.1-66.68-42.45-67.26l10.01,32.47c3.53,9.3,7.08,17.3,10.39,24.03h-.01s-19.91-9.71-19.91-9.71c-11.18-9.29-23.93-21.48-36.36-37.24-7.72-9.79-13.95-19.26-19.08-27.95,3.88,9.61,7.62,20.33,10.9,32.2,4.62,16.72,7.35,32.2,8.96,45.88-4.39-2.45-9.84-5.13-16.26-7.62-13.77-5.31-31.37-12.11-51.24-7.21-5.91,1.47-16.17,4.99-26.94,14.55,7.35-2.27,23.89-6.29,43.61-1.11,12.71,3.33,21.95,9.19,27.49,13.4-11.73-.65-29.15-.28-49.25,5.36-23.56,6.61-40.61,17.65-50.63,25.32,8.73-2.54,23.05-5.27,40.01-2.17,6.42,1.2,12.01,3,16.68,4.9-7.39-.88-24.21-1.85-42.23,6.88-27.68,13.4-37.15,39.5-39.04,44.95,4.76-4.44,17.83-15.43,37.05-16.77,6.33-.47,11.88.23,16.36,1.24.56.09,1.11.23,1.66.37-.88.41-1.76.83-2.68,1.24-15.66,7.3-31.69,15.06-47.96,23.29-3.93,1.99-7.81,3.97-11.65,5.96-11.5-16.17-25.55-30.63-35.94-47.49-18.39-29.75-14.78-64.49,6.98-87.87,1.34,6.06,2.08,12.15,4.11,17.83,2.77,7.76,7.3,14.46,16.4,15.71,9.06,1.24,15.24-3.79,20.14-10.49,9.98-13.72,13.4-29.71,14-46.2.42-11.74-.18-23.65-1.52-35.35-3.74-33.54,9.89-58.49,37.65-78.21-1.66,9.29-3.7,17.46-4.62,25.73-2.31,21.2,5.87,35.89,21.11,38.95,15.99,3.14,34.33-10.07,39.23-28.78,1.48-5.64,2.54-11.78,1.89-17.46-3.05-26.43,7.71-46.9,25.04-65.79,15.2-16.54,18.99-27.95,20.28-32.07,3.56-11.46,3.84-27.63-7.25-50.13,39.09,9.24,67.13,48.65,64.03,89.26-.55,7.21-1.34,14.6-3.28,21.57-5.87,20.98.18,38.58,15.11,53.22,12.43,12.15,25.46,23.61,38.72,34.83,21.85,18.44,30.91,42,29.84,70.14-.32,8.69-.65,17.42,0,26.06.97,12.66,8.18,21.95,17.14,23.56,8.45,1.48,18.34-4.58,23.28-15.85,3.42-7.76,5.08-16.31,7.95-26.01,12.89,22.08,19.22,44.82,17.14,69.62Z"
          />
        </g>
        <path
          fill="#f94b58"
          strokeWidth={0}
          d="M108.38,370.76c-.37.56-.69,1.06-1.01,1.62.92-.41,1.8-.83,2.68-1.24-.55-.14-1.11-.28-1.66-.37Z"
        />
      </g>
    </g>
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SteamIcon: React.FC<IconSvgProps> = ({
  size = 21,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 21 21"
      width={size || width}
      {...props}
    >
      <path
        d="M10.482 0C4.96134 0 0.43299 4.25 0 9.66072L5.62887 11.9821C6.09794 11.6607 6.67526 11.4643 7.3067 11.4643C7.36083 11.4643 7.41495 11.4643 7.46907 11.4643L9.97681 7.83929V7.78572C9.97681 5.60714 11.7629 3.82143 13.9459 3.82143C16.1289 3.82143 17.9149 5.58929 17.9149 7.78572C17.9149 9.96429 16.1289 11.75 13.9459 11.75C13.9098 11.75 13.8918 11.75 13.8557 11.75L10.2835 14.3036C10.2835 14.3571 10.2835 14.3929 10.2835 14.4464C10.2835 16.0893 8.94845 17.4107 7.3067 17.4107C5.8634 17.4107 4.65464 16.375 4.38402 15.0179L0.360825 13.3571C1.60567 17.7679 5.66495 21 10.482 21C16.2912 21 21 16.3036 21 10.5C20.982 4.69643 16.2732 0 10.482 0ZM6.58505 15.9286L5.28608 15.3929C5.52062 15.875 5.91753 16.2679 6.44072 16.4821C7.57732 16.9464 8.89433 16.4107 9.3634 15.2857C9.59794 14.7321 9.59794 14.125 9.3634 13.5714C9.12887 13.0179 8.71392 12.5893 8.15464 12.3571C7.6134 12.125 7.01804 12.1429 6.51289 12.3393L7.84794 12.8929C8.67784 13.25 9.07474 14.1964 8.73196 15.0357C8.38918 15.8929 7.43299 16.2857 6.58505 15.9286ZM16.5799 7.78572C16.5799 6.33929 15.3892 5.14286 13.9459 5.14286C12.4845 5.14286 11.3119 6.32143 11.3119 7.78572C11.3119 9.23215 12.5026 10.4286 13.9459 10.4286C15.4072 10.4286 16.5799 9.25 16.5799 7.78572ZM11.9613 7.78572C11.9613 6.69643 12.8454 5.80357 13.9459 5.80357C15.0464 5.80357 15.9304 6.69643 15.9304 7.78572C15.9304 8.875 15.0464 9.76786 13.9459 9.76786C12.8454 9.76786 11.9613 8.875 11.9613 7.78572Z"
        fill="#ECEFF4"
      />
    </svg>
  );
};

export const DownIcon: React.FC<IconSvgProps> = ({
  size = 64,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 65 64"
      width={size || width}
      fill="none"
      {...props}
    >
      <path
        d="M6.35417 16.9978L32.5 2.29455L58.6458 16.9978V46.3139L32.5 61.0171L6.35417 46.3139V16.9978Z"
        stroke="white"
        strokeWidth="4"
      />
      <path
        d="M22 34.7586L33 45M33 45L44 34.7586M33 45L33 18"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const RightArrow: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_106)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36109 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_106">
          <rect width="12" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HeartIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 40 } = props;

  return (
    <svg
      width="71"
      height="76"
      viewBox="0 0 71 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0H60.5C66.0229 0 70.5 4.47715 70.5 10V66C70.5 71.5229 66.0229 76 60.5 76H10.5C4.97715 76 0.5 71.5229 0.5 66V10Z"
        fill="#E74040"
      />
      <path
        d="M22.1667 33.2C22.1664 31.2671 22.9432 29.4153 24.3224 28.0611C25.7017 26.707 27.5675 25.9642 29.5 26C31.7898 25.9879 33.9747 26.9589 35.5 28.6667C37.0254 26.9589 39.2103 25.9879 41.5 26C43.4326 25.9642 45.2984 26.707 46.6776 28.0611C48.0568 29.4153 48.8337 31.2671 48.8334 33.2C48.8334 40.3413 40.328 45.7333 35.5 50C30.6827 45.6973 22.1667 40.3467 22.1667 33.2Z"
        fill="white"
      />
    </svg>
  );
};

export const GearIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 40 } = props;

  return (
    <svg
      width="70"
      height="76"
      viewBox="0 0 70 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H60C65.5229 0 70 4.47715 70 10V66C70 71.5229 65.5229 76 60 76H10C4.47715 76 0 71.5229 0 66V10Z"
        fill="#E74040"
      />
      <path
        d="M37.4266 51.3333H32.5733C31.9468 51.3333 31.4047 50.8973 31.2706 50.2853L30.728 47.7733C30.004 47.4561 29.3176 47.0595 28.6813 46.5906L26.232 47.3706C25.6346 47.5611 24.9853 47.3097 24.672 46.7666L22.24 42.5653C21.9301 42.022 22.0369 41.3366 22.4973 40.9133L24.3973 39.18C24.3109 38.3948 24.3109 37.6025 24.3973 36.8173L22.4973 35.088C22.0362 34.6645 21.9294 33.9783 22.24 33.4346L24.6666 29.2306C24.98 28.6876 25.6293 28.4361 26.2266 28.6266L28.676 29.4066C29.0014 29.1655 29.3402 28.9429 29.6906 28.74C30.0271 28.5502 30.3734 28.3784 30.728 28.2253L31.272 25.716C31.4054 25.1039 31.9469 24.6673 32.5733 24.6666H37.4266C38.0531 24.6673 38.5945 25.1039 38.728 25.716L39.2773 28.2266C39.6517 28.3913 40.0163 28.5774 40.3693 28.784C40.699 28.9743 41.0177 29.1831 41.324 29.4093L43.7746 28.6293C44.3716 28.4395 45.0201 28.6908 45.3333 29.2333L47.76 33.4373C48.0699 33.9806 47.9631 34.666 47.5026 35.0893L45.6026 36.8226C45.689 37.6078 45.689 38.4001 45.6026 39.1853L47.5026 40.9186C47.9631 41.3419 48.0699 42.0273 47.76 42.5706L45.3333 46.7746C45.0201 47.3171 44.3716 47.5684 43.7746 47.3786L41.324 46.5986C41.0139 46.827 40.6916 47.0384 40.3586 47.232C40.0091 47.4345 39.6485 47.6175 39.2786 47.78L38.728 50.2853C38.594 50.8968 38.0527 51.3328 37.4266 51.3333ZM34.9946 32.6666C32.0491 32.6666 29.6613 35.0544 29.6613 38C29.6613 40.9455 32.0491 43.3333 34.9946 43.3333C37.9402 43.3333 40.328 40.9455 40.328 38C40.328 35.0544 37.9402 32.6666 34.9946 32.6666Z"
        fill="white"
      />
    </svg>
  );
};

export const LineIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width="50"
      height="2"
      viewBox="0 0 50 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="2" fill="#E74040" />
    </svg>
  );
};

export const GoldStarIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_0_146)">
        <path
          d="M15.5 6.3H9.775L8 0.75L6.225 6.3H0.5L5.125 9.725L3.375 15.25L8 11.825L12.625 15.25L10.85 9.7L15.5 6.3Z"
          fill="#FFCE31"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_146">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const DownloadIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 9.90002C0.632608 9.90002 0.759785 9.9527 0.853553 10.0465C0.947322 10.1402 1 10.2674 1 10.4V12.9C1 13.1652 1.10536 13.4196 1.29289 13.6071C1.48043 13.7947 1.73478 13.9 2 13.9H14C14.2652 13.9 14.5196 13.7947 14.7071 13.6071C14.8946 13.4196 15 13.1652 15 12.9V10.4C15 10.2674 15.0527 10.1402 15.1464 10.0465C15.2402 9.9527 15.3674 9.90002 15.5 9.90002C15.6326 9.90002 15.7598 9.9527 15.8536 10.0465C15.9473 10.1402 16 10.2674 16 10.4V12.9C16 13.4305 15.7893 13.9392 15.4142 14.3142C15.0391 14.6893 14.5304 14.9 14 14.9H2C1.46957 14.9 0.960859 14.6893 0.585786 14.3142C0.210714 13.9392 0 13.4305 0 12.9V10.4C0 10.2674 0.0526784 10.1402 0.146447 10.0465C0.240215 9.9527 0.367392 9.90002 0.5 9.90002Z"
        fill="#737373"
      />
      <path
        d="M7.64599 11.854C7.69244 11.9006 7.74761 11.9375 7.80836 11.9627C7.8691 11.9879 7.93422 12.0009 7.99999 12.0009C8.06576 12.0009 8.13088 11.9879 8.19162 11.9627C8.25237 11.9375 8.30755 11.9006 8.35399 11.854L11.354 8.854C11.4479 8.76011 11.5006 8.63278 11.5006 8.5C11.5006 8.36722 11.4479 8.23989 11.354 8.146C11.2601 8.05211 11.1328 7.99937 11 7.99937C10.8672 7.99937 10.7399 8.05211 10.646 8.146L8.49999 10.293V1.5C8.49999 1.36739 8.44731 1.24021 8.35354 1.14645C8.25978 1.05268 8.1326 1 7.99999 1C7.86738 1 7.74021 1.05268 7.64644 1.14645C7.55267 1.24021 7.49999 1.36739 7.49999 1.5V10.293L5.35399 8.146C5.2601 8.05211 5.13277 7.99937 4.99999 7.99937C4.86722 7.99937 4.73988 8.05211 4.64599 8.146C4.5521 8.23989 4.49936 8.36722 4.49936 8.5C4.49936 8.63278 4.5521 8.76011 4.64599 8.854L7.64599 11.854Z"
        fill="#737373"
      />
    </svg>
  );
};

export const LoveIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0009 5.95324L8.63651 4.55662L8.63594 4.55605C8.28804 4.20177 7.87304 3.92037 7.41517 3.72827C6.95731 3.53617 6.46575 3.43723 5.96922 3.43723C5.47269 3.43723 4.98113 3.53617 4.52327 3.72827C4.06548 3.92033 3.65054 4.20167 3.30268 4.55586C2.58868 5.2808 2.18846 6.25748 2.18846 7.275C2.18846 8.29259 2.58874 9.26935 3.30284 9.9943L3.30313 9.99459L9.77812 16.5508L10.0005 16.776L10.2228 16.5508L16.6978 9.99459L16.6981 9.9943C17.4122 9.26935 17.8125 8.29259 17.8125 7.275C17.8125 6.25752 17.4123 5.28088 16.6983 4.55595C16.3506 4.20148 15.9357 3.91997 15.4778 3.72791C15.0201 3.53591 14.5286 3.43718 14.0322 3.4375C14.0319 3.4375 14.0317 3.4375 14.0315 3.4375L14.0317 3.75M10.0009 5.95324L11.3578 4.56949L11.3586 4.5687L11.5817 4.7875M10.0009 5.95324L11.357 4.57036M10.0009 5.95324L11.357 4.57036M14.0317 3.75C13.5746 3.74935 13.122 3.84089 12.701 4.01915C12.2801 4.19741 11.8994 4.45874 11.5817 4.7875M14.0317 3.75C14.4868 3.74962 14.9373 3.84008 15.3569 4.01609C15.7766 4.1921 16.1569 4.45011 16.4755 4.775L14.0317 3.75ZM11.5817 4.7875L11.357 4.57036M11.5817 4.7875L11.357 4.57036M14.0315 2.8125L14.0316 2.8125C14.6115 2.81266 15.1856 2.92827 15.7204 3.15259C16.2551 3.37691 16.7399 3.70544 17.1463 4.11904C17.9752 4.96287 18.4397 6.09841 18.4397 7.28125C18.4397 8.46391 17.9754 9.59929 17.1467 10.4431C17.1466 10.4432 17.1464 10.4434 17.1463 10.4435L10.0005 17.6802L2.85465 10.4435C2.85454 10.4434 2.85444 10.4433 2.85433 10.4432C2.02561 9.59939 1.56128 8.46396 1.56128 7.28125C1.56128 6.09846 2.02568 4.96295 2.85452 4.11913C3.26109 3.70575 3.74588 3.37744 4.28064 3.15333C4.81539 2.92923 5.38941 2.81381 5.96922 2.81381C6.54903 2.81381 7.12305 2.92923 7.6578 3.15333C8.19255 3.37744 8.67735 3.70575 9.08392 4.11913L9.08476 4.11998L9.77851 4.81998L10.0005 5.04394L10.2224 4.81998L10.9162 4.11998L10.9173 4.11879C11.3233 3.70475 11.8079 3.37593 12.3427 3.15161C12.8774 2.9273 13.4516 2.81201 14.0315 2.8125Z"
        fill="#BDBDBD"
        stroke="#252B42"
        strokeWidth="0.625"
      />
    </svg>
  );
};

export const ShopIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1.63333C0 1.46536 0.0667281 1.30427 0.185505 1.1855C0.304281 1.06673 0.465377 1 0.633353 1H2.53341C2.67469 1.00004 2.8119 1.04731 2.92322 1.1343C3.03454 1.22129 3.11357 1.34299 3.14776 1.48007L3.66078 3.53333H18.3672C18.4602 3.53342 18.5521 3.55398 18.6362 3.59356C18.7204 3.63315 18.7948 3.69077 18.8541 3.76235C18.9135 3.83393 18.9564 3.9177 18.9797 4.00772C19.0031 4.09774 19.0063 4.19179 18.9892 4.2832L17.0891 14.4165C17.062 14.5617 16.9849 14.6927 16.8714 14.7871C16.7578 14.8815 16.6148 14.9332 16.4672 14.9333H5.06682C4.91917 14.9332 4.7762 14.8815 4.66263 14.7871C4.54907 14.6927 4.47204 14.5617 4.44487 14.4165L2.54608 4.3022L2.0394 2.26667H0.633353C0.465377 2.26667 0.304281 2.19994 0.185505 2.08117C0.0667281 1.96239 0 1.8013 0 1.63333ZM3.92932 4.8L5.59251 13.6667H15.9415L17.6047 4.8H3.92932ZM6.33353 14.9333C5.66163 14.9333 5.01724 15.2002 4.54214 15.6753C4.06703 16.1504 3.80012 16.7948 3.80012 17.4667C3.80012 18.1385 4.06703 18.7829 4.54214 19.258C5.01724 19.7331 5.66163 20 6.33353 20C7.00543 20 7.64982 19.7331 8.12492 19.258C8.60003 18.7829 8.86694 18.1385 8.86694 17.4667C8.86694 16.7948 8.60003 16.1504 8.12492 15.6753C7.64982 15.2002 7.00543 14.9333 6.33353 14.9333ZM15.2005 14.9333C14.5286 14.9333 13.8842 15.2002 13.4091 15.6753C12.934 16.1504 12.6671 16.7948 12.6671 17.4667C12.6671 18.1385 12.934 18.7829 13.4091 19.258C13.8842 19.7331 14.5286 20 15.2005 20C15.8724 20 16.5168 19.7331 16.9919 19.258C17.467 18.7829 17.7339 18.1385 17.7339 17.4667C17.7339 16.7948 17.467 16.1504 16.9919 15.6753C16.5168 15.2002 15.8724 14.9333 15.2005 14.9333ZM6.33353 16.2C6.66948 16.2 6.99167 16.3335 7.22923 16.571C7.46678 16.8085 7.60023 17.1307 7.60023 17.4667C7.60023 17.8026 7.46678 18.1248 7.22923 18.3623C6.99167 18.5999 6.66948 18.7333 6.33353 18.7333C5.99758 18.7333 5.67539 18.5999 5.43783 18.3623C5.20028 18.1248 5.06682 17.8026 5.06682 17.4667C5.06682 17.1307 5.20028 16.8085 5.43783 16.571C5.67539 16.3335 5.99758 16.2 6.33353 16.2ZM15.2005 16.2C15.5364 16.2 15.8586 16.3335 16.0962 16.571C16.3337 16.8085 16.4672 17.1307 16.4672 17.4667C16.4672 17.8026 16.3337 18.1248 16.0962 18.3623C15.8586 18.5999 15.5364 18.7333 15.2005 18.7333C14.8645 18.7333 14.5423 18.5999 14.3048 18.3623C14.0672 18.1248 13.9338 17.8026 13.9338 17.4667C13.9338 17.1307 14.0672 16.8085 14.3048 16.571C14.5423 16.3335 14.8645 16.2 15.2005 16.2Z"
        fill="#252B42"
      />
    </svg>
  );
};

export const EyeIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z"
        fill="black"
      />
      <path
        d="M2 10C2 10 5 4.5 10 4.5C15 4.5 18 10 18 10C18 10 15 15.5 10 15.5C5 15.5 2 10 2 10ZM10 13.5C10.9283 13.5 11.8185 13.1313 12.4749 12.4749C13.1313 11.8185 13.5 10.9283 13.5 10C13.5 9.07174 13.1313 8.1815 12.4749 7.52513C11.8185 6.86875 10.9283 6.5 10 6.5C9.07174 6.5 8.1815 6.86875 7.52513 7.52513C6.86875 8.1815 6.5 9.07174 6.5 10C6.5 10.9283 6.86875 11.8185 7.52513 12.4749C8.1815 13.1313 9.07174 13.5 10 13.5Z"
        fill="black"
      />
    </svg>
  );
};

export const ClockIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99934 14.6667C4.70379 14.6232 2.04278 11.9622 1.99934 8.66668C2.04278 5.37113 4.70379 2.71011 7.99934 2.66668C11.2949 2.71011 13.9559 5.37113 13.9993 8.66668C13.9559 11.9622 11.2949 14.6232 7.99934 14.6667ZM7.99934 4.00001C5.43612 4.03376 3.36642 6.10346 3.33268 8.66668C3.36642 11.2299 5.43612 13.2996 7.99934 13.3333C10.5626 13.2996 12.6323 11.2299 12.666 8.66668C12.6323 6.10346 10.5626 4.03376 7.99934 4.00001ZM11.3327 9.33334H7.33268V5.33334H8.66601V8.00001H11.3327V9.33334ZM13.5273 4.47201L11.5213 2.47201L12.4607 1.52734L14.4673 3.52734L13.5273 4.47134V4.47201ZM2.47068 4.47201L1.52734 3.52734L3.52134 1.52734L4.46468 2.47201L2.47201 4.47201H2.47068Z"
        fill="#23A6F0"
      />
    </svg>
  );
};

export const ChartAreaIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 3.307L14.8425 3.5255C13.9214 3.81404 12.9649 3.97373 12 4C11.133 4 10.339 3.5465 9.498 3.066C8.581 2.542 7.633 2 6.5 2C5.0615 2 3.4575 3.103 2.5 3.886V1H1.5V14C1.50026 14.2651 1.60571 14.5193 1.79319 14.7068C1.98066 14.8943 2.23486 14.9997 2.5 15H15.5V3.307ZM2.5 10.147C3.437 8.688 5.28 6.5 6.5 6.5C7.319 6.5 7.98 7.051 8.68 7.6345C9.4485 8.2745 10.319 9 11.5 9C12.618 8.94638 13.6809 8.49837 14.5 7.7355V10.2135C13.5781 10.7138 12.5488 10.9837 11.5 11C10.6978 10.9786 9.90531 10.8181 9.158 10.5255C8.30921 10.1974 7.40978 10.0196 6.5 10C5.0365 10 3.466 11.4795 2.5 12.579V10.147ZM6.5 3C7.367 3 8.161 3.4535 9.002 3.934C9.919 4.458 10.867 5 12 5C12.8438 4.98583 13.6829 4.87204 14.5 4.661V6.3215C14.1585 6.723 12.958 8 11.5 8C10.681 8 10.02 7.449 9.32 6.8655C8.5515 6.2255 7.681 5.5 6.5 5.5C5.032 5.5 3.4685 7.17 2.5 8.4225V5.212C3.273 4.483 5.1295 3 6.5 3ZM2.6245 14C3.431 12.9545 5.205 11 6.5 11C7.30225 11.0214 8.09469 11.1819 8.842 11.4745C9.69079 11.8026 10.5902 11.9804 11.5 12C12.536 11.9901 13.5582 11.7618 14.5 11.33V14H2.6245Z"
        fill="#E77C40"
      />
    </svg>
  );
};

export const ProgressIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_0_170)">
        <path
          d="M15.8333 13.8334H1.5V0.833354C1.5 0.741687 1.425 0.666687 1.33333 0.666687H0.166667C0.075 0.666687 0 0.741687 0 0.833354V15.1667C0 15.2584 0.075 15.3334 0.166667 15.3334H15.8333C15.925 15.3334 16 15.2584 16 15.1667V14C16 13.9084 15.925 13.8334 15.8333 13.8334ZM3 12.5H14.1667C14.2583 12.5 14.3333 12.425 14.3333 12.3334V3.25002C14.3333 3.10002 14.1521 3.0271 14.0479 3.13127L9.66667 7.51252L7.05417 4.92919C7.02284 4.89817 6.98054 4.88077 6.93646 4.88077C6.89238 4.88077 6.85007 4.89817 6.81875 4.92919L2.88125 8.87919C2.86596 8.89451 2.85385 8.91271 2.84562 8.93273C2.8374 8.95275 2.83322 8.97421 2.83333 8.99585V12.3334C2.83333 12.425 2.90833 12.5 3 12.5Z"
          fill="#40BB15"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_170">
          <rect
            width="16"
            height="14.6667"
            fill="white"
            transform="translate(0 0.666687)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowRightIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_0_175)">
        <path
          d="M0 13.7143L5.71428 8L0 2.28571L1.14286 0L9.14286 8L1.14286 16L0 13.7143Z"
          fill="#23A6F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_175">
          <rect width="9.14286" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HumanIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width="27"
      height="28"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4557 8.84245C19.4557 12.1466 16.8065 14.796 13.5 14.796C10.1946 14.796 7.54427 12.1466 7.54427 8.84245C7.54427 5.53829 10.1946 2.89001 13.5 2.89001C16.8065 2.89001 19.4557 5.53829 19.4557 8.84245ZM13.5 25.39C8.62017 25.39 4.5 24.5969 4.5 21.5369C4.5 18.4757 8.64605 17.7107 13.5 17.7107C18.381 17.7107 22.5 18.5038 22.5 21.5639C22.5 24.625 18.3539 25.39 13.5 25.39Z"
        fill="white"
      />
    </svg>
  );
};

export const CalendarIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
    >
      <path
        d="M19.5 8.45V4.5C19.5 3.94772 19.0523 3.5 18.5 3.5H15.5M19.5 8.45H1.5M19.5 8.45V19.5C19.5 20.0523 19.0523 20.5 18.5 20.5H2.5C1.94772 20.5 1.5 20.0523 1.5 19.5V8.45M1.5 8.45V4.5C1.5 3.94772 1.94772 3.5 2.5 3.5H5.5M5.5 3.5V0.5M5.5 3.5H15.5M15.5 3.5V0.5M12.5 15V13.5H15.5V15M12.5 15V16.5H15.5V15M12.5 15H15.5"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

export const CarouselNext: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="88"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline stroke="white" points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};

export const CarouselPrev: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="88"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline stroke="white" points="15 18 9 12 15 6"></polyline>
    </svg>
  );
};

export const PointsIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="25"
      viewBox="0 0 20 25"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.083252 10.5373C0.083252 5.17079 4.56778 0.833252 9.99227 0.833252C15.4321 0.833252 19.9166 5.17079 19.9166 10.5373C19.9166 13.2416 18.9331 15.7522 17.3143 17.8801C15.5285 20.2274 13.3274 22.2725 10.8499 23.8777C10.2828 24.2487 9.7711 24.2767 9.14878 23.8777C6.65711 22.2725 4.45602 20.2274 2.6855 17.8801C1.06557 15.7522 0.083252 13.2416 0.083252 10.5373ZM6.72652 10.8395C6.72652 12.6372 8.19352 14.0512 9.99227 14.0512C11.7922 14.0512 13.2733 12.6372 13.2733 10.8395C13.2733 9.05568 11.7922 7.57289 9.99227 7.57289C8.19352 7.57289 6.72652 9.05568 6.72652 10.8395Z"
        fill="white"
      />
    </svg>
  );
};

export const MapIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="25"
      viewBox="0 0 20 25"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.083252 10.5373C0.083252 5.17079 4.56778 0.833252 9.99227 0.833252C15.4321 0.833252 19.9166 5.17079 19.9166 10.5373C19.9166 13.2416 18.9331 15.7522 17.3143 17.8801C15.5285 20.2274 13.3274 22.2725 10.8499 23.8777C10.2828 24.2487 9.7711 24.2767 9.14878 23.8777C6.65711 22.2725 4.45602 20.2274 2.6855 17.8801C1.06557 15.7522 0.083252 13.2416 0.083252 10.5373ZM6.72652 10.8395C6.72652 12.6372 8.19352 14.0512 9.99227 14.0512C11.7922 14.0512 13.2733 12.6372 13.2733 10.8395C13.2733 9.05568 11.7922 7.57289 9.99227 7.57289C8.19352 7.57289 6.72652 9.05568 6.72652 10.8395Z"
        fill="white"
      />
    </svg>
  );
};

export const CircleExclamation = ({
  size = 34,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size || width}
    height={size || height}
  >
    <path
      fill="currentColor"
      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
    />
  </svg>
);