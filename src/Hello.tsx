import {Input, Select, Space} from 'antd';
import React, {FC, useState} from 'react'
import {FloatLabel} from "./FloatLabel";
import {css} from "@emotion/css";

const users: { label: string, value: string }[] = [
    {label: 'aaa', value: '111'},
    {label: 'bbb', value: '222'},
    {label: 'ccc cc cccc cc cccc', value: '333'},
    {label: 'ddd', value: '444'},
]

export const Hello: FC = () => {
    const [value, setValue] = useState<string>()
    return <Space direction={'vertical'} className={css`padding: 20px`}>
        <FloatLabel size={'small'} label="small" value={value}>
            <Input size={'small'} value={value} onChange={e => setValue(e.target.value)}/>
        </FloatLabel>
        <FloatLabel label="Middle" value={value}>
            <Input size={'middle'} value={value} onChange={e => setValue(e.target.value)}/>
        </FloatLabel>
        <FloatLabel size={'large'} label="Large" value={value}>
            <Input size={'large'} value={value} onChange={e => setValue(e.target.value)}/>
        </FloatLabel>
        <FloatLabel size={'large'} label={'Users'} value={value}>
            <Select
                size={'large'}
                onChange={setValue}
                options={users} dropdownMatchSelectWidth={false} showSearch style={{width: 100}}
                allowClear={true}
                filterOption={(value, option) => option?.label.includes(value) ?? true}
            />
        </FloatLabel>

    </Space>
};
