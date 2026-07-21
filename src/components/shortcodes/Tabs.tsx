import { cn } from '@/lib/utils';
import { marked } from 'marked';
import React, { useEffect, useRef, useState } from 'react';

const Tabs = ({ children }: { children: React.ReactElement }) => {
    const [active, setActive] = useState<number>(0);
    const [defaultFocus, setDefaultFocus] = useState<boolean>(false);

    const tabRefs: React.RefObject<HTMLElement[]> = useRef([]);
    useEffect(() => {
        if (defaultFocus) {
            //@ts-ignore
            tabRefs.current[active]?.focus();
        } else {
            setDefaultFocus(true);
        }
    }, [active]);

    const tabLinks = Array.from(
        (children.props as any).value.matchAll(/<div\s+data-name="([^"]+)"[^>]*>((?:.|\n)*?)<\/div>/g),
        (match: RegExpMatchArray) => ({ name: match[1], children: match[0] }),
    );

    const handleKeyDown = (event: React.KeyboardEvent<EventTarget>, index: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
            setActive(index);
        } else if (event.key === 'ArrowRight') {
            setActive((active + 1) % tabLinks.length);
        } else if (event.key === 'ArrowLeft') {
            setActive((active - 1 + tabLinks.length) % tabLinks.length);
        }
    };

    return (
        <div className="overflow-hidden rounded-lg border border-border">
            <ul className="m-0! flex list-none! border-b border-border bg-light">
                {tabLinks.map((item: { name: string; children: string }, index: number) => (
                    <li
                        key={index}
                        className={cn(
                            'my-0! cursor-pointer border-b-[3px] px-8! py-2 text-lg text-text-dark',
                            index === active ? 'border-dark opacity-100' : 'border-border opacity-80',
                        )}
                        role="tab"
                        tabIndex={index === active ? 0 : -1}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        onClick={() => setActive(index)}
                        //@ts-ignore
                        ref={(ref) => (tabRefs.current[index] = ref)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
            {tabLinks.map((item: { name: string; children: string }, i: number) => (
                <div
                    className={cn('px-5 [&_p]:mb-0', active === i ? 'block p-8' : 'hidden')}
                    key={i}
                    dangerouslySetInnerHTML={{
                        __html: marked.parse(item.children),
                    }}
                />
            ))}
        </div>
    );
};

export default Tabs;
