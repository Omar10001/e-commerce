import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 bottom-auto h-40 w-full bg-[#f8f8f8] dark:bg-[#f806cc] flex flex-col md:flex-row justify-between items-center py-5 md:py-0 md:px-36 px-20 transition-all duration-300 ">
      <svg
        className="w-36 md:mr-0 dark:fill-[#2e0249] transition-all duration-300 "
        viewBox="0 0 183 84"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.04 31.304V51.464C11.04 53.48 11.536 55.032 12.528 56.12C13.52 57.208 14.976 57.752 16.896 57.752C18.816 57.752 20.288 57.208 21.312 56.12C22.336 55.032 22.848 53.48 22.848 51.464V31.304H31.056V51.416C31.056 54.424 30.416 56.968 29.136 59.048C27.856 61.128 26.128 62.696 23.952 63.752C21.808 64.808 19.408 65.336 16.752 65.336C14.096 65.336 11.712 64.824 9.6 63.8C7.52 62.744 5.872 61.176 4.656 59.096C3.44 56.984 2.832 54.424 2.832 51.416V31.304H11.04ZM70.9958 37.928C74.3238 37.928 76.9638 38.936 78.9158 40.952C80.8998 42.968 81.8918 45.768 81.8918 49.352V65H73.7318V50.456C73.7318 48.728 73.2678 47.4 72.3398 46.472C71.4438 45.512 70.1958 45.032 68.5958 45.032C66.9958 45.032 65.7318 45.512 64.8038 46.472C63.9078 47.4 63.4598 48.728 63.4598 50.456V65H55.2998V50.456C55.2998 48.728 54.8358 47.4 53.9078 46.472C53.0118 45.512 51.7638 45.032 50.1638 45.032C48.5638 45.032 47.2998 45.512 46.3718 46.472C45.4758 47.4 45.0278 48.728 45.0278 50.456V65H36.8198V38.216H45.0278V41.576C45.8598 40.456 46.9478 39.576 48.2918 38.936C49.6358 38.264 51.1558 37.928 52.8518 37.928C54.8678 37.928 56.6598 38.36 58.2278 39.224C59.8278 40.088 61.0758 41.32 61.9718 42.92C62.8998 41.448 64.1638 40.248 65.7638 39.32C67.3638 38.392 69.1078 37.928 70.9958 37.928ZM86.0003 51.56C86.0003 48.808 86.5123 46.392 87.5363 44.312C88.5923 42.232 90.0163 40.632 91.8083 39.512C93.6003 38.392 95.6003 37.832 97.8083 37.832C99.6963 37.832 101.344 38.216 102.752 38.984C104.192 39.752 105.296 40.76 106.064 42.008V38.216H114.272V65H106.064V61.208C105.264 62.456 104.144 63.464 102.704 64.232C101.296 65 99.6483 65.384 97.7603 65.384C95.5843 65.384 93.6003 64.824 91.8083 63.704C90.0163 62.552 88.5923 60.936 87.5363 58.856C86.5123 56.744 86.0003 54.312 86.0003 51.56ZM106.064 51.608C106.064 49.56 105.488 47.944 104.336 46.76C103.216 45.576 101.84 44.984 100.208 44.984C98.5763 44.984 97.1843 45.576 96.0323 46.76C94.9123 47.912 94.3523 49.512 94.3523 51.56C94.3523 53.608 94.9123 55.24 96.0323 56.456C97.1843 57.64 98.5763 58.232 100.208 58.232C101.84 58.232 103.216 57.64 104.336 56.456C105.488 55.272 106.064 53.656 106.064 51.608ZM128.418 42.68C129.378 41.208 130.578 40.056 132.018 39.224C133.458 38.36 135.058 37.928 136.818 37.928V46.616H134.562C132.514 46.616 130.978 47.064 129.954 47.96C128.93 48.824 128.418 50.36 128.418 52.568V65H120.21V38.216H128.418V42.68ZM167.19 38.216V65H158.982V61.352C158.15 62.536 157.014 63.496 155.574 64.232C154.166 64.936 152.598 65.288 150.87 65.288C148.822 65.288 147.014 64.84 145.446 63.944C143.878 63.016 142.662 61.688 141.798 59.96C140.934 58.232 140.502 56.2 140.502 53.864V38.216H148.662V52.76C148.662 54.552 149.126 55.944 150.054 56.936C150.982 57.928 152.23 58.424 153.798 58.424C155.398 58.424 156.662 57.928 157.59 56.936C158.518 55.944 158.982 54.552 158.982 52.76V38.216H167.19Z" />
        <path d="M177 53C173.692 53 171 55.6916 171 59C171 62.3084 173.692 65 177 65C180.308 65 183 62.3084 183 59C183 55.6916 180.308 53 177 53ZM177.577 62.2282H176.423V61.0743H177.577V62.2282ZM177.462 60.3846H176.538L176.365 55.7692H177.635L177.462 60.3846Z" />
        <path
          className="fill-[#fde047] stroke-orange-200 dark:stroke-none dark:fill-[#2e0249] transition-all duration-500"
          d="M27.9179 10.9235L27.9004 10.9061C27.899 10.9051 27.8979 10.9038 27.8972 10.9023L17.0005 0L6.10386 10.902C6.10261 10.9033 6.10191 10.905 6.10064 10.9058L6.08266 10.9232C4.41642 12.5996 3.35807 14.7852 3.07585 17.1325C2.79364 19.4798 3.30376 21.8542 4.52511 23.8781C5.74647 25.9021 7.60897 27.4596 9.81655 28.3028C12.0241 29.146 14.4501 29.2268 16.7088 28.5321C16.8988 28.4739 17.102 28.4739 17.2921 28.5321C19.5506 29.2265 21.9764 29.1457 24.1838 28.3024C26.3913 27.459 28.2536 25.9017 29.4749 23.8779C30.6961 21.854 31.2063 19.4798 30.9242 17.1327C30.6421 14.7855 29.5839 12.5999 27.9179 10.9235ZM9.97856 18.1127C9.92551 18.1658 9.88344 18.2288 9.85475 18.2981C9.82605 18.3673 9.81128 18.4417 9.81129 18.5167C9.83068 20.4409 10.3742 22.3232 11.3834 23.9613C11.4063 23.9985 11.4169 24.042 11.4136 24.0855C11.4104 24.129 11.3934 24.1704 11.3653 24.2037C11.3371 24.2371 11.2991 24.2606 11.2567 24.271C11.2143 24.2814 11.1697 24.2782 11.1293 24.2617C10.3707 23.9425 9.68145 23.4784 9.10025 22.8954C7.90917 21.7035 7.23957 20.0874 7.23848 18.402C7.2374 16.7165 7.90494 15.0995 9.0945 13.9062L17.0005 5.9971L24.906 13.9062C26.0958 15.0994 26.7636 16.7164 26.7624 18.402C26.7615 20.0874 26.0917 21.7035 24.9006 22.8954C24.3193 23.4784 23.6302 23.9425 22.8717 24.2617C22.8311 24.2782 22.7865 24.2814 22.7442 24.271C22.7018 24.2606 22.6638 24.237 22.6356 24.2037C22.6074 24.1704 22.5904 24.129 22.5872 24.0853C22.5839 24.0419 22.5945 23.9984 22.6174 23.9612C23.6268 22.3232 24.1706 20.4409 24.1903 18.5167C24.1903 18.4417 24.1754 18.3673 24.1465 18.2979C24.1177 18.2285 24.0755 18.1656 24.0223 18.1125L20.2829 14.1443C20.2456 14.1132 20.1988 14.0961 20.1502 14.0961C20.1018 14.0961 20.0549 14.1132 20.0177 14.1443C19.9804 14.1752 19.9554 14.2185 19.9467 14.2662C19.9379 14.3139 19.9462 14.363 19.9701 14.4053C21.4225 17.0347 20.1736 20.8115 18.091 22.8954L18.08 22.9064C17.7925 23.1909 17.4045 23.3504 17.0002 23.3503C16.5958 23.3501 16.2079 23.1903 15.9206 22.9057L15.9105 22.8954C13.8271 20.8115 12.5789 17.0351 14.0315 14.4058C14.0553 14.3636 14.0637 14.3145 14.055 14.2667C14.0463 14.219 14.0211 14.1758 13.9839 14.1448C13.9467 14.1137 13.8998 14.0967 13.8513 14.0967C13.8029 14.0967 13.7559 14.1137 13.7187 14.1448L9.97856 18.1127Z"
        />
      </svg>
      <div className="flex gap-4 items-center justify-center text-[#2e0249]">
        <a className="text-base mb-1" href="">About</a>
        <a className="text-base" href=""><ion-icon name="logo-facebook"></ion-icon></a>
        <a className="text-base" href=""><ion-icon name="logo-github"></ion-icon></a>
        <a className="text-base" href=""><ion-icon name="logo-instagram"></ion-icon></a>
      </div>
    </div>
  );
};

export default Footer;
