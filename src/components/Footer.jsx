import React from "react";

function Footer() {
  return (
    <footer>
      {/* Dynamic year updates automatically */}
      <p>Copyright © {new Date().getFullYear()}.</p>
    </footer>
  );
}

export default Footer;
