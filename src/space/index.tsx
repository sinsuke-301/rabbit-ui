
import React, { createContext, CSSProperties, FC, ReactNode, useMemo } from 'react';
import toArray from '../_utils/toArray';
import Compact from './compact';
import { SpaceItem } from './item';
import './style'

export const SpaceContext = createContext({
    latestIndex: 0,
});


export interface SpaceProps {

    /**
   * @description       对齐方式
   * @default           'center'
   */
    align?: 'start' | 'end' | 'center' | 'baseline';

    /**
    * @description      间距方向
    * @default          'horizontal'
    */
    direction?: 'vertical' | 'horizontal';

    className?: string;
    style?: CSSProperties;
    size?: number | [number, number];

    split?: ReactNode;
    wrap?: boolean;
    children?: ReactNode | ReactNode[];
}


const Space: FC<SpaceProps> = (props) => {

    const {
        align = 'start',
        direction = 'horizontal',
        className,
        style,
        size = 8,
        split,
        wrap = false,
        children,
        ...rest } = props

    const [horizontalSize, verticalSize] = React.useMemo(
        () => (Array.isArray(size) ? size : [size, size]),
        [size]
    );
    const Prefix = 'rabbit-space'
    const nclassName = `${Prefix}-wrapper`
    const itemClassName = `${Prefix}-item`

    const gapStyle: CSSProperties = {}
    if (wrap) gapStyle.flexWrap = 'wrap'
    if (direction === 'vertical') {
        gapStyle.display = 'flex'
        gapStyle.flexDirection = 'column'
    }
    if (align === 'center' || align === 'baseline') {
        gapStyle.alignItems = align
    } else {
        gapStyle.alignItems = `flex-${align}`
    }
    gapStyle.rowGap = horizontalSize
    gapStyle.columnGap = verticalSize


    const childNodes = toArray(children, { keepEmpty: true })
    //标记最后一个子组件
    let latestIndex = 0
    const nodes = childNodes.map((child, i) => {
        if (child !== null && child !== undefined) {
            latestIndex = i
        }
        const key = (child && child.key) || `${itemClassName}-${i}`
        return (
            <SpaceItem
                className={itemClassName}
                key={key}
                direction={direction}
                index={i}
                split={split}
                wrap={wrap}
            >
                {child}
            </SpaceItem>
        );
    });

    const spaceContext = useMemo(() => ({
        latestIndex,
    }), [latestIndex])

    return (
        <>
            <div
                className={`${nclassName} ${className === undefined ? '' : className}`}
                style={{
                    ...gapStyle,
                    ...style,
                }}
                {...rest}
            >
                <SpaceContext.Provider value={spaceContext}>{nodes}</SpaceContext.Provider>
            </div>
        </>
    )
};

Space.displayName = 'Space'

type CompoundedComponent = FC<SpaceProps> & {
    Compact: typeof Compact;
}

const CompoundedSpace = Space as CompoundedComponent;

CompoundedSpace.Compact = Compact;

export default CompoundedSpace;