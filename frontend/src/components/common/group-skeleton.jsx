import { Skeleton } from '@/components/ui/skeleton'

const GroupSkeleton = () => {
	return (
		<div className="flex items-center space-x-4 py-4">
			<Skeleton className="h-12 w-12 rounded-full" />
			<div className="space-y-2 w-full">
				<Skeleton className="w-1/1 h-[20px] rounded-full" />
				<Skeleton className="w-1/2 h-[20px] rounded-full" />
				<Skeleton className="w-6/8 h-[20px] rounded-full" />
			</div>
		</div>
	)
}

export default GroupSkeleton