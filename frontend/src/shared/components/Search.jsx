import React, { useState, useRef, useEffect } from 'react';

const ExpandableSearchButton = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const inputRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		// Focus vào input khi mở rộng
		if (isExpanded && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isExpanded]);

	useEffect(() => {
		// Xử lý click bên ngoài để thu gọn
		const handleClickOutside = (event) => {
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				setIsExpanded(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Xử lý tìm kiếm
		console.log('Tìm kiếm:', inputRef.current.value);
	};

	return (
		<div className="flex justify-end" ref={containerRef}>
			<div className={`relative transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-10'}`}>
				{isExpanded ? (
					<form onSubmit={handleSubmit} className="w-full">
						<input
							ref={inputRef}
							type="text"
							placeholder="Tìm kiếm..."
							className="w-full py-2 pl-4 pr-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/>
						<button
							type="submit"
							className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
							</svg>
						</button>
					</form>
				) : (
					<button
						onClick={() => setIsExpanded(true)}
						className="flex items-center justify-center w-10 h-10 text-gray-500 bg-white rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
					</button>
				)}
			</div>
		</div>
	);
};

export default ExpandableSearchButton;