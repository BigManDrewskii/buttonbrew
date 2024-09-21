import React from 'react';
import { useTheme } from 'next-themes';

interface ButtonBrewLogoProps {
  className?: string;
}

const ButtonBrewLogo: React.FC<ButtonBrewLogoProps> = ({ className }) => {
  const { resolvedTheme } = useTheme();

  const fillColor = resolvedTheme === 'light' ? 'black' : 'white';

  return (
    <svg width="226" height="31" viewBox="0 0 226 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M13.68 0C15.5466 0 17.2133 0.320001 18.68 0.960002C20.1733 1.6 21.36 2.46667 22.24 3.56C23.12 4.65334 23.56 5.88 23.56 7.24C23.56 8.38667 23.2133 9.44 22.52 10.4C21.8266 11.36 20.8266 12.1733 19.52 12.84C21.6 13.4267 23.2266 14.4667 24.4 15.96C25.5733 17.4267 26.16 19.16 26.16 21.16C26.16 22.8933 25.7066 24.4267 24.8 25.76C23.8933 27.0933 22.64 28.1333 21.04 28.88C19.44 29.6267 17.5866 30 15.48 30H0.799951C0.399951 30 0.199951 29.8 0.199951 29.4V28.2C0.199951 27.8 0.399951 27.6 0.799951 27.6C2.77328 27.6 3.75995 26.3333 3.75995 23.8V6.2C3.75995 3.66667 2.77328 2.4 0.799951 2.4C0.399951 2.4 0.199951 2.2 0.199951 1.8V0.600002C0.199951 0.200001 0.399951 0 0.799951 0H13.68ZM12.4 12.08C14.0533 12.08 15.32 11.6533 16.2 10.8C17.1066 9.94667 17.56 8.76 17.56 7.24C17.56 5.72 17.12 4.53333 16.24 3.68C15.36 2.82667 14.1333 2.4 12.56 2.4H10.12V12.08H12.4ZM13.76 27.6C15.7866 27.6 17.36 27.04 18.48 25.92C19.6 24.7733 20.16 23.1867 20.16 21.16C20.16 17 17.5866 14.92 12.44 14.92H10.12V23.8C10.12 25.0267 10.3466 25.9733 10.8 26.64C11.2533 27.28 11.9066 27.6 12.76 27.6H13.76Z" fill={fillColor}/>
      <path d="M13.68 0C15.5466 0 17.2133 0.320001 18.68 0.960002C20.1733 1.6 21.36 2.46667 22.24 3.56C23.12 4.65334 23.56 5.88 23.56 7.24C23.56 8.38667 23.2133 9.44 22.52 10.4C21.8266 11.36 20.8266 12.1733 19.52 12.84C21.6 13.4267 23.2266 14.4667 24.4 15.96C25.5733 17.4267 26.16 19.16 26.16 21.16C26.16 22.8933 25.7066 24.4267 24.8 25.76C23.8933 27.0933 22.64 28.1333 21.04 28.88C19.44 29.6267 17.5866 30 15.48 30H0.799951C0.399951 30 0.199951 29.8 0.199951 29.4V28.2C0.199951 27.8 0.399951 27.6 0.799951 27.6C2.77328 27.6 3.75995 26.3333 3.75995 23.8V6.2C3.75995 3.66667 2.77328 2.4 0.799951 2.4C0.399951 2.4 0.199951 2.2 0.199951 1.8V0.600002C0.199951 0.200001 0.399951 0 0.799951 0H13.68ZM12.4 12.08C14.0533 12.08 15.32 11.6533 16.2 10.8C17.1066 9.94667 17.56 8.76 17.56 7.24C17.56 5.72 17.12 4.53333 16.24 3.68C15.36 2.82667 14.1333 2.4 12.56 2.4H10.12V12.08H12.4ZM13.76 27.6C15.7866 27.6 17.36 27.04 18.48 25.92C19.6 24.7733 20.16 23.1867 20.16 21.16C20.16 17 17.5866 14.92 12.44 14.92H10.12V23.8C10.12 25.0267 10.3466 25.9733 10.8 26.64C11.2533 27.28 11.9066 27.6 12.76 27.6H13.76Z" fill={fillColor}/>
<path d="M48.2887 21.92C48.2887 22.6133 48.3287 23.3067 48.4087 24C48.5154 24.6667 48.7287 25.24 49.0487 25.72C49.3954 26.1733 49.9287 26.44 50.6487 26.52C50.862 26.5467 50.982 26.6133 51.0087 26.72C51.062 26.8 51.0887 26.9067 51.0887 27.04V28.36C51.0887 28.7333 50.902 28.92 50.5287 28.92C49.222 28.92 48.1287 29 47.2487 29.16C46.3954 29.2933 45.6487 29.48 45.0087 29.72C44.3954 29.9333 43.782 30.1733 43.1687 30.44C43.062 30.4933 42.9554 30.52 42.8487 30.52H42.7687C42.7154 30.52 42.6887 30.48 42.6887 30.4C42.6887 30.32 42.7287 29.92 42.8087 29.2C42.9154 28.4533 43.0887 27.1733 43.3287 25.36C42.9554 26.1067 42.4354 26.88 41.7687 27.68C41.102 28.48 40.2887 29.16 39.3287 29.72C38.3954 30.2533 37.3154 30.52 36.0887 30.52C34.6487 30.52 33.4754 30.3067 32.5687 29.88C31.6887 29.4267 31.0087 28.84 30.5287 28.12C30.0487 27.3733 29.7154 26.5467 29.5287 25.64C29.3687 24.7067 29.2887 23.76 29.2887 22.8V16.2C29.2887 15.1067 29.0354 14.2 28.5287 13.48C28.0487 12.76 27.3154 12.4 26.3287 12.4H26.1687C25.7687 12.4 25.5687 12.2 25.5687 11.8V10.6C25.5687 10.2 25.7687 10 26.1687 10H34.2887C34.6887 10 34.8887 10.2 34.8887 10.6V23.04C34.8887 23.76 34.9554 24.4267 35.0887 25.04C35.222 25.6267 35.4887 26.1067 35.8887 26.48C36.3154 26.8267 36.942 27 37.7687 27C38.4354 27 39.102 26.84 39.7687 26.52C40.4354 26.1733 41.022 25.7467 41.5287 25.24C42.062 24.7067 42.4354 24.16 42.6487 23.6V16.2C42.6487 15.1067 42.3954 14.2 41.8887 13.48C41.4087 12.76 40.6887 12.4 39.7287 12.4H39.6487C39.2487 12.4 39.0487 12.2 39.0487 11.8V10.6C39.0487 10.2 39.2487 10 39.6487 10H47.6887C48.0887 10 48.2887 10.2 48.2887 10.6V21.92Z" fill={fillColor}/>
<path d="M64.8346 27.12C64.9146 27.2267 64.9546 27.3467 64.9546 27.48C64.9546 27.64 64.848 27.7867 64.6346 27.92L63.4346 28.68C62.7146 29.1333 61.848 29.56 60.8346 29.96C59.8213 30.3333 58.808 30.52 57.7946 30.52C56.9946 30.52 56.2346 30.3333 55.5146 29.96C54.8213 29.5867 54.2613 28.96 53.8346 28.08C53.408 27.1733 53.1946 25.9333 53.1946 24.36V16.96C53.1946 16.24 53.1546 15.5333 53.0746 14.84C52.9946 14.12 52.7413 13.5333 52.3146 13.08C51.9146 12.6267 51.2346 12.4 50.2746 12.4C49.8746 12.4 49.6746 12.2 49.6746 11.8V10.6C49.6746 10.2 49.8746 10 50.2746 10H53.1946V7.32C53.1946 6.97333 53.3146 6.73333 53.5546 6.6C54.1413 6.28 54.9146 5.84 55.8746 5.28C56.8346 4.69333 57.688 4.02667 58.4346 3.28C58.488 3.22667 58.5546 3.2 58.6346 3.2H58.7146C58.768 3.2 58.7946 3.24 58.7946 3.32V10H64.1546C64.5546 10 64.7546 10.2 64.7546 10.6V12.32C64.7546 12.72 64.5546 12.92 64.1546 12.92H58.7946V24.36C58.7946 25.4 58.9546 26.12 59.2746 26.52C59.5946 26.8933 59.9946 27.08 60.4746 27.08C60.928 27.08 61.408 26.96 61.9146 26.72C62.4213 26.4533 62.888 26.1867 63.3146 25.92C63.5013 25.8133 63.648 25.76 63.7546 25.76C63.9146 25.76 64.0613 25.8667 64.1946 26.08L64.8346 27.12Z" fill={fillColor}/>
<path d="M79.8315 27.12C79.9115 27.2267 79.9515 27.3467 79.9515 27.48C79.9515 27.64 79.8448 27.7867 79.6315 27.92L78.4315 28.68C77.7115 29.1333 76.8448 29.56 75.8315 29.96C74.8182 30.3333 73.8048 30.52 72.7915 30.52C71.9915 30.52 71.2315 30.3333 70.5115 29.96C69.8182 29.5867 69.2582 28.96 68.8315 28.08C68.4048 27.1733 68.1915 25.9333 68.1915 24.36V16.96C68.1915 16.24 68.1515 15.5333 68.0715 14.84C67.9915 14.12 67.7382 13.5333 67.3115 13.08C66.9115 12.6267 66.2315 12.4 65.2715 12.4C64.8715 12.4 64.6715 12.2 64.6715 11.8V10.6C64.6715 10.2 64.8715 10 65.2715 10H68.1915V7.32C68.1915 6.97333 68.3115 6.73333 68.5515 6.6C69.1382 6.28 69.9115 5.84 70.8715 5.28C71.8315 4.69333 72.6848 4.02667 73.4315 3.28C73.4848 3.22667 73.5515 3.2 73.6315 3.2H73.7115C73.7648 3.2 73.7915 3.24 73.7915 3.32V10H79.1515C79.5515 10 79.7515 10.2 79.7515 10.6V12.32C79.7515 12.72 79.5515 12.92 79.1515 12.92H73.7915V24.36C73.7915 25.4 73.9515 26.12 74.2715 26.52C74.5915 26.8933 74.9915 27.08 75.4715 27.08C75.9248 27.08 76.4048 26.96 76.9115 26.72C77.4182 26.4533 77.8848 26.1867 78.3115 25.92C78.4982 25.8133 78.6448 25.76 78.7515 25.76C78.9115 25.76 79.0582 25.8667 79.1915 26.08L79.8315 27.12Z" fill={fillColor}/>
<path d="M89.4853 9.48C91.0053 9.48 92.4053 9.78667 93.6853 10.4C94.9919 10.9867 96.1119 11.8 97.0453 12.84C97.9786 13.8533 98.6986 15 99.2053 16.28C99.7386 17.5333 100.005 18.84 100.005 20.2C100.005 22.1733 99.5386 23.9467 98.6053 25.52C97.6719 27.0667 96.4453 28.2933 94.9253 29.2C93.4053 30.08 91.7519 30.52 89.9653 30.52C88.4453 30.52 87.0453 30.2267 85.7653 29.64C84.4853 29.0533 83.3653 28.2667 82.4053 27.28C81.4719 26.2667 80.7386 25.12 80.2053 23.84C79.6986 22.5333 79.4453 21.1733 79.4453 19.76C79.4453 17.8133 79.8986 16.0667 80.8053 14.52C81.7119 12.9733 82.9253 11.7467 84.4453 10.84C85.9653 9.93334 87.6453 9.48 89.4853 9.48ZM91.2053 27.28C91.7119 27.28 92.2719 27.1467 92.8853 26.88C93.4986 26.6133 94.0319 26.1467 94.4853 25.48C94.9653 24.8133 95.2053 23.8933 95.2053 22.72C95.2053 21.7867 95.0186 20.76 94.6453 19.64C94.2986 18.4933 93.8053 17.4 93.1653 16.36C92.5519 15.2933 91.8186 14.4267 90.9653 13.76C90.1386 13.0667 89.2319 12.72 88.2453 12.72C87.1519 12.72 86.2053 13.1333 85.4053 13.96C84.6053 14.76 84.2053 15.8667 84.2053 17.28C84.2053 18.1867 84.3786 19.2133 84.7253 20.36C85.0986 21.5067 85.5919 22.6133 86.2053 23.68C86.8453 24.72 87.5919 25.5867 88.4453 26.28C89.2986 26.9467 90.2186 27.28 91.2053 27.28Z" fill={fillColor}/>
<path d="M122.183 16.96V23.8C122.183 25.2667 122.41 26.2667 122.863 26.8C123.343 27.3333 123.97 27.6 124.743 27.6H125.063C125.463 27.6 125.663 27.8 125.663 28.2V29.4C125.663 29.8 125.463 30 125.063 30H114.423C114.023 30 113.823 29.8 113.823 29.4V28.2C113.823 27.8 114.023 27.6 114.423 27.6H114.703C115.263 27.6 115.717 27.3333 116.063 26.8C116.41 26.2667 116.583 25.2667 116.583 23.8V16.96C116.583 15.68 116.383 14.7067 115.983 14.04C115.583 13.3467 114.823 13 113.703 13C113.037 13 112.37 13.1733 111.703 13.52C111.037 13.84 110.45 14.2667 109.943 14.8C109.437 15.3067 109.063 15.8533 108.823 16.44V23.8C108.823 24.8667 109.05 25.7733 109.503 26.52C109.983 27.24 110.61 27.6 111.383 27.6H111.463C111.863 27.6 112.063 27.8 112.063 28.2V29.4C112.063 29.8 111.863 30 111.463 30H100.223C99.8234 30 99.6234 29.8 99.6234 29.4V28.2C99.6234 27.8 99.8234 27.6 100.223 27.6H100.303C101.29 27.6 102.023 27.24 102.503 26.52C102.983 25.7733 103.223 24.8667 103.223 23.8V18.76C103.223 18.04 103.17 17.3467 103.063 16.68C102.983 16.0133 102.77 15.4533 102.423 15C102.103 14.52 101.57 14.24 100.823 14.16C100.53 14.1333 100.383 13.96 100.383 13.64V12.28C100.383 12.0133 100.57 11.84 100.943 11.76C102.863 11.4667 104.503 11.0133 105.863 10.4C107.25 9.78667 108.21 9.29334 108.743 8.92C108.877 8.81334 108.983 8.76 109.063 8.76H109.103C109.157 8.76 109.183 8.78667 109.183 8.84C109.183 8.89333 109.17 9 109.143 9.16L108.463 14.08C108.837 13.4667 109.33 12.8133 109.943 12.12C110.557 11.4 111.317 10.7867 112.223 10.28C113.13 9.74667 114.183 9.48 115.383 9.48C116.823 9.48 117.997 9.69334 118.903 10.12C119.81 10.5467 120.49 11.12 120.943 11.84C121.423 12.56 121.743 13.36 121.903 14.24C122.09 15.12 122.183 16.0267 122.183 16.96Z" fill={fillColor}/>
<path d="M139.13 0C140.997 0 142.663 0.320001 144.13 0.960002C145.623 1.6 146.81 2.46667 147.69 3.56C148.57 4.65334 149.01 5.88 149.01 7.24C149.01 8.38667 148.663 9.44 147.97 10.4C147.277 11.36 146.277 12.1733 144.97 12.84C147.05 13.4267 148.677 14.4667 149.85 15.96C151.023 17.4267 151.61 19.16 151.61 21.16C151.61 22.8933 151.157 24.4267 150.25 25.76C149.343 27.0933 148.09 28.1333 146.49 28.88C144.89 29.6267 143.037 30 140.93 30H126.25C125.85 30 125.65 29.8 125.65 29.4V28.2C125.65 27.8 125.85 27.6 126.25 27.6C128.223 27.6 129.21 26.3333 129.21 23.8V6.2C129.21 3.66667 128.223 2.4 126.25 2.4C125.85 2.4 125.65 2.2 125.65 1.8V0.600002C125.65 0.200001 125.85 0 126.25 0H139.13ZM137.85 12.08C139.503 12.08 140.77 11.6533 141.65 10.8C142.557 9.94667 143.01 8.76 143.01 7.24C143.01 5.72 142.57 4.53333 141.69 3.68C140.81 2.82667 139.583 2.4 138.01 2.4H135.57V12.08H137.85ZM139.21 27.6C141.237 27.6 142.81 27.04 143.93 25.92C145.05 24.7733 145.61 23.1867 145.61 21.16C145.61 17 143.037 14.92 137.89 14.92H135.57V23.8C135.57 25.0267 135.797 25.9733 136.25 26.64C136.703 27.28 137.357 27.6 138.21 27.6H139.21Z" fill={fillColor}/>
<path d="M160.249 14.2C160.969 12.6533 161.969 11.48 163.249 10.68C164.529 9.88 165.876 9.48 167.289 9.48C168.543 9.48 169.609 9.82667 170.489 10.52C171.369 11.2133 171.809 12.24 171.809 13.6C171.809 14.1867 171.756 14.7067 171.649 15.16C171.543 15.6133 171.249 15.9467 170.769 16.16L167.009 17.68C166.849 17.7333 166.729 17.76 166.649 17.76C166.409 17.76 166.289 17.64 166.289 17.4C166.289 17.32 166.316 17.2 166.369 17.04C166.529 16.6667 166.623 16.3067 166.649 15.96C166.703 15.6133 166.729 15.3067 166.729 15.04C166.729 14.32 166.543 13.8 166.169 13.48C165.823 13.1333 165.383 12.96 164.849 12.96C164.236 12.96 163.663 13.1467 163.129 13.52C162.596 13.8933 162.129 14.3467 161.729 14.88C161.329 15.4133 161.036 15.9333 160.849 16.44V23.8C160.849 24.8667 161.089 25.7733 161.569 26.52C162.049 27.24 162.783 27.6 163.769 27.6H163.849C164.249 27.6 164.449 27.8 164.449 28.2V29.4C164.449 29.8 164.249 30 163.849 30H152.209C151.809 30 151.609 29.8 151.609 29.4V28.2C151.609 27.8 151.809 27.6 152.209 27.6H152.289C153.276 27.6 154.009 27.24 154.489 26.52C154.969 25.7733 155.209 24.8667 155.209 23.8V18.76C155.209 18.04 155.156 17.3467 155.049 16.68C154.969 16.0133 154.769 15.4533 154.449 15C154.129 14.52 153.596 14.24 152.849 14.16C152.529 14.1333 152.369 13.96 152.369 13.64V12.28C152.369 12.0133 152.569 11.84 152.969 11.76C154.863 11.4667 156.516 11 157.929 10.36C159.369 9.72 160.343 9.21333 160.849 8.84C160.929 8.78667 160.996 8.76 161.049 8.76H161.129C161.183 8.76 161.209 8.78667 161.209 8.84C161.209 8.86667 161.169 9.06667 161.089 9.44C161.036 9.81334 160.956 10.2933 160.849 10.88C160.769 11.44 160.663 12.0267 160.529 12.64C160.423 13.2267 160.329 13.7467 160.249 14.2Z" fill={fillColor}/>
<path d="M176.834 22.84C177.288 23.96 178.008 24.96 178.994 25.84C180.008 26.72 181.288 27.16 182.834 27.16C183.688 27.16 184.581 26.92 185.514 26.44C186.448 25.96 187.261 25.2133 187.954 24.2C188.034 24.0667 188.141 24 188.274 24C188.408 24 188.541 24.04 188.674 24.12C188.834 24.2 189.234 24.4267 189.874 24.8C189.981 24.88 190.034 24.9867 190.034 25.12C190.034 25.3067 189.954 25.5333 189.794 25.8C189.048 27.1867 188.034 28.32 186.754 29.2C185.474 30.08 183.808 30.52 181.754 30.52C179.541 30.52 177.634 30.0267 176.034 29.04C174.434 28.0533 173.194 26.7467 172.314 25.12C171.461 23.4933 171.034 21.72 171.034 19.8C171.034 17.96 171.301 16.3867 171.834 15.08C172.394 13.7467 173.128 12.68 174.034 11.88C174.941 11.0533 175.954 10.4533 177.074 10.08C178.221 9.68 179.381 9.48 180.554 9.48C181.888 9.48 183.061 9.74667 184.074 10.28C185.088 10.7867 185.941 11.44 186.634 12.24C187.354 13.04 187.888 13.8933 188.234 14.8C188.608 15.68 188.794 16.5067 188.794 17.28C188.794 17.4933 188.674 17.6533 188.434 17.76L176.834 22.84ZM182.794 17.12C182.794 15.84 182.488 14.7867 181.874 13.96C181.261 13.1333 180.488 12.72 179.554 12.72C178.461 12.72 177.594 13.16 176.954 14.04C176.314 14.8933 175.994 15.9733 175.994 17.28C175.994 17.68 176.008 18.1733 176.034 18.76C176.088 19.3467 176.194 19.88 176.354 20.36L182.794 17.12Z" fill={fillColor}/>
<path d="M224.67 10C225.07 10 225.27 10.2 225.27 10.6V11.8C225.27 12.2 225.07 12.4 224.67 12.4H224.07C223.643 12.4 223.256 12.56 222.91 12.88C222.59 13.2 222.203 13.8667 221.75 14.88L215.39 29.56C215.283 29.8533 215.083 30 214.79 30H212.51C212.216 30 212.003 29.8533 211.87 29.56L206.59 17.32L201.31 29.56C201.203 29.8533 200.99 30 200.67 30H198.43C198.136 30 197.923 29.8533 197.79 29.56L191.47 14.92C191.043 13.9067 190.683 13.24 190.39 12.92C190.096 12.5733 189.683 12.4 189.15 12.4H189.07C188.67 12.4 188.47 12.2 188.47 11.8V10.6C188.47 10.2 188.67 10 189.07 10H198.31C198.71 10 198.91 10.2 198.91 10.6V11.8C198.91 12.2 198.71 12.4 198.31 12.4H198.23C197.723 12.4 197.363 12.5067 197.15 12.72C196.963 12.9067 196.87 13.1867 196.87 13.56C196.87 13.9067 196.95 14.3067 197.11 14.76C197.296 15.2133 197.496 15.6933 197.71 16.2L200.91 23.68L204.35 15.16C204.696 14.36 204.87 13.72 204.87 13.24C204.87 12.68 204.59 12.4 204.03 12.4H203.15C202.803 12.4 202.63 12.2 202.63 11.8V10.6C202.63 10.2 202.816 10 203.19 10H212.79C213.19 10 213.39 10.2 213.39 10.6V11.8C213.39 12.2 213.19 12.4 212.79 12.4H212.31C211.803 12.4 211.443 12.5067 211.23 12.72C211.043 12.9067 210.95 13.1867 210.95 13.56C210.95 13.9067 211.03 14.3067 211.19 14.76C211.35 15.2133 211.536 15.6933 211.75 16.2L214.99 23.68L218.43 15.16C218.776 14.36 218.95 13.72 218.95 13.24C218.95 12.68 218.67 12.4 218.11 12.4H217.31C216.91 12.4 216.71 12.2 216.71 11.8V10.6C216.71 10.2 216.91 10 217.31 10H224.67Z" fill={fillColor}/>
</svg>

  );
};

export default ButtonBrewLogo;
// End of Selection