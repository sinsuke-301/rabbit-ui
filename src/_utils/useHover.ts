import { useState } from 'react';
import useEventListener from './useEventListener';

interface Options {
    onEnter?: () => void;
    onLeave?: () => void;
    onChange?: (isHover: boolean) => void;
}

//监听DOM元素是否有鼠标悬停
const useHover = (target: any, options?: Options) => {
    const { onEnter, onLeave, onChange } = options || {};
    const [isHover, setHover] = useState<boolean>(false);

    useEventListener(
        'mouseenter',
        () => {
            onEnter?.();
            onChange?.(true);
            setHover(true);
        },
        target,
    );

    useEventListener(
        'mouseleave',
        () => {
            onLeave?.();
            onChange?.(false);
            setHover(false);
        },
        target
    );

    return isHover;
};

export default useHover;