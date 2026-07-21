import { cn } from '@/lib/utils';

export type TButtonVariant = 'primary' | 'outline' | 'outline-primary';
export type TButtonSize = 'default' | 'sm';

const base = 'inline-block cursor-pointer font-normal capitalize transition-all duration-300 select-none';

const sizeMap: Record<TButtonSize, string> = {
    default: 'rounded-full px-8 py-3',
    sm: 'rounded-sm px-4 py-1.5 text-sm',
};

const variantMap: Record<TButtonVariant, string> = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    outline: 'border-[1.5px] border-text bg-white/70 text-text-light hover:shadow',
    'outline-primary': 'border-[1.5px] border-primary text-primary',
};

export const buttonVariants = ({
    variant = 'primary',
    size = 'default',
    className,
}: {
    variant?: TButtonVariant;
    size?: TButtonSize;
    className?: string;
} = {}): string => cn(base, sizeMap[size], variantMap[variant], className);
