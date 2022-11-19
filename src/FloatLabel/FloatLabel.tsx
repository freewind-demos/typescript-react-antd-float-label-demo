import React, {FC, PropsWithChildren, useMemo, useState} from "react";

import {css} from "@emotion/css";
import {SizeType} from "antd/lib/config-provider/SizeContext";

interface Props {
    label: string;
    size?: SizeType;
    value: any;
}

const sizeStyles = {
    'small': {
        normal: css`
          left: 6px;
          height: 22px;
          line-height: 22px;
        `,
        floating: css`
          font-size: 9px;
          top: -5px;
          left: 6px;
        `,
    },
    'middle': {
        normal: css`
          left: 7px;
          height: 32px;
          line-height: 32px;
        `,
        floating: css`
          font-size: 10px;
          top: -5px;
          left: 9px;
        `,
    },
    'large': {
        normal: css`
          left: 9px;
          height: 40px;
          line-height: 40px;
        `,
        floating: css`
          font-size: 12px;
          top: -5px;
          left: 9px;
        `
    }
}

export const FloatLabel: FC<PropsWithChildren<Props>> = ({children, label, value, size = 'middle'}) => {
    const [focus, setFocus] = useState(false);
    const floating = focus || (value && value.length !== 0)

    const styles = useMemo(() => {
        return ({
            label: css`
              position: absolute;
              top: 0;
              display: inline-block;
              pointer-events: none;
              padding-left: 3px;
              padding-right: 3px;
              transition: 0.2s ease all;
              ${sizeStyles[size].normal};
            `,
            floating: css`
              background-color: white;
              height: 10px;
              line-height: 10px;
              ${sizeStyles[size].floating};
            `
        })
    }, [size])

    return (
        <div
            className={css`
              position: relative;
            `}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            {children}
            <label className={`${styles?.label} ${floating ? styles?.floating : ''}`}>{label}</label>
        </div>
    );
};

export default FloatLabel;
