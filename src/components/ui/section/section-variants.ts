export type TSectionVariant = 'default' | 'box' | 'ph' | 'sm';

const variantMap: Record<TSectionVariant, string> = {
    default: 'relative py-16 xl:py-19',
    box: 'relative my-10 rounded-[36px] bg-light py-16 lg:rounded-[80px] xl:my-19 xl:py-38',
    ph: 'relative py-30 lg:pt-40 lg:pb-37 xl:pt-50',
    sm: 'py-10 xl:py-16',
};

export const sectionVariants = ({
    variant = 'default',
    className,
}: {
    variant?: TSectionVariant;
    className?: string;
} = {}): string => [variantMap[variant], className].filter(Boolean).join(' ');
