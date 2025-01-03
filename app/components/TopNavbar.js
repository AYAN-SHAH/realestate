// components/HeaderTop.js
import Image from "next/image";

const HeaderTop = () => {
	return (
		<div className="header-top bg-gray-100  border-gray-300 py-2">
			<div className="template-ad flex items-center justify-center space-x-">
				<Image
					src="/badge-icon.svg"
					alt="icon"
					width={18}
					height={18}
					className="mx-2"
				/>
				<h5 className="text-xs font-medium text-gray-800">
					No 1, Realestate Website to Buy / Sell Your Place{" "}
					<span className="text-[#7065FD] ">First Listing Free!!!</span>
				</h5>
			</div>
		</div>
	);
};

export default HeaderTop;
