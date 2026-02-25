export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0B1D2A] to-black text-gray-300 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#F4C430] mb-3">
            Ghoomo Cabs
          </h2>
          <p className="text-sm leading-relaxed">
            Premium cab services designed for comfort, reliability, and
            seamless travel experiences across India.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[#F4C430] font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Our Fleet</li>
            <li className="hover:text-white transition">Careers</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[#F4C430] font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>City Rides</li>
            <li>Airport Transfers</li>
            <li>Outstation Trips</li>
            <li>Corporate Travel</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#F4C430] font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Delhi, India</li>
            <li>+91 81713 25155</li>
            <li>support@ghoomocabs.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2026 Ghoomo Cabs — All Rights Reserved
      </div>
    </footer>
  );
}