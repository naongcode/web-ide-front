/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,tsx}"];
export const theme = {
    extend: {
        colors: {
            base: '#2D336B', // 기본
            base2: '#7886C7', // 기본 2
            base3: '#A9B5DF', // 기본 3

            error: '#C13515', // 에러 1
            error2: '#FEF8F6', // 에러 2

            transparent1: '#9099AC', // 투명1
            transparent2: '#9099ACB8', // 투명2 (47% → B8)
            transparent3: '#7E8798', // 투명3

            gray1: '#E7E7E7', // 회색조1
            gray2: '#B0B0B0', // 회색조2
            gray3: '#717171', // 회색조3

            code: '#1F2228', // 코드
            white: '#000000', // 흰색
        },
    },
};
export const plugins = [];
  