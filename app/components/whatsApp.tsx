import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhatsApp() {
  return (
    <div className="fixed bottom-0 z-10 w-full grid p-2 place-content-end">
      <Link
        href={`https://wa.me/+225${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
        target="_blank"
        className="whatsapp"
      >
        <Image
          width={50}
          height={50}
          src="https://emisms.com/emisms_version/v1/emitic/img/whatapp.png"
          alt="whatsapp"
        />
      </Link>
    </div>
  );
}
