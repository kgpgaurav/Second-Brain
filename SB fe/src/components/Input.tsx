import React, { forwardRef } from "react";

interface InputProps {
    placeholder: string;
    onChange?: () => void;
}

// Use forwardRef to handle the `ref` prop
export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, onChange }, ref) => {
    return (
        <div>
            <input
                ref={ref} // Forward the ref to the actual input element
                placeholder={placeholder}
                type="text"
                className="px-4 border rounded py-2 m-2"
                onChange={onChange} // Attach the onChange handler if provided
            />
        </div>
    );
});

// Set displayName for debugging purposes
Input.displayName = "Input";
