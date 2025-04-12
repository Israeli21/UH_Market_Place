interface FeatureBoxProps {
  imageSrc: string;
  altText: string;
  description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({
  imageSrc,
  altText,
  description,
}) => {
  return (
    <div className="px-4">
      <div className="bg-white gap-2 rounded-xl p-2 transition-all duration-300 h-full flex items-center justify-center border-2 border-black-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer hover:scale-105 transition-transform">
        <div className="bg-gray-50 p-4 rounded-full mb-6">
          <img
            src={imageSrc}
            alt={altText}
            className="w-20 h-auto object-contain"
          />
        </div>
        <p className="text-md md:text-xl font-geist-sans font-medium text-center mb-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureBox;
