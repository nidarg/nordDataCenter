'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';
// import { CalendarIcon } from 'lucide-react'; // Import an icon for toggling
import DateTime from '../date-time-picker/DateTime';


export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const DateInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type,  onChange, ...props }, ref) => {
    const [inputValue, setInputValue] = React.useState('');
    const [showDatePicker, setShowDatePicker] = React.useState(false); // State for date picker visibility
    const radius = 200;
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Handle date selection from DateTimePicker
    const handleDateChange = (date: Date) => {
        const formattedDate = date.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          }); // Format date if needed
      setInputValue(formattedDate); // Update the input field with selected date
    //   setShowDatePicker(false); // Hide the date picker after selection
      onChange?.({ target: { value: formattedDate } } as React.ChangeEvent<HTMLInputElement>);
      
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${showDatePicker ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
              var(--zinc-200),
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        // onMouseEnter={() => setShowDatePicker(true)}
        // onMouseLeave={() => setShowDatePicker(false)}
        className="relative p-[2px] rounded-lg transition duration-300 group/input"
      >
        <input
         onClick={() => setShowDatePicker((prev) => !prev)}
          type={type}
          value={inputValue}
          className={cn(
            `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm
             file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
             focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400`,
            className
          )}
          ref={ref}
          readOnly // Make input read-only since picker will handle the value
          {...props}
        />
        
        {/* Toggle button for DateTimePicker */}
        {/* <button
          type="button"
          onClick={() => setShowDatePicker((prev) => !prev)}
          className="absolute left-5 top-2 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <CalendarIcon className="w-5 h-5" />
        </button> */}

        {/* DateTimePicker Popover */}
        {showDatePicker && (
           
           <div className="mt-2 top-12 right-0 z-10 bg-primary shadow-lg p-2 rounded-md">
           <DateTime onChange={handleDateChange} />
         </div>
        )}
      </motion.div>
    );
  }
);
DateInput.displayName = 'DateInput';

export { DateInput };
