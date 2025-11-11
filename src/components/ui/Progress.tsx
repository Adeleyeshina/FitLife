import * as ProgressPrimitive from "@radix-ui/react-progress";
import React from "react";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    value?: number;
    className?: string;
}

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    ProgressProps
>(({ value = 0, className, ...props }, ref) => {
    return (
        <ProgressPrimitive.Root
            ref={ref}
            className={`relative h-2 w-full overflow-hidden rounded-full bg-primary/20 ${className ?? ""}`}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className="h-full flex-1 bg-primary transition-all"
                style={{ transform: `translateX(-${100 - value}%)` }}
            />
        </ProgressPrimitive.Root>
    );
});

Progress.displayName = "Progress";

export default Progress;
