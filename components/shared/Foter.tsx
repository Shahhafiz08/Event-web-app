"use client"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="footer-content wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <div className="logo-container">
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={128}
              height={38}
            />
          </Link>
        </div>
        <p className="copyright">2024 Eventify. All Rights Reserved</p>
      </div>
      <style jsx>{`
        .footer-content {
          justify-content: space-between; /* Distribute items along the main axis */
          align-items: center; /* Center items along the cross axis */
        }

        .logo-container {
          display: flex;
          align-items: center; /* Center image vertically */
        }

        .copyright {
          text-align: right;
        }

        @media (max-width: 767px) {
          /* Styles for smaller screens (e.g., mobile) */
          .footer-content {
            flex-direction: column; /* Stack items vertically */
            text-align: center; /* Center text on smaller screens */
          }

          .copyright {
            margin-top: 10px; /* Add some spacing between the image and text */
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer


