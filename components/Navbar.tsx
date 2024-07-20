import { cosmeticServices, medicalServices } from "@/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar w-full bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            Dr. Travis Scott
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">Profile</Link>
            </li>
            <li>
              <details>
                <summary>Medical Specialities</summary>
                <ul className="rounded-t-none bg-base-100 p-2">
                  {medicalServices.map((service) => (
                    <li key={service.id}>
                      <Link href={service.link}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
            <details>
                <summary>Cosmetic Specialities</summary>
                <ul className="rounded-t-none bg-base-100 p-2">
                  {cosmeticServices.map((service) => (
                    <li key={service.id}>
                      <Link href={service.link}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Gallery</summary>
                <ul className="rounded-t-none bg-base-100 p-2">
                  <li>
                    <Link href="/featured-photos">Featured Photos</Link>
                  </li>
                  <li>
                    <Link href="/featured-videos">Featured Videos</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
