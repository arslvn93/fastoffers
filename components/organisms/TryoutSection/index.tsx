import React from 'react'

const TryoutSection: React.FC = () => {
    return (
        <div
            className='relative bg-primary mt-10'
            onMouseEnter={() => {
                document.getElementById('mouseEffectId')?.classList.remove('md:block')
            }}
            onMouseLeave={() => {
                document.getElementById('mouseEffectId')?.classList.add('md:block')
            }}
        >
            <div className='absolute top-0 left-0 right-0'>
                <svg className='transform rotate-180 h-52 w-full' width="1440" height="325" viewBox="0 0 1440 325" fillOpacity="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M810.109 190.723V324.906H1439.97V141.635C1399.11 107.824 1358.5 72.4044 1316.96 48.4386C1146.99 -48.5261 971.704 0.680438 810.109 190.723Z" fill="#0A6373"></path>
                    <path d="M654.316 239.05C706.182 255.407 756.402 284.718 808.124 302.496C881.8 327.838 958.526 329.369 1032.09 303.091C1103.57 277.612 1177.69 215.47 1248.33 183.899C1310.97 155.889 1379.36 144.355 1440 179.351V324.595H366.918V283.141C458.546 224.252 557.938 209.003 654.316 239.052V239.05Z" fill="#16425b"></path>
                    <path d="M0 185.047L29.9989 177.248C59.9979 169.739 119.996 153.704 179.994 165.586C239.991 177.029 299.989 216.391 359.987 239.498C419.985 263.043 479.983 270.332 539.981 262.824C599.979 255.025 659.976 231.699 719.974 212.237C779.972 193.066 839.97 177.03 899.968 188.911C959.966 200.355 1019.96 239.717 1079.96 251.162C1139.96 263.043 1199.96 247.007 1259.95 251.162C1319.95 255.028 1379.95 278.35 1409.95 290.013L1439.97 301.858L1439.95 325H0V185.047Z" fill="#ffffff"></path>
                </svg>
            </div>

            <div className='container mx-auto mt-24 px-4 lg:px-6 xl:px-20'>
            <div className='flex flex-col lg:flex-row flex-nowrap'>
                <StepLeft />
                <StepRight />
            </div>
        </div>

            <svg className='absolute -bottom-0 left-0 right-0 w-full' fill="#ffffff" xmlns="http://www.w3.org/2000/svg" height="201" viewBox="0 0 1920.002 855.001" preserveAspectRatio="none">
                <g transform="translate(-0.999 -1)">
                    <path d="M-5389.008,1191h-1920v-143.71c15.768,7.3,31.861,14.19,47.834,20.492,15.7,6.2,31.732,11.992,47.64,17.228,15.632,5.146,31.6,9.9,47.458,14.128,15.569,4.152,31.478,7.918,47.284,11.192,15.5,3.211,31.354,6.044,47.122,8.42,15.442,2.326,31.246,4.281,46.971,5.81,15.377,1.5,31.133,2.628,46.83,3.365,15.307.719,31,1.084,46.655,1.084h.046c24.472,0,49.8-.9,75.28-2.658,24.288-1.68,49.522-4.205,75-7.505,24.088-3.12,49.242-7.044,74.763-11.661,23.853-4.316,48.939-9.4,74.564-15.124,23.864-5.327,48.2-11.18,74.405-17.894,23.335-5.979,47.634-12.512,74.287-19.972,49.481-13.85,99.739-28.871,148.341-43.4l.037-.011,9.906-2.961c41.811-11.991,82.8-23.679,124.588-34.832,46.448-12.4,87.494-22.389,125.485-30.546,21.65-4.649,42.908-8.824,63.183-12.41,21.637-3.827,43.012-7.134,63.531-9.831,21.668-2.848,43.175-5.118,63.923-6.75,21.739-1.709,43.391-2.774,64.354-3.166,12.5-.456,25.326-.687,38.111-.687,15.889,0,32.233.357,48.579,1.062,15.944.687,32.356,1.726,48.783,3.086,31.507,2.61,64.492,6.527,98.04,11.642,31.5,4.8,64.621,10.836,98.439,17.929,31.31,6.567,64.47,14.308,98.56,23.009V1191Z" transform="translate(7310.009 -334.996)" fillOpacity="0.45"></path>
                    <path d="M-5483,1034H-7403V881.554c18.207,11.395,36.9,22.133,55.547,31.915,18.248,9.571,36.987,18.5,55.7,26.548,18.288,7.862,37.075,15.1,55.839,21.522,18.313,6.264,37.144,11.93,55.971,16.84,18.334,4.782,37.207,8.987,56.093,12.5,18.352,3.414,37.262,6.275,56.207,8.5,18.358,2.16,37.3,3.792,56.312,4.851,18.355,1.022,37.333,1.541,56.406,1.54,19.793,0,40.336-.56,61.058-1.662,19.754-1.051,40.327-2.63,61.146-4.694,38.427-3.81,78.5-9.29,122.508-16.753,36.671-6.219,76.812-13.966,122.715-23.685,40.92-8.664,82.544-18.06,122.8-27.146l.022-.005,1.145-.259,8.509-1.92c74.68-15.947,142.084-30.023,210.75-40.789,37.854-5.935,72.5-10.3,105.924-13.33,18.039-1.638,35.9-2.891,53.092-3.724,18.008-.873,35.9-1.316,53.175-1.316,20.952,0,41.757.651,61.837,1.936,19.93.9,40.466,2.5,61.038,4.746,19.924,2.179,40.48,5.036,61.1,8.491,19.9,3.336,40.462,7.33,61.106,11.871,19.854,4.368,40.4,9.377,61.068,14.889,19.783,5.275,40.3,11.177,60.983,17.542,19.676,6.055,40.148,12.727,60.85,19.831,38.048,13.058,77.663,27.8,121.108,45.076V1034Zm0-39.362h0q-.048-24.324-.1-49.51l-.023-11.113v-.088c-.271-128.228-.578-273.565-.717-419.218-.125-113.67-.146-228.525-.151-335.711h1Z" transform="translate(7404 -178)" opacity="0.36"></path>
                    <path d="M-5404.415,1119.764H-6935.756c22.308-.49,45.409-1.8,68.662-3.888,22.154-1.992,45.176-4.761,68.425-8.231,21.979-3.28,44.933-7.3,68.223-11.953,21.768-4.347,44.665-9.413,68.054-15.055,21.788-5.256,44-10.992,67.92-17.537,21.3-5.83,43.487-12.175,67.819-19.4,45.18-13.413,91.07-27.891,135.45-41.892l.021-.007,4.562-1.439,4.805-1.516c39.6-11.988,78.414-23.671,117.988-34.821,43.98-12.392,82.853-22.38,118.837-30.536,20.506-4.648,40.637-8.821,59.835-12.406,20.5-3.826,40.738-7.133,60.167-9.828,20.517-2.846,40.884-5.117,60.536-6.748,20.588-1.709,41.094-2.773,60.945-3.165,11.843-.456,23.984-.687,36.085-.687,18.549,0,37.695.543,56.905,1.614,18.623,1.038,37.864,2.6,57.187,4.651,18.678,1.98,37.992,4.471,57.407,7.4,18.7,2.825,38.068,6.147,57.566,9.873,18.692,3.572,38.093,7.629,57.663,12.056,18.653,4.22,38.066,8.915,57.7,13.955,36.282,9.313,73.984,19.933,115.26,32.468a537.165,537.165,0,0,1-1.414-63.556c.638-19.879,2.185-41.528,4.731-66.186v266.826Zm-1572.31,0h-347.689V1033.17c14.512,7.331,29.323,14.288,44.022,20.677,14.453,6.282,29.2,12.191,43.845,17.562,14.392,5.28,29.088,10.191,43.68,14.6,14.333,4.328,28.976,8.292,43.521,11.782,14.274,3.425,28.868,6.492,43.374,9.117,14.22,2.572,28.767,4.794,43.237,6.6,14.167,1.77,28.67,3.2,43.106,4.236,14.089,1.016,28.524,1.695,42.9,2.018Z" transform="translate(7325.415 -263.762)"></path>
                </g>
            </svg>
        </div>
    )
}

export default TryoutSection
