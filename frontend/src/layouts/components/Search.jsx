import React, { useState, useRef, useEffect } from 'react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'


const ExpandableSearchButton = () => {
	const [isExpanded, setIsExpanded] = useState(false)
	const inputRef = useRef(null)
	const containerRef = useRef(null)

	useEffect(() => {
		// Focus vào input khi mở rộng
		if (isExpanded && inputRef.current) {
			inputRef.current.focus()
		}
	}, [isExpanded])

	useEffect(() => {
		// Xử lý click bên ngoài để thu gọn
		const handleClickOutside = (event) => {
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				setIsExpanded(false)
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		}
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Tìm kiếm:', inputRef.current.value)
	}

	return (
		<div className="flex justify-end" ref={containerRef}>
			<div className={`relative transition-all duration-300 ease-in-out ${isExpanded ? 'w-48' : 'w-8'}`}>
				{isExpanded ? (
					<form onSubmit={handleSubmit} className="w-full">
						<input
							ref={inputRef}
							type="text"
							placeholder="Tìm kiếm..."
							className="w-full py-2 text-sm text-gray-700 bg-stone-50 focus:outline-none focus:ring-0"
						/>
						<div
							type="submit"
							className="absolute inset-y-0 right-0 flex items-center px-3 text-stone-500"
						>
							<MagnifyingGlassIcon />
						</div>
					</form>
				) : (
					<div
						onClick={() => setIsExpanded(true)}
						className="flex items-center w-8 h-8 justify-center text-stone-600 bg-stone-100 hover:bg-stone-200"
					>
						<MagnifyingGlassIcon />
					</div>
				)}
			</div>
		</div>
	)
}

export default ExpandableSearchButton