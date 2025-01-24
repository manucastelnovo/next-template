import Image from "next/image";

export default function AcmeLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-white`}>
      <Image
        src="/logo.png"
        alt="logo"
        width={118}
        height={41}
        className="hidden md:block"
      />
      <Image
        src="/logo.png"
        alt="logo"
        width={59}
        height={20}
        className="block md:hidden"
      />
    </div>
  );
}
