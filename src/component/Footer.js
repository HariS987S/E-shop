import React from 'react'
import "../styles/PreFooter.css"
import "../styles/Footer.css"

const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M481-158q-131 0-225.5-94.5T161-478v-45l-80 80-39-39 149-149 149 149-39 39-80-80v45q0 107 76.5 183.5T481-218q29 0 55-5t49-15l43 43q-36 20-72.5 28.5T481-158Zm289-169L621-476l40-40 79 79v-41q0-107-76.5-183.5T480-738q-29 0-55 5.5T376-719l-43-43q36-20 72.5-28t74.5-8q131 0 225.5 94.5T800-478v43l80-80 39 39-149 149Z" /></svg>
const sieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m436-347 228-228-42-41-183 183-101-101-44 44 142 143Zm44 266q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z" /></svg>
const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m612-120-263-93-179 71q-17 9-33.5-1T120-173v-558q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840-788v565q0 11-7.5 19T814-192l-202 72Zm-34-75v-505l-196-66v505l196 66Zm60 0 142-47v-512l-142 54v505Zm-458-12 142-54v-505l-142 47v512Zm458-493v505-505Zm-316-66v505-505Z" /></svg>
const youtubeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
const instagramIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" /></svg>
const twitterIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
const errowIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg>

const Footer = ({ footer }) => {
    return (
        <>
            <div className="PreFooter">
                <div>
                    {repeatIcon}
                    <p> <b>Hassle-free redplacement</b> <br />10-day easy replacement policy on mi.com</p>
                </div>
                <div>
                    {sieldIcon}
                    <p> <b>100% secure placement</b> <br />We support Cards, Wallets, EMI and COD</p>
                </div>
                <div>
                    {mapIcon}
                    <p> <b>Vast service network</b> <br />1000 Mi service-center across 600 cities</p>
                </div>
            </div>

            <div className="PreFooter-2">
                <div>
                    <p>LETS'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span>
                </div>

                <div>
                    <div>
                        <input type="email" name="email" placeholder="Enter Email Address" />
                        <button>{errowIcon}</button>
                    </div>
                    <span>Thanks, You're on our email list for special offers.</span>
                </div>

                <div>
                    <p>FOLLOW MI</p>
                    <span>We want to hear from you!</span>
                </div>
                <div>
                    {youtubeIcon}{instagramIcon}{facebookIcon}{twitterIcon}
                </div>
            </div>

            <div className="footer">
                <div>
                    <p>Support</p>
                    {footer.support.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>SHOP AND LEARN</p>
                    {footer.shopAndLearn.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>RETAIL STORE</p>
                    {footer.retailStore.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>ABOUT US</p>
                    {footer.aboutUS.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>CONTACT US</p>
                    {footer.contactUs.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <div>Chat with our Virtual AI Bot (24/7 Live Agent Support)</div>
                    <button>CHAT NOW</button>
                </div>

            </div>


            <div className="footerBorder">
                <div>
                    Copyright @ 2010 -2021 Xiomi. All Right Reserved
                </div>
            </div>
        </>
    )
}

export default Footer
