import Image, { StaticImageData } from 'next/image';

interface AvatarProps {
  size?: 'small' | 'medium' | 'large'; // Enforce specific size options
  rounded?: boolean;
  image?: string | StaticImageData; // Optional image URL
  name?: string; // Optional name for initials
}

const Avatar = ({ size = 'large', rounded = true, image, name }: AvatarProps) => {
  const sizeClass = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-[170.92px] h-[170.92px]',
  }[size];

  const roundedClass = rounded ? 'rounded-full' : '';

  function getInitials(name: string | undefined): string {
    if (!name) return ""; // Return empty string if name is not provided
  
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");
  
    return initials;
  }

  return (
    <div
      className={`bg-[#222B40] border border-slate-600 flex items-center justify-center ${sizeClass} ${roundedClass}`}
    >
      {image ? (
        <Image
          src={image} // Type as string for image URL
          
          alt={name|| 'Default alt text'}
          className={`w-full h-full object-cover ring-2 ring-opacity-10 ${rounded ? 'rounded-full' : 'rounded-none'}`}
          height={64}
          width={64}
        />
      ) : (
        <span className="text-white text-sm font-semibold">
          {getInitials(name)} {/* Assuming getInitials is defined elsewhere */}
        </span>
      )}
    </div>
  );
};

export default Avatar;
