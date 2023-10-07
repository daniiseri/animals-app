import Image from "next/image";

export function Banner() {
  return (
    <div className="flex justify-center p-4">
      <Image
        src='/logo.JPG'
        alt="Logo Animals App"
        width={200}
        height={200}
      />
    </div>
  )
}