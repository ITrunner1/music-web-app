import { twMerge } from 'tailwind-merge';

interface BoxProps {
    children: React.ReactNode
    className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => { 
    return (
        <div className={twMerge(`h-fittext-mattewhite`, className)}>        
            {children}
        </div>
    )
}

export default Box;